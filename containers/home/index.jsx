import React from "react";

import FeaturedMovie from "@/components/featured-movie";
import Categories from "@components/categories";
import MovieSection from "@components/movie-section";

export default function HomeContainer({
  popularMovies = [],
  topRatedMovies = [],
  nowPlayingMovies = [],
  categories = [],
  selectedCategory,
}) {
  return (
    <div>
      <FeaturedMovie
        movie={
          popularMovies[0]
            ? popularMovies[parseInt(Math.random(20) * 20)]
            : selectedCategory.movies[parseInt(Math.random(20) * 20)]
        }
      />
      <Categories categories={categories.slice(0, 5)} />
      {selectedCategory?.movies.length ? (
        <MovieSection
          title={
            categories.filter((genre) => genre.id == selectedCategory.id)[0]
              .name
          }
          movies={selectedCategory?.movies}
        />
      ) : (
        <div>
          <MovieSection title="Popular" movies={popularMovies.slice(0, 6)} />
          <MovieSection title="Top Rated" movies={topRatedMovies.slice(0, 6)} />
          <MovieSection
            title="Now Playing"
            movies={nowPlayingMovies.slice(6, 12)}
          />
        </div>
      )}
    </div>
  );
}
