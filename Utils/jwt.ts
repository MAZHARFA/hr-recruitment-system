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
    // FIX 1: Set httpOnly to false so client-side JavaScript can access it for your dashboard
    httpOnly: false, 
    secure: isProduction, 
    maxAge: 7 * 24 * 60 * 60, // 7 days
    path: "/",
    // FIX 2: Use "lax" for standard Next.js setups so the browser doesn't block it
    sameSite: "lax" as const,
    // FIX 3: Removed "https://" and "/" from the domain name
    domain: isProduction ? "hr-recruitment-system-eight.vercel.app" : undefined,
  };

  cookieStore.set("user_role", role.toUpperCase(), cookieOptions);
  cookieStore.set("token", token, cookieOptions);

  return token;
};