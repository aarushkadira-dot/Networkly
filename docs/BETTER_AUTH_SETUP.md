# Better Auth Setup Guide

This guide explains how to set up and use Better Auth for email and password authentication in the Networkly project.

## Prerequisites

- Node.js installed
- npm or yarn package manager

## Installation

All required packages have been installed:
- `better-auth` - Main authentication library
- `express` - Server framework
- `cors` - CORS middleware
- `tsx` - TypeScript execution for development
- `concurrently` - Run multiple scripts simultaneously

## Setup Steps

### 1. Environment Variables

Create a `.env` file in the root directory (or update your existing one) with the following variables:

```env
# Better Auth
VITE_BETTER_AUTH_URL="http://localhost:3000"
BETTER_AUTH_URL="http://localhost:3000"
BETTER_AUTH_SECRET="your-secret-key-here-change-in-production"

# Supabase (for database operations - still used for profiles, opportunities, etc.)
VITE_SUPABASE_URL="https://your-project.supabase.co"
VITE_SUPABASE_ANON_KEY="your-anon-key"
```

**Important:** Generate a secure random string for `BETTER_AUTH_SECRET`. You can use:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 2. Running the Development Server

You have two options:

#### Option A: Run Both Servers Separately

Terminal 1 - Frontend (Vite):
```bash
npm run dev
```

Terminal 2 - Backend (Better Auth API):
```bash
npm run dev:server
```

#### Option B: Run Both Together

```bash
npm run dev:all
```

This will start:
- Frontend on `http://localhost:5173`
- Better Auth API on `http://localhost:3000`

### 3. Database Setup

Better Auth uses its own database for authentication. By default, it will create a SQLite database for development. For production, you'll want to configure a proper database adapter (PostgreSQL, MySQL, etc.).

The database will be automatically created when you first run the server.

### 4. Testing Authentication

1. Start both servers (frontend and backend)
2. Navigate to `http://localhost:5173`
3. Click "Sign In" or "Sign Up"
4. Try creating an account with:
   - Name (required for signup)
   - Email
   - Password (minimum 8 characters)

## Features Implemented

✅ Email and password sign up
✅ Email and password sign in
✅ Sign out
✅ Session management
✅ Protected routes
✅ Admin role checking
✅ Integration with existing Supabase database for profiles

## Features Not Yet Implemented

- Email verification (commented out in `server/auth.ts`)
- Password reset (commented out in `server/auth.ts`)
- Google OAuth (returns error message)
- Custom password hashing (using default scrypt)

## Configuration Files

- `server/auth.ts` - Better Auth server configuration
- `server/index.ts` - Express server setup
- `src/lib/auth-client.ts` - Better Auth client configuration
- `src/contexts/AuthContext.tsx` - React context for authentication
- `src/components/AuthModal.tsx` - Sign in/sign up modal

## Email Configuration (Optional)

To enable email verification and password reset, you'll need to:

1. Set up an email service (Resend, SendGrid, etc.)
2. Uncomment and implement the email functions in `server/auth.ts`
3. Configure the email service credentials

Example with a placeholder:
```typescript
sendVerificationEmail: async ({ user, url, token }, request) => {
  // Implement your email sending logic
  await sendEmail({
    to: user.email,
    subject: "Verify your email address",
    text: `Click the link to verify your email: ${url}`,
  });
},
```

## Production Deployment

For production:

1. Set `BETTER_AUTH_URL` to your production API URL
2. Set `VITE_BETTER_AUTH_URL` to your production API URL
3. Use a secure random string for `BETTER_AUTH_SECRET`
4. Configure a production database adapter
5. Set up email service for verification and password reset
6. Update CORS settings in `server/index.ts` to allow only your production domain

## Troubleshooting

### "Cannot connect to auth server"
- Make sure the backend server is running on port 3000
- Check that `VITE_BETTER_AUTH_URL` matches your server URL

### "Session not persisting"
- Check browser cookies are enabled
- Verify CORS settings allow credentials

### "Database errors"
- Ensure Better Auth has write permissions for the database directory
- Check database adapter configuration

## Migration from Supabase Auth

The project now uses Better Auth for authentication while still using Supabase for:
- User profiles
- Opportunities
- Other database operations

User profiles are automatically created in Supabase when a user signs up with Better Auth to maintain compatibility with existing features.


