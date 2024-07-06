import Link from "next/link";
import React from "react";

import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://x.com/yusuufugurlu" target="_blank">
        Yusuf Ugurlu
      </Link>
    </footer>
  );
}
