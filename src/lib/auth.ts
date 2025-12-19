import { cookies } from "next/headers";

// Simple admin authentication
// In production, use proper authentication with hashed passwords and JWT tokens

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";
const AUTH_COOKIE_NAME = "admin_auth";
const AUTH_TOKEN = "authenticated"; // In production, use a secure random token

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get(AUTH_COOKIE_NAME);
  return authCookie?.value === AUTH_TOKEN;
}

export function verifyPassword(password: string): boolean {
  return password === ADMIN_PASSWORD;
}

export async function setAuthCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(AUTH_COOKIE_NAME, AUTH_TOKEN, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24, // 24 hours
    path: "/",
  });
}

export async function clearAuthCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(AUTH_COOKIE_NAME);
}



