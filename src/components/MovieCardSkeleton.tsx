import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const MovieCardSkeleton = () => {
  return (
    <Card width={{ sm: "100%", md: "250px", lg: "340px" }}>
      <Skeleton height={"350px"} margin={5} mb={0} />
      <CardBody p={5}>
        <SkeletonText pb={10}/>
      </CardBody>
    </Card>
  );
};

export default MovieCardSkeleton;
