import clsx from "clsx";
import styles from "./Button.module.scss";

export default function Button({
  kind = "default",
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  kind?: "default" | "error";
  children: React.ReactNode;
}) {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
}
