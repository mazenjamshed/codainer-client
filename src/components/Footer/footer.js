import * as React from "react";
import {
  Container,
  Box,
  Link as ChakraLink,
  SimpleGrid,
  Text,
  IconButton,
  Flex,
  useTheme,
  Image,
} from "@chakra-ui/react";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { siteConfig } from "../../utils/site-config";
import FooterSignup from "./footerSignup";

export const ExternalSocialLink = (props) => {
  const theme = useTheme();
  const { href, label, icon, type, isExternal = true } = props;
  const [isHovered, setIsHovered] = React.useState(false); // Add state for hover

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <IconButton
      bg={isHovered ? "gray.700" : "transparent"} // Use gray.700 for background color on hover
      _hover={{
        color: theme.colors.background.secondary,
      }}
      as={ChakraLink}
      href={href}
      target={isExternal ? "_blank" : "_self"}
      aria-label={label}
      icon={icon}
      onMouseEnter={handleHover} // Add onMouseEnter event listener
      onMouseLeave={handleHover} // Add onMouseLeave event listener
      {...props}
    />
  );
};

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      bg={theme.colors.background.secondary} // Use theme.colors.background.secondary for the background color
      color={theme.colors.text.primary} // Use theme.colors.text.primary for the text color
      py={{ base: 5, md: 10 }}
    >
      <Box ml="3.5rem">
        <Flex alignItems="center">
          <Text
            as="span"
            _focus={{ outline: "none", boxShadow: "none" }}
            fontWeight={theme.fontWeights.medium}
            color={theme.colors.text.primary}
            cursor="pointer"
            _hover={{
              color: theme.colors.gray[600],
              textDecoration: "none",
            }}
          >
            Social Accounts
          </Text>
          <Flex as="footer" ml=".5rem">
            <ExternalSocialLink
              href={"https://twitter.com/CodainerAi"}
              icon={<FaTwitter />}
              type="twitter"
              label="Twitter Account"
              color={theme.colors.text.primary}
            />
          </Flex>
        </Flex>
        <Box display={["none", "none", "block", "block"]}>
          <Image src={"/logo.svg"} alt="Logo" width={16} height={16} />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
