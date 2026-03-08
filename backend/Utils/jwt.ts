import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Response } from "express";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}

const generateTokenAndSetCookie = (res: Response, id: string): string => {
  const token = jwt.sign({ id }, JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("Token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 15 * 24 * 60 * 60 * 1000,
  });

  return token;
};

export default generateTokenAndSetCookie;