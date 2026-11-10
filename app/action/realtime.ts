"use server";
import { inngest } from "@/inngest/client";
import { getSubscriptionToken } from "@inngest/realtime";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function fetchRealtimeSubscriptionToken() {
  const session = await getKindeServerSession();
  const user = await session.getUser();
  if (!user) return null;

  try {
    const token = await getSubscriptionToken(inngest, {
      channel: `user:${user.id}`,
      topics: [
        "generation.start",
        "analysis.start",
        "analysis.complete",
        "frame.created",
        "generation.complete",
      ],
    });

    return token;
  } catch (error) {
    console.warn("Failed to fetch realtime subscription token", error);
    return null;
  }
}
