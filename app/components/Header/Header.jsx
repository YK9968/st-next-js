import Link from "next/link";
import css from "./Header.module.css";

export default function Header() {
  return (
    <div className={css.links}>
      <Link href="/">LOGO</Link>
      <div className={css.navLinks}>
        <Link href="/contacts">Contacts</Link>
        <Link href="/about">About us</Link>
        <Link href="/forum">Forum</Link>
      </div>
    </div>
  );
}
