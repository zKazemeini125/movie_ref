import { HStack, Switch, useColorMode, Text } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <HStack>
        <Switch onChange={toggleColorMode} />
        <Text>{colorMode} mode</Text>
      </HStack>
    </>
  );
};

export default ColorModeSwitch;
