import * as React from 'react';
import {
  Container,
  Box,
  Link as ChakraLink,
  SimpleGrid,
  Text,
  IconButton,
  Flex,
  useTheme,
} from '@chakra-ui/react';

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import { siteConfig } from '../../utils/site-config';
import FooterSignup from './footerSignup';

export const ExternalSocialLink = (props) => {
  const theme = useTheme();
  const { href, label, icon, type, isExternal = true } = props;
  const [isHovered, setIsHovered] = React.useState(false); // Add state for hover

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <IconButton
      bg={isHovered ? 'gray.700' : 'transparent'} // Use gray.700 for background color on hover
      _hover={{
        color: theme.colors.background.secondary
      }}
      as={ChakraLink}
      href={href}
      target={isExternal ? '_blank' : '_self'}
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
      <Container maxW='5xl'>
        <SimpleGrid
          flexDirection='column-reverse'
          gridTemplateColumns={['1fr', '1fr', '1fr 1fr', '1fr 1fr']}
          borderTopWidth={2}
          mt='30px'
          pt='20px'
        >
          <Box display={['block', 'block', 'none', 'none']} mb='30px'>
            <FooterSignup />
          </Box>
          <Box>
            <SimpleGrid columns={[1, 1, 2, 2]}>
              <Flex alignItems='center'>
                <Text
                  as='span'
                  _focus={{ outline: 'none', boxShadow: 'none' }}
                  fontWeight={theme.fontWeights.medium}
                  color={theme.colors.text.primary}
                  cursor='pointer'
                  _hover={{
                    color: theme.colors.gray[600],
                    textDecoration: 'none',
                  }}
                >
                  Social Accounts
                </Text>
                <Flex as='footer' ml='.5rem'>
                  <ExternalSocialLink
                    href={siteConfig.author.github}
                    icon={<FaGithub />}
                    type='gray'
                    label='Github Account'
                    color={theme.colors.text.primary}
                  />

                  <ExternalSocialLink
                    href={siteConfig.author.linkedin}
                    icon={<FaLinkedin />}
                    type='linkedin'
                    label='LinkedIn Account'
                    color={theme.colors.text.primary}
                  />
                  <ExternalSocialLink
                    href={siteConfig.author.twitter}
                    icon={<FaTwitter />}
                    type='twitter'
                    label='Twitter Account'
                    color={theme.colors.text.primary}
                  />
                </Flex>
              </Flex>
            </SimpleGrid>
            <Text
              mt='20px'
              color={theme.colors.gray[500]}
              fontWeight={theme.fontWeights.bold}
            >
              Made with 🧡 by{' '}
              <ChakraLink
                _focus={{ boxShadow: 'none', outline: 'none' }}
                target='_blank'
                href={siteConfig.author.github}
                color={theme.colors.gray[400]}
                bgClip='text'
                bgGradient='linear(to-l, #7928CA, #FF0080)'
                _hover={{
                  bgGradient: 'linear(to-r, red.500, yellow.500)',
                }}
              >
                Alpha Technologies
              </ChakraLink>{' '}
            </Text>
          </Box>
          <Box display={['none', 'none', 'block', 'block']}>
            <FooterSignup />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
