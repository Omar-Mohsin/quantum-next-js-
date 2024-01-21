// middleware.js
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
];

export default function middleware(req: NextRequest) {
  //const token = user?.access_token;

 

  // Check if the route is protected and the user doesn't have a valid token
  if (protectedRoutes.includes(req.nextUrl.pathname) && !token) {
    const loginUrl = new URL("/login", req.nextUrl.origin);
    return NextResponse.redirect(loginUrl.href);
  }

  return NextResponse.next();
}
