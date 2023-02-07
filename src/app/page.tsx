import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.scss";
import { getCurrentUser, getSession } from "@/lib/auth/session";
import { signIn, signOut } from "next-auth/react";

import Button from "@/ui/Button/Button";
import clsx from "clsx";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const session = await getSession();
  console.log(session);

  return (
    <main className={styles.wrapper}>
      <div className={styles.content}>
        <Image
          style={{
            objectFit: "contain",
          }}
          src="/assets/Spotify_Logo_RGB_White.png"
          alt="Spotify Logo"
          width={180}
          height={37}
          priority
        />
        <h1>EGP 0.00 for 3 months of Premium</h1>
        <p>
          Enjoy ad-free music listening, offline playback, and more. Cancel
          anytime.
        </p>

        <div className={styles.buttons}>
          {/* <Button onClick={() => signIn}>Login</Button> */}
          {session ? (
            <>
              Signed in as {session?.user?.email} <br />
              <Link href={"/api/auth/signout"}>Sign out</Link>
              {/* <button onClick={() => signOut()}>Sign out</button> */}
            </>
          ) : (
            <Link href={"/api/auth/signin"}>Sign in</Link>
          )}
        </div>
        <div className={styles.cover}>
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>
      </div>

      {/* <div className={styles.grid}>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Docs <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Templates <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Deploy <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  );
}
