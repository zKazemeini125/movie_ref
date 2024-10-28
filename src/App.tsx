import {  Grid, GridItem } from '@chakra-ui/react'

function App() {

  return (
    <>
    <Grid templateAreas={`"navbar navbar"
      "sideMenu main" `}
      gap={1}>
        <GridItem bg={"red"} area={"navbar"}> navbar</GridItem>
        <GridItem bg={"orange"} area={"sideMenu"}>sideMenu</GridItem>
        <GridItem bg={"blue"} area={"main"}>maine</GridItem>

    </Grid>
    </>
  )
}

export default App
