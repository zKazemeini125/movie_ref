import { Box, Card, CardBody, Text, VStack } from "@chakra-ui/react";
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

      <Box mr={2} w={"15em"}>
        <Card >
          <CardBody>
            <VStack spacing={5} alignItems={"start"}>
              {genres && genres.length > 0 ? (
                genres.map((gen) => (
                  <Box className="list-group-item">
                    <a href="#">
                      <Text
                        fontSize={{
                          md: "1.5rem",
                          lg: "1.2rem",
                        }}
                      >
                        {gen.name}
                      </Text>
                    </a>
                  </Box>
                ))
              ) : (
                <Text>no genres</Text>
              )}
            </VStack>
          </CardBody>
        </Card>
      </Box>
    </>
  );
};

export default MovieGenres;
