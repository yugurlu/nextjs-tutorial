import Link from "next/link";
import React from "react";

export default function Movie404() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: '80vh',
        fontSize: '2rem',
      }}
    >
      <h1>We Couldn&apos;t find the movie you looking for!</h1>
      <Link style={{fontSize: '1rem', textDecoration: 'underline', marginTop: '20px'}} href="/">Go back home</Link>
    </div>
  );
}
