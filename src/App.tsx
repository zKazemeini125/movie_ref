import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import MovieGrid from "./components/MovieGrid";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"navbar" "main"`,
          lg: `"navbar navbar" "sideMenu main" `,
        }}
        gap={1}
        mt={5}
        mx="1rem"
      >
        <GridItem area={"navbar"}>
          {" "}
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem bg={"orange"} area={"sideMenu"}>
            sideMenu
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <MovieGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
