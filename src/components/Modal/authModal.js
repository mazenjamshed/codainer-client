import { useState } from "react";
import {
  Box,
  Button,
  chakra,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useTheme,
} from "@chakra-ui/react";
import SignInForm from "../Forms/signInForm";
import SignUpForm from "../Forms/signUpForm";

const AuthModal = ({ isOpen, onClose }) => {
  const [signUp, setSignUp] = useState(false);
  const theme = useTheme();

  const handleSignUp = () => {
    setSignUp(!signUp);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl"> {/* Increase the size to "xl" */}
      <ModalOverlay />
      <ModalContent
        bg={theme.colors.background.tertiary} // Set the background color to black
        maxW="500px" // Set the maximum width of the modal
      >
        <ModalHeader>
          <Tabs isFitted variant="enclosed">
            <TabList mb="1rem">
              <Tab 
                onClick={() => handleSignUp()}
                _selected={{
                  borderBottomColor: "black", // Set the color of the border when selected to black
                }}
                _hover={{
                  borderBottomColor: "white", // Set the color of the border on hover to white
                  borderBottomWidth: "2px", // Increase the border width on hover
                }}
              >
                Sign In
              </Tab>
              <Tab 
                onClick={() => handleSignUp()}
                _selected={{
                  borderBottomColor: "black", // Set the color of the border when selected to black
                }}
                _hover={{
                  borderBottomColor: "white", // Set the color of the border on hover to white
                  borderBottomWidth: "2px", // Increase the border width on hover
                }}
              >
                Sign Up
              </Tab>
            </TabList>
          </Tabs>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Tabs index={signUp ? 1 : 0} onChange={() => handleSignUp()}>
            <TabPanels>
              <TabPanel>
                <SignInForm />
              </TabPanel>
              <TabPanel>
                <SignUpForm />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
        <ModalFooter>
          <Text mr={4}>
            {signUp ? "Already have an account?" : "Not a member yet?"}
          </Text>
          <Button
            variant="ghost"
            onClick={() => handleSignUp()}
            color={theme.colors.primary}
            bg={theme.colors.background.primary}
            borderWidth={2}
            borderColor={theme.colors.primary}
            _hover={{
              bg: theme.colors.primary,
              color: theme.colors.background.primary,
              borderColor: theme.colors.background.primary,
            }}
            _active={{
              bg: theme.colors.accent,
              color: theme.colors.text.primary,
            }}
            _focus={{
              boxShadow: "outline",
            }}
          >
            {signUp ? "Back to Login" : "Sign Up"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AuthModal;
