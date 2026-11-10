import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import type { NextRequest } from "next/server";

export default withAuth(async function middleware(_req: NextRequest) {}, {
  // Middleware still runs on all routes, but doesn't protect the home route
  isReturnToCurrentPage: true,
  publicPaths: [
    "/",
    "/api/inngest",
    "/x/inngest",
    "/.netlify/functions/inngest",
    "/.redwood/functions/inngest",
  ], // e.g. ["/api/public", "/blog", "/about"]
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
