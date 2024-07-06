import React from "react";

import styles from "./styles.module.css";
import Skeleton from "@components/skeleton";

export default function FeatureMovieLoading() {
  return (
    <div style={{ height: 278 }} className={styles.movieWrapper}>
      <Skeleton width="100%" height="100%" />
    </div>
  );
}
