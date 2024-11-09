import { useEffect, useState } from "react";
import apiClient from "../services/api-Client";
import { IFetchMoviesList, IMovie } from "../Interface";

const UseMovies = (): [string, IMovie[], boolean] => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get<IFetchMoviesList>("movies")
      .then((res) => {
        setMovies(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  return [error, movies, isLoading];
};

export default UseMovies;
