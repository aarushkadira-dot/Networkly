import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { authClient, useSession } from '../lib/auth-client';
import { supabase } from '../lib/supabase';

interface User {
  id: string;
  email: string;
  name?: string;
  image?: string;
  emailVerified?: boolean;
}

interface Session {
  user: User;
  expiresAt: Date;
}

interface AuthError {
  message: string;
  status?: number;
}

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string, name?: string) => Promise<{ error: AuthError | null }>;
  signIn: (email: string, password: string) => Promise<{ error: AuthError | null }>;
  signInWithGoogle: () => Promise<{ error: AuthError | null }>;
  signOut: () => Promise<void>;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const ADMIN_EMAILS = ['saatviksantosh10@gmail.com', 'aarush.kadira@gmail.com'];

const getErrorDetails = (error: unknown): AuthError => {
  const fallback: AuthError = {
    message: 'An unexpected error occurred',
    status: 500,
  };

  if (error && typeof error === 'object') {
    const maybeMessage =
      'message' in error && typeof (error as { message?: unknown }).message === 'string'
        ? (error as { message: string }).message
        : fallback.message;

    const maybeStatus =
      'status' in error && typeof (error as { status?: unknown }).status === 'number'
        ? (error as { status: number }).status
        : fallback.status;

    return { message: maybeMessage, status: maybeStatus };
  }

  if (typeof error === 'string' && error.length > 0) {
    return { message: error, status: fallback.status };
  }

  return fallback;
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const { data: session, isPending } = useSession();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (!isPending) {
      if (session?.user) {
        const userData: User = {
          id: session.user.id,
          email: session.user.email,
          name: session.user.name,
          image: session.user.image,
          emailVerified: session.user.emailVerified,
        };
        setUser(userData);
        setIsAdmin(session.user.email ? ADMIN_EMAILS.includes(session.user.email) : false);
      } else {
        setUser(null);
        setIsAdmin(false);
      }
      setLoading(false);
    }
  }, [session, isPending]);

  const signUp = async (email: string, password: string, name?: string) => {
    try {
      const callbackURL = typeof window !== 'undefined' 
        ? `${window.location.origin}/auth/callback`
        : undefined;

      const { data, error } = await authClient.signUp.email({
        email: email.trim().toLowerCase(),
        password: password.trim(),
        name: name || email.split('@')[0], // Use email prefix as name if not provided
        callbackURL,
      });

      if (error) {
        return { 
          error: { 
            message: error.message || 'Failed to sign up',
            status: error.status 
          } 
        };
      }

      // Create profile in Supabase if user was created successfully
      if (data?.user) {
        try {
          await supabase
            .from('profiles')
            .upsert(
              {
                id: data.user.id,
                email: data.user.email,
              },
              { onConflict: 'id' },
            )
            .catch(() => {
              /* best-effort profile creation */
            });

          if (data.user.email && ADMIN_EMAILS.includes(data.user.email)) {
            await supabase
              .from('admin_users')
              .upsert(
                {
                  id: data.user.id,
                  email: data.user.email,
                },
                { onConflict: 'id' },
              )
              .catch(() => {
                /* ignore */
              });
          }
        } catch (dbError) {
          // Continue even if profile creation fails
          console.error('Profile creation error:', dbError);
        }
      }

      return { error: null };
    } catch (error) {
      return { 
        error: getErrorDetails(error)
      };
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const callbackURL = typeof window !== 'undefined' 
        ? `${window.location.origin}/auth/callback`
        : undefined;

      const { error } = await authClient.signIn.email({
        email: email.trim().toLowerCase(),
        password: password.trim(),
        rememberMe: true,
        callbackURL,
      });

      if (error) {
        return { 
          error: { 
            message: error.message || 'Failed to sign in',
            status: error.status 
          } 
        };
      }

      return { error: null };
    } catch (error) {
      return { 
        error: getErrorDetails(error)
      };
    }
  };

  const signInWithGoogle = async () => {
    // Google OAuth will be implemented separately if needed
    // For now, return an error indicating it's not yet implemented
    return { 
      error: { 
        message: 'Google sign-in is not yet implemented with Better Auth',
        status: 501
      } 
    };
  };

  const signOut = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            setUser(null);
            setIsAdmin(false);
          },
        },
      });
    } catch (err) {
      console.error('Sign out error:', err);
    }
  };

  const sessionData: Session | null = session?.user
    ? {
        user: {
          id: session.user.id,
          email: session.user.email,
          name: session.user.name,
          image: session.user.image,
          emailVerified: session.user.emailVerified,
        },
        expiresAt: session.expiresAt ? new Date(session.expiresAt) : new Date(),
      }
    : null;

  const value = {
    user,
    session: sessionData,
    loading,
    signUp,
    signIn,
    signInWithGoogle,
    signOut,
    isAdmin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
