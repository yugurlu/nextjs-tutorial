"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoSearchSharp } from "react-icons/io5";

import styles from "./styles.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [keyword, setKeyword] = useState(null);
  const router = useRouter();
  const handleSearch = (e) => {
    if ((e.key === "Enter" || e.type === "click") && keyword?.length > 0) {
      router.push(`/search?q=${keyword}`);
    }
  };

  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <Link href="/" className={styles.logo}>
          <Image  width={170} height={170} src="/Netflix_2015_logo.svg"/>
        </Link>
        <div className={styles.search} onKeyDown={handleSearch}>
          <input
            className={styles.searchArea}
            type="text"
            onChange={(e) => setKeyword(e.target.value)}
          />
          <IoSearchSharp
            size={20}
            onClick={handleSearch}
            className={styles.searchButton}
          />
        </div>
        <nav className={styles.navigationMenu}>
          <Link href="/">Movies</Link>
          <Link href="/">Series</Link>
          <Link href="/">Kids</Link>
        </nav>
      </div>
    </header>
  );
}
