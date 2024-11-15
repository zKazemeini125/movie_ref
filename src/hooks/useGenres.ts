import { useEffect, useState } from "react";
import apiClient from "../services/api-Client";
import { IFetchMoviesGenres, IGenres } from "../Interface";

const UseGenres = (): [string,IGenres[]] => {
  const [genres, setGenres] = useState<IGenres[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<IFetchMoviesGenres>("genres")
      .then((res) => {
        setGenres(res.data);
      })
      .catch((err) => setError(err.message));
  }, []);
  return [error,genres];
};

export default UseGenres;
