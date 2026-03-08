import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../modal/user.modal";
import dotenv from "dotenv";

dotenv.config();

interface DecodedToken extends JwtPayload {
  id: string;
}

export const verifyToken = async (
  req: Request & { user?: any },
  res: Response,
  next: NextFunction
): Promise<void> => {
  const token = req.cookies?.Token;

  if (!token) {
    res.status(401).json({
      success: false,
      message: "Unauthorized: No token provided",
    });
    return;
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as DecodedToken;

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      res.status(401).json({
        success: false,
        message: "Unauthorized: Invalid token payload",
      });
      return;
    }

    req.user = user;

    next();
  } catch (error: any) {
    console.error("Error verifying token:", error.message);

    res.status(403).json({
      success: false,
      message: "Forbidden: Invalid or expired token",
    });
  }
};