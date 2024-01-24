
import { NextRequest, NextResponse } from "next/server";
import {getAllWorkspaces} from './lib/AllEndPoints'
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


export default async function middleware (req: NextRequest) {

 const token = req.cookies.get('token')?.value.toString()
 
  if (protectedRoutes.includes(req.nextUrl.pathname) && !token) {
    console.log("middleware - Redirecting to login");
    const loginUrl = new URL("/login", req.nextUrl.origin);
    return NextResponse.redirect(loginUrl.href);
  }

  if (req.nextUrl.pathname === '/') {
    const workspaces = await getAllWorkspaces(token);
    if (workspaces.length === 0) {
      const createWorkspaceUrl = new URL("/create-workspace", req.nextUrl.origin);
      return NextResponse.redirect(createWorkspaceUrl.href);
    }
  }
  return NextResponse.next();

}
