import { betterAuth } from "better-auth";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
    maxPasswordLength: 128,
    // You can add email sending functions here when ready
    // sendResetPassword: async ({ user, url, token }, request) => {
    //   // Implement your email sending logic (e.g., using Resend, SendGrid, etc.)
    //   // await sendEmail({
    //   //   to: user.email,
    //   //   subject: "Reset your password",
    //   //   text: `Click the link to reset your password: ${url}`,
    //   // });
    // },
    // onPasswordReset: async ({ user }, request) => {
    //   // Handle password reset completion
    //   console.log(`Password for user ${user.email} has been reset.`);
    // },
  },
  // Email verification configuration (optional)
  // emailVerification: {
  //   sendVerificationEmail: async ({ user, url, token }, request) => {
  //     // Implement your email sending logic
  //     // await sendEmail({
  //     //   to: user.email,
  //     //   subject: "Verify your email address",
  //     //   text: `Click the link to verify your email: ${url}`,
  //     // });
  //   },
  // },
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
  basePath: "/api/auth",
  // Database configuration - Better Auth will use its default database setup
  // You can configure a custom database adapter here if needed
});

