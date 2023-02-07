import clsx from "clsx";

export default function Button({
  kind = "default",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  kind?: "default" | "error";
}) {
  return <button {...props} />;
}
