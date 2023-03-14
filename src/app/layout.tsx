import "reflect-metadata";

import "@/src/styles/globals.scss";
import styles from "@/src/app/layout.module.scss";
import { getSession } from "#/lib/auth/session";

import { Inter } from "@next/font/google";
import Navigation from "#/ui/Navigation/Navigation";
import Auth from "../ui/Auth/Auth";

const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={inter.className}>
        <div className={styles.main} id="main">
          {session?.user ? (
            <>
              <div className={styles.sidebar} id="sidebar">
                <Navigation />
              </div>
              <div className={styles.content} id="content">
                <div className={styles.topbar}>
                  <div className={styles["topbar-bg"]}>
                    {" "}
                    <Auth isAuth={true} />
                  </div>
                </div>
                <main className={styles["main-content"]}>{children}</main>
              </div>
            </>
          ) : (
            children
          )}
        </div>
      </body>
    </html>
  );
}
