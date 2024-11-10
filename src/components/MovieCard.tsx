import {
  Badge,
  Button,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Show,
  Stack,
} from "@chakra-ui/react";
import { IMovie } from "../Interface";
import { IoArrowForward } from "react-icons/io5";
interface Props {
  movie: IMovie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <>
      <Show below="749px">
        <Card key={movie.id}>
          <CardBody p={1}>
            <HStack p={"5px"}>
              <Image src={movie.poster} maxH={"140px"} borderRadius={5} />
              <Heading
                fontSize={{
                  base: "1.5rem",
                  sm: "2rem",
                }}
                noOfLines={2}
              >
                {movie.title}
              </Heading>
            </HStack>
          </CardBody>
        </Card>
      </Show>
      <Show above="750px">
        <Card key={movie.id}>
          <CardBody>
            <Stack justify={"center"}>
              <Image src={movie.poster} maxH={"350px"} borderRadius={8}/>
              <Heading
                fontSize={{
                  md: "1.5rem",
                  lg: "1.5rem",
                }}
                noOfLines={1}
              >
                {movie.title}
              </Heading>
              <div className="genContainer">
                {movie.genres.map((g) => (
                  <Badge p={1} mr={2}>
                    {g}
                  </Badge>
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
      </Show>
    </>
  );
};

export default MovieCard;
