import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import MovieGrid from "./components/MovieGrid";
import MovieGenres from "./components/MovieGenres";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"navbar" "main" "footer"`,
          lg: `"navbar navbar" "sideMenu main" "sideMenu footer"`,
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
          <GridItem area={"sideMenu"}>
            <MovieGenres/>
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <MovieGrid />
        </GridItem>
        <GridItem area={"footer"} bg={"tomato"}>
          footer
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
