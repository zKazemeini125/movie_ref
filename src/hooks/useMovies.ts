import { useEffect, useState } from "react";
import apiClient from "../services/api-Client";
import { IFetchMoviesList, IMovie } from "../Interface";
import { CanceledError } from "axios";

const UseMovies = (): [string, IMovie[], boolean] => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const controller = new AbortController();

  useEffect(() => {
    setLoading(true);
    apiClient
      .get<IFetchMoviesList>("movies",{signal:controller.signal})
      .then((res) => {
        setMovies(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
      //return ()=>controller.abort();
  }, []);
  return [error, movies, isLoading];
};

export default UseMovies;
