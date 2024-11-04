import { SimpleGrid, Text } from "@chakra-ui/react";
import UseMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";

const MovieGrid = () => {
  const [error, movies] = UseMovies();
  return (
    <>
      {error && (
        <Text color="tomato" fontSize={"2xl"}>
          {error}
        </Text>
      )}
      <SimpleGrid columns={{ sm: 1, md: 3, lg: 4 }} spacing={3} pb="10" >
        {movies.map((m) => {
          return <MovieCard movie={m} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;
