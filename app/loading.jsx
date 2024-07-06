"use client"
import React from "react";
import { ClipLoader } from "react-spinners"; 

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <ClipLoader color="white"  />
    </div>
  );
}
