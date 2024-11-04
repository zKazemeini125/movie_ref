import { Card, CardBody, Heading, Image, Stack } from "@chakra-ui/react";
import { IMovie } from "../Interface";
interface Props {
  movie: IMovie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card key={movie.id}>
      <CardBody>
        <Stack justify={"center"}>
          <Image src={movie.poster} maxH={"350px"} />
          <Heading
            fontSize={{
              base: "1.5rem",
              sm: "2rem",
              md: "1.5rem",
              lg: "1.5rem",
            }}
            noOfLines={1}
          >
            {movie.title}
          </Heading>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
