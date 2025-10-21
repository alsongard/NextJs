import { request } from 'http';
import next from 'next';
import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: {nextUrl}})
    {
       const isLoggedIn = !!auth?.user;
       const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
       if (isOnDashboard)
       {
        if (isLoggedIn) return true; // user is permitted
        return false;// user is redirected to /login page
       }
       else if(isLoggedIn)
       {
        return Response.redirect(new URL('/dashbaord', nextUrl));
       }
       return true;      
    }
  },
  providers: [] // add providers array
} satisfies NextAuthConfig;