"use strict";
import { create } from "zustand";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

export const AUTH_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "/api/auth/bx/";
axios.defaults.withCredentials = true;

interface User {
  role: "RECRUITER" | "JOB_SEEKER";
  _id?: string;
  Name: string;
  email: string;
  imageUrl?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  error: string | null;
  isLoading: boolean;
  isCheckingAuth: boolean;
  message: string | null;
  setIsLoading: (value: boolean) => void;
  signup: (email: string, password: string, Name: string, role: string, imageUrl?: string) => Promise<void>;
  login: (email: string, password: string) => Promise<any>;
  logout: () => Promise<void>;
  verifyEmail: (code: string) => Promise<any>;
  userProfile: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  updatePassword: (token: string, password: string) => Promise<void>;
  uploadImage: (imageFile: File) => Promise<any>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,
  message: null,

  setIsLoading: (value: boolean) => set({ isLoading: value }),

  signup: async (email, password, Name, role, imageUrl) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${AUTH_URL}/signup`, {
        Name,
        email,
        password,
        imageUrl,
        role: role.toUpperCase(),
      });
      set({ user: response.data.user, isAuthenticated: true, isLoading: false });
    } catch (err) {
      const error = err as AxiosError<any>;
      set({ error: error.response?.data?.message || "Error signing up", isLoading: false });
      throw error;
    }
  },

  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${AUTH_URL}/login`, { email, password });
      set({ isAuthenticated: true, user: response.data.user, error: null, isLoading: false });
      return response.data.user;
    } catch (err) {
      const error = err as AxiosError<any>;
      toast.error(`User registration record mismatch for: ${email}`);
      set({ error: error.response?.data?.message || "Error logging in", isLoading: false });
      throw error;
    }
  },

  logout: async () => {
    set({ isLoading: true, error: null });
    try {
      await axios.post(`${AUTH_URL}/logout`);
      set({ user: null, isAuthenticated: false, error: null, isLoading: false });
    } catch (err) {
      set({ error: "Error logging out", isLoading: false });
      throw err;
    }
  },

  verifyEmail: async (code) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${AUTH_URL}/verify-email`, { code });
      set({ user: response.data.user, isAuthenticated: true, isLoading: false });
      return response.data;
    } catch (err) {
      const error = err as AxiosError<any>;
      set({ error: error.response?.data?.message || "Error verifying email", isLoading: false });
      throw error;
    }
  },

  userProfile: async () => {
    set({ isCheckingAuth: true });
    try {
      const response = await axios.get(`${AUTH_URL}/user-profile`);
      set({ user: response.data, isCheckingAuth: false });
    } catch (err) {
      set({ user: null, isCheckingAuth: false });
    }
  },

  forgotPassword: async (email) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${AUTH_URL}/forgot-password`, { email });
      set({ message: response.data.message, isLoading: false });
    } catch (error) {
      toast.error("User profile email lookup dropped.");
      set({ isLoading: false });
      throw error;
    }
  },

  updatePassword: async (token, password) => {
    set({ isLoading: true, error: null, message: null });
    try {
      const response = await axios.post(`${AUTH_URL}/updatePassword`, { token, password });
      set({ message: response.data.message, isLoading: false });
      return response.data;
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || "Error resetting password";
      set({ isLoading: false, error: errorMessage });
      throw new Error(errorMessage);
    }
  },

  uploadImage: async (imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile);
    try {
      const response = await axios.post(`${AUTH_URL}/upload-image`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    } catch (error) {
      console.error("Payload process error during upload:", error);
      throw error;
    }
  },
}));