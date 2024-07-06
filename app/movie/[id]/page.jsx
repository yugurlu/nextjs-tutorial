import React from "react";
import MovieContainer from "@containers/movie";
import { getMovieById } from "@services/movie";

export default async function MoviePage({ params }) {
  const movie = await getMovieById(params.id);
  return <MovieContainer movie={movie} />;
}
