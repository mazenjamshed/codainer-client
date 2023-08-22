import React from 'react';
import { Box, Flex, Text, IconButton, useTheme, Button } from '@chakra-ui/react';
import { FaAddressBook, FaIdeal, FaPlay, FaRegEnvelope } from 'react-icons/fa';
import BorderedButton from './UI/Buttons/borderedButton';

const Header = ({ headerLogo, introText }) => {
  const theme = useTheme();

  return (
    <Flex
      bg={theme.colors.background.secondary}
      color={theme.colors.text.primary}
      // borderRadius="lg"
      // borderTop={"1px solid #fff"}
      p={4}
      height="calc(100vh - 64px)" // Subtracting the height of the navbar (64px) from the viewport height
      // Taking up the full viewport width
    >
      <Box flex="1" display="flex" alignItems="center" justifyContent="center" flexDirection="column" px="3rem">
        <Box mb={4}>
          <Text>Elevate your business with cutting-edge AI solutions and SaaS products from our innovative software house.</Text>
        </Box>
        <Text
          fontSize="3.5rem"
          letterSpacing="-0.1rem"
          fontWeight="700"
          whiteSpace={"nowrap"}
          // textAlign="center"
          fontFamily="favourit, Helvetica Neue, Arial, sans-serif"
        >
         Experience the future of AI with Codainer
        </Text>
        <Text
          fontSize="2.5rem"
          letterSpacing="-0.1rem"
          fontWeight="400"
          whiteSpace={"nowrap"}
          // textAlign="center"
          fontFamily="favourit, Helvetica Neue, Arial, sans-serif"
        >
Where Innovation Meets Software Excellence.
        </Text>
        {/* Add other introduction content */}
        <Box mt={4} display="flex" alignItems="center" justifyContent="center">
          <Box
            display="flex"
            alignItems="center"
            // borderRadius="1rem"
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
              icon={<FaRegEnvelope/>}
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
           Have An Idea? Ping me 
            </Text>
          </Box>
          <BorderedButton paddingX={8} paddingY={7} text="Get Started" fontFamily={theme.fonts.body} fontSize={theme.fontSizes.md} borderRadius="none" marginLeft={4} />
        </Box>
      </Box>
    </Flex>
  );
};

export default Header;
