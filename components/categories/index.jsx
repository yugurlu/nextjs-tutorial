import Link from "next/link";
import React from "react";

import styles from "./styles.module.css";

export default function Categories({ categories }) {
  return (
    <div className={styles.categories}>
      {categories?.map((category, index) => (
        <Link className={styles.category} key={index} href={`/${category.id}`}>
          <div className={styles.categoryName}>{category.name}</div>
        </Link>
      ))}
    </div>
  );
}
