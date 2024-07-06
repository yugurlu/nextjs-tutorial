import HomeContainer from "@/containers/home";
import { getCategories, getMoviesByCategory, getNowPlayingMovies, getPopularMovies, getTopRatedMovies } from "@services/movie";

export default async function HomePage({ params }) {
  if (params?.category?.length === 1) {
    var { genres: categories } = await getCategories();
    var { results: selectedCategoryMovies } = await getMoviesByCategory(
      params.category[0]
    );
  } else {
    const categoriesPromise = getCategories();
    const popularMoviesPromise = getPopularMovies();
    const topRatedMoviesPromise = getTopRatedMovies();
    const nowPlayingMoviesPromise = getNowPlayingMovies();

    var [
      { genres: categories },
      { results: popularMovies },
      { results: topRatedMovies },
      { results: nowPlayingMovies },
    ] = await Promise.all([
      categoriesPromise,
      popularMoviesPromise,
      topRatedMoviesPromise,
      nowPlayingMoviesPromise,
    ]);
  }
  return (
    <HomeContainer
      categories={categories}
      popularMovies={popularMovies}
      topRatedMovies={topRatedMovies}
      nowPlayingMovies={nowPlayingMovies}
      selectedCategory={{
        id: params?.category?.[0],
        movies: selectedCategoryMovies,
      }}
    />
  );
}
