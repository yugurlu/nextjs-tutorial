"use client";

import React from "react";
import Link from "next/link";

export default function Error() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        fontSize: "2rem",
      }}
    >
      <h1>An error has occurred. Sorry for that!</h1>
      <Link
        style={{
          fontSize: "1rem",
          textDecoration: "underline",
          marginTop: "20px",
        }}
        href="/"
      >
        Go back home
      </Link>
    </div>
  );
}
