// middleware.js
import { NextRequest, NextResponse } from "next/server";
import { store } from "./redux/store"; // Import your Redux store
import { SelectUser } from "./redux/auth/authSlice";

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
  // Access the Redux store state directly from the store
  const user = SelectUser(store.getState());
  console.log("middleware - user", user);

  if (protectedRoutes.includes(req.nextUrl.pathname) && !user) {
    console.log("middleware - Redirecting to login");
    const loginUrl = new URL("/login", req.nextUrl.origin);
    return NextResponse.redirect(loginUrl.href);
  }

  return NextResponse.next();
}
