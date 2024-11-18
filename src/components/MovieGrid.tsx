import { SimpleGrid, Text } from "@chakra-ui/react";
import UseMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";

const MovieGrid = () => {
  const { data, error, isLoading } = UseMovies();
  const skelconCunt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {error && (
        <Text color="tomato" fontSize={"2xl"}>
          {error}
        </Text>
      )}
      <SimpleGrid columns={{ sm: 1, md: 3, lg: 3, xl: 4 }} spacing={3} pb="10">
        {isLoading && skelconCunt.map(() => <MovieCardSkeleton />)}
        {data.map((m) => {
          return <MovieCard movie={m} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;
