import { getServerSession } from "next-auth/next";

import { authOptions } from "#/lib/auth/auth";

// Getting the session in Next13 app/ directory
// https://next-auth.js.org/configuration/nextjs#in-app-directory
export async function getSession() {
  return await getServerSession(authOptions);
}

export async function getCurrentUser() {
  const session = await getSession();
  return session?.user;
}
