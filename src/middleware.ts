import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";


// This function can be marked `async` if using `await` inside
export const middleware = async (request:NextRequest) => {
  const { pathname } = request.nextUrl;
  const isPath = (path:any) => pathname.startsWith(path);
  try {
    let cookie = request.cookies.get("jwt-token")?.value;
    if (!cookie || !cookie.startsWith("Bearer")) {
      throw new Error("Invalid token");
    }
    const secret = new TextEncoder().encode(process.env.jwt_secret);
    await jwtVerify(cookie.split("Bearer ")[1], secret);
    if (isPath("/login") || isPath("/signup")) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  } catch (error) {
    if (isPath("/login") || isPath("/signup")) {
      return NextResponse.next();
    }
    return NextResponse.redirect(
      new URL(`/login?redirectUrl=${pathname}`, request.url)
    );
  }
};


// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/myCars/:path*",
    "/dashboard/:path*",
    "/login/:path*",
    "/signup/:path*",
  ],
};