import { useState } from "react";
import {
  Box,
  Button,
  chakra,
  FormControl,
  FormLabel,
  Input,
  Text,
  useColorModeValue,
  useTheme,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

const SignUpForm = () => {
  const theme = useTheme(); // Access the theme
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit sign-up form logic here
    console.log("Sign up form submitted");
  };

  const handleGoogleSignUp = () => {
    // Sign up with Google logic here
    console.log("Sign up with Google");
  };

  const formBgColor = useColorModeValue(
    theme.colors.background.primary,
    theme.colors.background.secondary
  );
  const textColor = useColorModeValue(
    theme.colors.text.primary,
    theme.colors.text.secondary
  );

  return (
    <chakra.form onSubmit={handleSubmit}>
      <Box
        bg={formBgColor}
        borderRadius="lg"
        p={8}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <FormControl id="name" mb={4}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormControl>
        <FormControl id="email" mb={4}>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormControl>
        <FormControl id="password" mb={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormControl>
        <FormControl id="confirmPassword" mb={4}>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </FormControl>
        <Button
          type="submit"
          colorScheme="blue"
          size="lg"
          fontSize="md"
          mb={4}
        >
          Sign Up
        </Button>
        <Button
          variant="outline"
          colorScheme="blue"
          leftIcon={<FcGoogle />}
          size="lg"
          fontSize="md"
          onClick={handleGoogleSignUp}
        >
          Sign Up with Google
        </Button>
        <Text mt={4} color={textColor}>
          Already have an account?{" "}
          <chakra.span color={theme.colors.accent}>Sign In</chakra.span>
        </Text>
      </Box>
    </chakra.form>
  );
};

export default SignUpForm;
