import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import OriginalHero from "./_common/OriginalHero";
import PublicLandingPage from "./_common/PublicLandingPage";

export default async function Home() {
  const session = await getKindeServerSession();
  const user = await session.getUser();

  if (user) {
    return <OriginalHero user={user} />;
  }

  return <PublicLandingPage />;
}
