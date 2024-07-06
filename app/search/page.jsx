import React from "react";
import SearchContainer from "@containers/search";
import { getMoviesBySearch } from "@services/movie";

export default async function SearchPage({ searchParams }) {
  const { results: movies } = await getMoviesBySearch(searchParams.q.toLowerCase());
  return <SearchContainer movies={movies} />;
}
