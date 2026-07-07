import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export type UserRole = "RECRUITER" | "JOB_SEEKER";
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

  cookieStore.set("user_role", role, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax", // "strict" can also block cookies right after redirects (e.g. after login POST -> redirect)
    maxAge: 7 * 24 * 60 * 60,
    path: "/", // must be a path, NOT a full URL
  });

  cookieStore.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60,
    path: "/",
  });

  return token;
};