# LUMO

## Getting Started

1. Install dependencies: `npm install`
2. Copy the example environment file and fill in your Supabase credentials:
   ```bash
   cp env.example .env.local
   ```
3. Start the dev server: `npm run dev`

## Environment Variables

| Name | Description |
| --- | --- |
| `VITE_SUPABASE_URL` | Supabase project URL (https://your-project.supabase.co) |
| `VITE_SUPABASE_ANON_KEY` | Supabase anonymous client key |
| `VITE_SUPABASE_AUTH_REDIRECT_URL` | Optional. Override the URL Supabase redirects back to after email verification or OAuth. Defaults to `http://localhost:5173/auth/callback`. |

> Never commit your real Supabase keys. Keep them in `.env.local`.

## Supabase Auth Setup

1. Create a Supabase project and enable **Email** + **Google** providers.
2. In **Authentication → URL configuration**, add the same redirect URL that you store in `VITE_SUPABASE_AUTH_REDIRECT_URL` (e.g., `http://localhost:5173/auth/callback` and your production domain).
3. For Google:
   - Create OAuth credentials in Google Cloud Console (type: Web application).
   - Add `https://<your-supabase-project>.supabase.co/auth/v1/callback` to the authorized redirect URIs.
   - Paste the generated client ID and secret into the Supabase **Google** provider settings.

## Manual Auth Test Checklist

1. Sign up with email/password and verify that a confirmation email arrives.
2. After verification, sign in with the same credentials and confirm session-based pages work (Profile, Notifications).
3. Trigger Google sign-in and ensure it returns to the app authenticated.
4. Sign out and confirm protected routes prompt for authentication again.
