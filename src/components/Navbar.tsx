import {
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  HStack,
} from "@chakra-ui/react";
import { IoIosAirplane, IoIosMenu } from "react-icons/io";

function Navbar() {
  return (
    <>
      <HStack justify={"space-between"}>
        <Image src="src/assets/Movie.jpg" boxSize={"48px"}></Image>
        <Menu variant={"none"}>
          <Show below="md">
            <MenuButton
              as={IconButton}
              icon={<IoIosMenu size={"1.5rem"} />}
              variant={"solid"}
            />
            <MenuList>
              <MenuItem icon={<IoIosAirplane />} command="1">
                btn 1
              </MenuItem>
              <MenuItem icon={<IoIosAirplane />} command="2">
                btn 2
              </MenuItem>
              <MenuItem icon={<IoIosAirplane />} command="3">
                btn 3
              </MenuItem>
              <MenuItem icon={<IoIosAirplane />} command="4">
                btn 4
              </MenuItem>
            </MenuList>
          </Show>
        </Menu>
      </HStack>
    </>
  );
}
export default Navbar;
