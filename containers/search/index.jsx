import MovieSection from "@components/movie-section";
import React from "react";

export default function SearchContainer({ movies }) {
  return <MovieSection title="Search Results" movies={movies} />;
}
