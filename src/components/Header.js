import React from 'react';
import { Box, Flex, Text, IconButton, useTheme, Button } from '@chakra-ui/react';
import { FaPlay } from 'react-icons/fa';
import BorderedButton from './UI/Buttons/borderedButton';

const Header = ({ headerLogo, introText }) => {
  const theme = useTheme();

  return (
    <Flex
      bg={theme.colors.background.secondary}
      color={theme.colors.text.primary}
      borderRadius="lg"
      p={4}
      height="calc(100vh - 64px)" // Subtracting the height of the navbar (64px) from the viewport height
      width="100vw" // Taking up the full viewport width
    >
      <Box flex="1" display="flex" alignItems="center" justifyContent="center" flexDirection="column">
        <Box mb={4}>
          <Text>Boost Your Workflow, Unleash Collaboration" - Experience CloudSprint's Power</Text>
        </Box>
        <Text
          fontSize="4.5rem"
          letterSpacing="-0.1rem"
          fontWeight="400"
          textAlign="center"
          fontFamily="favourit, Helvetica Neue, Arial, sans-serif"
        >
          {introText}
        </Text>
        {/* Add other introduction content */}
        <Box mt={4} display="flex" alignItems="center" justifyContent="center">
          <Box
            display="flex"
            alignItems="center"
            borderRadius="1rem"
            borderWidth="2px"
            borderColor={theme.colors.text.primary}
            px={4}
            py={2}
            cursor="pointer"
            transition="background-color 0.2s"
            _hover={{
              backgroundColor: theme.colors.text.primary,
              '& svg': {
                color: theme.colors.background.secondary,
              },
              '& p': {
                color: theme.colors.background.secondary,
              },
            }}
          >
            <IconButton
              aria-label="Play"
              icon={<FaPlay />}
              color={theme.colors.text.primary}
              fontSize="1.5rem"
              bg="transparent"
              mr={2}
            />
            <Text
              fontWeight="500"
              fontSize="1rem"
              fontFamily="favourit, Helvetica Neue, Arial, sans-serif"
              _hover={{
                color: theme.colors.background.secondary,
              }}
            >
              See How It Works
            </Text>
          </Box>
          <BorderedButton paddingX={8} paddingY={7} text="Get Started" fontFamily={theme.fonts.body} fontSize={theme.fontSizes.md} borderRadius="1rem" marginLeft={4} />
        </Box>
      </Box>
    </Flex>
  );
};

export default Header;
