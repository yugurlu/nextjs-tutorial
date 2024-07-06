import React from "react";
import CategoriesLoading from "@components/categories/loading";
import FeatureMovieLoading from "@components/featured-movie/loading";
import MoviesSectionLoading from "@components/movie-section/loading";

export default function Loading() {
  return (
    <div>
      <FeatureMovieLoading />
      <CategoriesLoading />
      <MoviesSectionLoading />
    </div>
  );
}
