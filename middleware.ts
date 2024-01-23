
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = [
  "/",
  "/profile",
  "/profile/edit-profile",
  "/profile/reset-password",
  "/create-campaign",
  "/workspace-settings",
  "/workspace-settings/:id",
  "/campaign-settings",
  "/campaign-settings/:id",
  "/oracle"
];

export default function middleware(req: NextRequest) {

 const token = req.cookies.get('token')?.value.toString()
  if (protectedRoutes.includes(req.nextUrl.pathname) && !token) {
    console.log("middleware - Redirecting to login");
    const loginUrl = new URL("/login", req.nextUrl.origin);
    return NextResponse.redirect(loginUrl.href);
  }

  return NextResponse.next();
}
