import {Text } from "@chakra-ui/react";
import UseGenres from "../hooks/useGenres";

const MovieGenres = () => {
  const [error, genres] = UseGenres();
  return (
    <>
      {error && (
        <Text color="tomato" fontSize={"2xl"}>
          {error}
        </Text>
      )}

      <ul>
        {(genres&& genres.length>0)? genres.map((gen) => (
          <li><a href="#">{gen.name}</a></li>
        )):<Text>no genres</Text>}
      </ul>
    </>
  );
};

export default MovieGenres;
