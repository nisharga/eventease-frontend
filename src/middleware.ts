/* eslint-disable @typescript-eslint/no-explicit-any */
import { jwtDecode } from 'jwt-decode';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// src > middleware.ts

const roleBasedPrivateRoutes = {
    USER: [/^\/user/],
    ATTENDEE: [/^\/attendee/]
};

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const accessToken = request.cookies.get('accessToken')?.value;
    const authRole = request.cookies.get('role')?.value;

    if (!accessToken) {
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    if (accessToken && authRole === 'ATTENDEE') {
        return NextResponse.redirect(new URL('/attendee', request.url));
    }
    if (accessToken && authRole === 'USER') {
        return NextResponse.redirect(new URL('/user', request.url));
    }
    let decodedData = null;
    if (accessToken) {
        decodedData = jwtDecode(accessToken) as any;
    }
    const role = decodedData?.role;
    type Role = keyof typeof roleBasedPrivateRoutes;
    if (roleBasedPrivateRoutes[role as Role]) {
        const routes = roleBasedPrivateRoutes[role as Role];
        if (routes.some((route) => pathname.match(route))) {
            return NextResponse.next();
        }
    }
    return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
    // matcher: ['/user/:path*']
    matcher: ['/']
    // '/auth/:path*'
};
