import { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  useTheme,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import AuthModal from "./../Modal/authModal";
import { FaRegEnvelope } from "react-icons/fa";

const Navbar = ({ toggleColorMode }) => {
  const theme = useTheme();
  const [logo, setLogo] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        py={4}
        px={8}
        bg={theme.colors.background.primary}
        color={theme.colors.text.primary}
      >
        <Flex alignItems={"center"}>
          <Image src={"/logo.svg"} alt="Logo" width={16} height={16} />
          <Text
            fontFamily="favourit, Helvetica Neue, Arial, sans-serif"
            mt=".8rem"
            fontSize={"lg"}
          >
            Codainer AI
          </Text>
        </Flex>
        {/* <Flex align="center" flex={1} justify="center">
          <Button variant="secondary" mx={2}>
            Upgrade
          </Button>
          <Button variant="secondary" mx={2}>
            Pricing
          </Button>
          <Button variant="secondary" mx={2}>
            Dashboard
          </Button>
          {/* <IconButton
            icon={!logo ? <MoonIcon /> : <SunIcon />}
            onClick={() => {
              setLogo(!logo);
              toggleColorMode();
            }}
            aria-label="Toggle Theme"
            variant="ghost"
            _hover={{
              color: theme.colors.background.primary,
              bg: theme.colors.text.primary,
            }}
            bg={theme.colors.background.primary}
            color={theme.colors.text.primary}
          /> */}
        {/* </Flex> */}
        {/* <Flex align="center" ml="auto">
          <Button variant="secondary" mr={4} onClick={handleOpenModal}>
            Sign In
          </Button>
          <Button variant="secondary" onClick={handleOpenModal}>
            Get Started
          </Button>
        </Flex> */}
        <Box
          display="flex"
          alignItems="center"
          borderWidth="2px"
          borderColor={theme.colors.text.primary}
          px={4}
          py={2}
          cursor="pointer"
          transition="background-color 0.2s"
          _hover={{
            backgroundColor: theme.colors.text.primary,
            "& svg": {
              color: theme.colors.background.secondary,
            },
            "& p": {
              color: theme.colors.background.secondary,
            },
          }}
        >
          <IconButton
            aria-label="Play"
            icon={<FaRegEnvelope />}
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
      </Flex>
      <AuthModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Navbar;
