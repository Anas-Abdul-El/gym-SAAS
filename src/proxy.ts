import { NextRequest, NextResponse } from "next/server";
import { auth } from "./lib/auth";

export async function proxy(req: NextRequest) {
    // TODO : middleware config
    const user = await auth()
    const isLoggedIn = !!user

    const BASE_URL = process.env.BASE_URL
    const path = req.nextUrl.pathname

    if (isLoggedIn && (path === "/auth/signIn" || path === "/auth/signUp")) return NextResponse.redirect(new URL("/", BASE_URL))

    if (!isLoggedIn && path === "/project") return NextResponse.redirect(new URL("/auth/signIn", BASE_URL))

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
}