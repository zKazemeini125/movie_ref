import {
  Button,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Stack,
} from "@chakra-ui/react";
import { IMovie } from "../Interface";
import "../styles/MovieCard.css";
import { IoArrowForward } from "react-icons/io5";
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
          <div className="genContainer">
            {movie.genres.map((g) => (
              <a>
                <span>{g}</span>
              </a>
            ))}
          </div>
          <HStack justify={"flex-end"}>
            <Button
              rightIcon={<IoArrowForward />}
              variant={"ghost"}
              width={"5rem"}
            >
              more
            </Button>
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
