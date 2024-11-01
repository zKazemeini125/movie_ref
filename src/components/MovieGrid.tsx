import { useEffect, useState } from "react";
import apiClient from "../services/api-Client";
import { IFetchMoviesList, IMovie } from "../Interface";
import { Image } from "@chakra-ui/react";

const MovieGrid = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient.get<IFetchMoviesList>("movies").then((res) => {
      setMovies(res.data.data);
      console.log(movies);
    }).catch(err=>setError(err));
  },[]);
  return (
    <>
      <ul>
        {movies.map((m) => {
          return<>
                 <li key={m.id}>{m.title}</li>
                 <Image src={m.images[2]}></Image>
          </>
   })}
      </ul>
    </>
  );
};

export default MovieGrid;
