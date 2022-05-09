import Link from "next/link";
import "./Navbar.module.scss";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <nav>
        <Link href="/">
          <a>HOME</a>
        </Link>
        <Link href="/portfolio">
          <a>PORTFOLIO</a>
        </Link>
        <Link href="/contact">
          <a>CONTACT</a>
        </Link>
      </nav>
    </div>
  );
}
