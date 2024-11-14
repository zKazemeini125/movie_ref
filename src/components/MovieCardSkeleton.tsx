import { Card, CardBody, Show, Skeleton, SkeletonText } from "@chakra-ui/react";

const MovieCardSkeleton = () => {
  return (
    <>
      <Show below="749px">
        <Card direction={"row"} p={2}>
          <Skeleton h={"140px"} w={"100px"} />
          <CardBody px={2} justifyContent={"center"}>
            <SkeletonText></SkeletonText>
          </CardBody>
        </Card>
      </Show>
      <Show above="750px">
        <Card>
          <Skeleton height={{ md: "317px", lg: "290px" }} margin={5} mb={0} />
          <CardBody p={5}>
            <SkeletonText pb={10} />
          </CardBody>
        </Card>
      </Show>
    </>
  );
};

export default MovieCardSkeleton;
