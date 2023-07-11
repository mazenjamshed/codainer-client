import { useState } from "react";
import { Box, Flex, IconButton, useTheme, Button } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import AuthModal from "./../Modal/authModal";

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
        <Box>
          <img
            src={logo ? "/dumylogo2.png" : "/dumylogo1.png"}
            alt="Logo"
            width={60}
            height={60}
            style={{ borderRadius: "5%" }}
          />
        </Box>
        <Flex align="center" flex={1} justify="center">
          <Button variant="secondary" mx={2}>
            Upgrade
          </Button>
          <Button variant="secondary" mx={2}>
            Pricing
          </Button>
          <Button variant="secondary" mx={2}>
            Dashboard
          </Button>
          <IconButton
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
          />
        </Flex>
        <Flex align="center" ml="auto">
          <Button variant="secondary" mr={4} onClick={handleOpenModal}>
            Sign In
          </Button>
          <Button variant="secondary" onClick={handleOpenModal}>
            Get Started
          </Button>
        </Flex>
      </Flex>
      <AuthModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Navbar;
