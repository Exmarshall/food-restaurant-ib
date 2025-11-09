import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const cookie = request.cookies.get("admin-auth")?.value;
    const isLoggedIn = cookie === "true";

    // Allow access to login & signup pages without auth
    if (request.nextUrl.pathname.startsWith("/admin")) {
        const isAuthPage =
            request.nextUrl.pathname === "/admin/login" ||
            request.nextUrl.pathname === "/admin/signup";

        if (!isAuthPage && !isLoggedIn) {
            return NextResponse.redirect(new URL("/admin/login", request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"],
};
