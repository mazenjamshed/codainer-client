import { Button, Flex } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/system";

const BorderedButton = ({ text, paddingX, paddingY, fontSize, borderRadius, dark, marginLeft }) => {
  const theme = useTheme();

  let hoverStyles = {};
  if (dark) {
    hoverStyles = {
      backgroundColor: theme.colors.background.primary,
      color: theme.colors.text.primary,
    };
  } else {
    hoverStyles = {
      backgroundColor: theme.colors.text.primary,
      color: theme.colors.background.secondary,
    };
  }

  return (
    <Button
      colorScheme={theme.colors.primary}
      variant="outline"
      borderWidth="2px"
      borderColor={dark ? theme.colors.background.primary : theme.colors.text.primary}
      color={dark ? theme.colors.background.primary : theme.colors.text.primary}
      borderRadius={borderRadius}
      fontSize={fontSize}
      fontWeight="500"
      fontFamily="favourit, Helvetica Neue, Arial, sans-serif"
      py={paddingY}
      px={paddingX}
      ml={marginLeft}
      cursor="pointer"
      _hover={hoverStyles}
      display="flex"
      alignItems="center" // Center the text vertically
      justifyContent="center" // Center the text horizontally
    >
    Explore More
    </Button>
  );
};

export default BorderedButton;
