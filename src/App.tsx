import {  Grid, GridItem } from '@chakra-ui/react'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Grid templateAreas={`"navbar navbar"
      "sideMenu main" `}
      gap={1}
      mt={5}>
        <GridItem bg={"red"} area={"navbar"}> <Navbar/></GridItem>
        <GridItem bg={"orange"} area={"sideMenu"}>sideMenu</GridItem>
        <GridItem bg={"blue"} area={"main"}>maine</GridItem>

    </Grid>
    </>
  )
}

export default App
