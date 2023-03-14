import styles from "./Navigation.module.scss";
import Image from "next/image";

const Header = () => {
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
        <ul className={styles["nav-menu"]}>
          <li className={styles["nav-item"]}>Test 1</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
