import styles from "./Navigation.module.scss";
import Image from "next/image";

const Navigation = () => {
  //{clsx(classes['nav-menu'],click && classes.active)}
  return (
    <div className={styles["nav-content"]}>
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
      <nav aria-label="Main">
        <div className={styles["nav-content-inner"]}>
          <ul className={styles["nav-menu"]}>
            <li className={styles["nav-item"]}>Test 1</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
