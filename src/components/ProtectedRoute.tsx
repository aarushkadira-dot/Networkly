import { ReactElement, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LoadingSpinner } from './LoadingSpinner';
import { Button } from './Button';

interface ProtectedRouteProps {
  children: ReactElement;
  requireAdmin?: boolean;
  onAuthRequired?: () => void;
}

export function ProtectedRoute({ children, requireAdmin = false, onAuthRequired }: ProtectedRouteProps) {
  const { user, loading, isAdmin } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (!loading && !user) {
      onAuthRequired?.();
    }
  }, [loading, onAuthRequired, user]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-dark-navy via-deep-blue/90 to-dark-navy flex items-center justify-center">
        <LoadingSpinner size="lg" message="Checking your session..." />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-dark-navy via-deep-blue/90 to-dark-navy flex items-center justify-center px-6">
        <div className="max-w-md w-full rounded-3xl border border-white/10 bg-white/10 p-8 text-center space-y-4 text-white">
          <h2 className="text-2xl font-semibold">Sign in to continue</h2>
          <p className="text-white/80">
            This page contains personal information. Please sign in with your Networkly account to keep things secure.
          </p>
          <div className="flex flex-col gap-3">
            {onAuthRequired && (
              <Button onClick={onAuthRequired}>
                Open Sign In
              </Button>
            )}
            <Link
              to="/"
              state={{ from: location.pathname }}
              className="text-sm text-white/70 underline-offset-4 hover:underline"
            >
              Return to home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (requireAdmin && !isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-dark-navy via-deep-blue/90 to-dark-navy flex items-center justify-center px-6">
        <div className="max-w-md w-full rounded-3xl border border-white/10 bg-white/10 p-8 text-center space-y-4 text-white">
          <h2 className="text-2xl font-semibold">Admins only</h2>
          <p className="text-white/80">
            You need administrative privileges to view this area. If this is unexpected, contact a Networkly admin.
          </p>
          <Link
            to="/"
            className="text-sm text-white/70 underline-offset-4 hover:underline"
          >
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return children;
}




