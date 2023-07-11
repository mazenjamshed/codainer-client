import * as React from 'react';
import {
  Box,
  Button,
  Heading,
  Input,
  Text,
  useColorModeValue,
  useTheme,
} from '@chakra-ui/react';

export default function FooterSignup() {
  const theme = useTheme();

  return (
    <>
      <Heading
        fontSize='24px'
        mb='15px'
        className='yellow-gradient-color'
        color={theme.colors.text.primary} // Use theme color for the heading
      >
        Be the first to know
      </Heading>
      <Text
        mb='15px'
        color={theme.colors.text.secondary} // Use theme color for the text
      >
        Get notified about the upcoming sessions, news, articles, jobs, and opensource projects.
      </Text>

      <form action='#'>
        <Box position='relative'>
          <Input
            type='email'
            isRequired
            name='entry.1808449400'
            px='25px'
            height='50px'
            rounded='50px'
            bg={useColorModeValue('gray.900', 'gray.600')}
            _placeholder={{ color: 'gray.300' }}
            placeholder='Enter your email'
            _focus={{ outline: 0 }}
            color='gray.100'
            borderWidth={0}
          />
          <Button
            type='submit'
            height='50px'
            color={theme.colors.text.primary}
            _hover={{ bg: theme.colors.text.primary, color: 'gray.900' }}
            position='absolute'
            top='0'
            right='0'
            bg={theme.colors.background.secondary} // Use theme color for the button background
            rounded='50px'
            px='25px'
          >
            Subscribe
          </Button>
        </Box>
      </form>
    </>
  );
}
