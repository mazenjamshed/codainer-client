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

const SignInForm = () => {
  const theme = useTheme(); // Access the theme
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit sign in form logic here
    console.log("Sign in form submitted");
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
        <Button
          w={{
            base: 'full',
            sm: 'auto',
          }}
          size='lg'
          bg={theme.colors.primary}
          _dark={{
            bg: 'gray.700',
          }}
          _hover={{
            bg: 'gray.700',
            _dark: {
              bg: 'gray.600',
            },
          }}
          color={theme.colors.background.primary}
          as='a'
         >
          Sign In
        </Button>
        <Text mt={4} color={textColor}>
          Don't have an account? <chakra.span color={theme.colors.accent}>Sign Up</chakra.span>
        </Text>
      </Box>
    </chakra.form>
  );
};

export default SignInForm;
