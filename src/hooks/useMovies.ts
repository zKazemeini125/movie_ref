import { useEffect, useState } from "react";
import apiClient from "../services/api-Client";
import { IFetchMoviesList, IMovie } from "../Interface";

const UseMovies = (): [string, IMovie[]] => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<IFetchMoviesList>("movies")
      .then((res) => {
        setMovies(res.data.data);
        console.log(movies);
      })
      .catch((err) => setError(err.message));
  }, []);
  return [error, movies];
};

export default UseMovies;
