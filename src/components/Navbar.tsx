import { IconButton, Menu, MenuButton, MenuItem, MenuList, Show } from "@chakra-ui/react";
import { IoIosAirplane, IoIosMenu } from "react-icons/io";

function Navbar(){
    return<>
    <Menu>
        <Show below="md">
            <MenuButton as={IconButton} icon={<IoIosMenu size={"1.5rem"} />} variant={"solid"}/>
            <MenuList>
            <MenuItem icon={<IoIosAirplane />} command="1">btn 1</MenuItem>
            <MenuItem icon={<IoIosAirplane />} command="2">btn 2</MenuItem>
            <MenuItem icon={<IoIosAirplane />} command="3">btn 3</MenuItem>
            <MenuItem icon={<IoIosAirplane />} command="4">btn 4</MenuItem>
            </MenuList>    
        </Show>   
    </Menu>
    </>
}
export default Navbar;