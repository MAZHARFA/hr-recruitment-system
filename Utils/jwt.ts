import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export type UserRole = "Recruiter" | "Job seeker";
const JWT_SECRET = process.env.JWT_SECRET;

export const generateTokenAndSetCookie = async (
  userId: string,
  role: string
): Promise<string> => {
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  const token = jwt.sign({ userId, role }, JWT_SECRET, {
    expiresIn: "7d",
  });

  const cookieStore = await cookies();
  const isProduction = process.env.NODE_ENV === "production";

  const cookieOptions = {
    httpOnly: false,      // Allowed so client-side JavaScript can see it for the dashboard
    secure: isProduction, // Enabled on Vercel (HTTPS required)
    maxAge: 7 * 24 * 60 * 60, // 7 days
    path: "/",
    sameSite: "lax" as const,
    // Note: 'domain' is omitted so the browser automatically handles Vercel's multi-subdomain structure.
  };

  cookieStore.set("user_role", role.toUpperCase(), cookieOptions);
  cookieStore.set("token", token, cookieOptions);

  return token;
};