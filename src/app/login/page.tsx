import Image from "next/image";

import styles from "./page.module.scss";
import { getSession } from "#/lib/auth/session";
import Auth from "#/ui/Auth/Auth";

export default async function Home() {
  const session = await getSession();

  console.log("login session ", session);

  return (
    <main className={styles.wrapper}>
      <div className={styles.content}>
        <div>
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
        </div>
        <div>
          <Auth isAuth={!!session?.user} />
        </div>
      </div>
    </main>
  );
}
