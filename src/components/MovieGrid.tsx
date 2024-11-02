import { Image, Text } from "@chakra-ui/react";
import UseMovies from "../hooks/useMovies";

const MovieGrid = () => {
  const [error, movies] = UseMovies();
  return (
    <>
      {error && (
        <Text color="tomato" fontSize={"2xl"}>
          {error}
        </Text>
      )}
      <ul>
        {movies.map((m) => {
          return (
            <>
              <li key={m.id}>{m.title}</li>
              <Image src={m.images[2]}></Image>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default MovieGrid;
