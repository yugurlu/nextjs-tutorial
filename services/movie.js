const movieApi = async (pathname, query = "") => {
  try {
    const res = await fetch(
      `${process.env.API_URL}${pathname}?api_key=${process.env.API_KEY}&${query}`
    );
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
};

const getMovieById = async (id) => {
  return await movieApi(`/movie/${id}`);
};

const getMoviesByCategory = async (genreId) => {
  return await movieApi("/discover/movie", `with_genres=${genreId}`);
};

const getCategories = async () => {
  return await movieApi("/genre/movie/list");
};

const getPopularMovies = async () => {
  return await movieApi("/movie/popular");
};

const getTopRatedMovies = async () => {
  return await movieApi("/movie/top_rated");
};

const getNowPlayingMovies = async () => {
  return await movieApi("/movie/now_playing");
};

const getMoviesBySearch = async (query) => {
  return await movieApi("/search/movie", `query=${query}`);
}

export {
  getMovieById,
  getCategories,
  getPopularMovies,
  getTopRatedMovies,
  getMoviesBySearch,
  getNowPlayingMovies,
  getMoviesByCategory,
};
