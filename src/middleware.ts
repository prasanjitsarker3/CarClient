import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AuthRoutes = ["/login", "/register"];
const roleBasePrivateRoute = {
  user: [/^\/dashboard$/, "rent-car"],
  admin: [/^\/dashboard\/admin/],
  driver: [/^\/dashboard\/driver/],
};

type Role = keyof typeof roleBasePrivateRoute;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log("pathname", pathname);

  const accessToken = cookies().get("accessToken")?.value;
  if (!accessToken) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  let decodedData = null;
  if (accessToken) {
    decodedData = jwtDecode(accessToken) as any;
  }
  const role = decodedData?.role;

  if (role && roleBasePrivateRoute[role as Role]) {
    const routes = roleBasePrivateRoute[role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/login", "/register", "/dashboard/:page*"],
};
