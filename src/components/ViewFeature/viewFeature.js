import { Box, Button, Flex, SimpleGrid, chakra, useTheme, ThemeProvider } from '@chakra-ui/react';

const Features = () => {
  const theme = useTheme(); // Access the theme

  return (
      <Flex
        bg={theme.colors.background.primary}
        _dark={{
          bg: theme.colors.background.secondary,
        }}
        p={40}
        w='full'
        justifyContent='center'
        alignItems='center'
        id='features'
      >
        <Box
          shadow='xl'
          // bg={theme.colors.background.tertiary}
          bg="rgba(0,0,0,.4)"
          _dark={{
            bg: 'gray.800',
          }}
          px={8}
        
          borderRadius={10}
          mx='auto'
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <SimpleGrid
            alignItems='center'
            columns={{
              base: 1,
              md: 2,
            }}
           
            spacingY={{
              base: 10,
              md: 32,
            }}
            spacingX={{
              base: 10,
              md: 24,
            }}
          >
            <Box>
              <chakra.h2
                mb={4}
                fontSize={{
                  base: '2xl',
                  md: '4xl',
                }}
                fontWeight='extrabold'
                letterSpacing='tight'
                textAlign={{
                  base: 'center',
                  md: 'left',
                }}
                color={theme.colors.text.primary}
                _dark={{
                  color: theme.colors.text.secondary,
                }}
                lineHeight={{
                  md: 'shorter',
                }}
                textShadow='2px 0 currentcolor'
             
              >
                Clear overview for efficient tracking
              </chakra.h2>
              <chakra.p
                mb={5}
                textAlign={{
                  base: 'center',
                  sm: 'left',
                }}
                // color={theme.colors.background.secondary}
                // _dark={{
                //   color: theme.colors.text.secondary,
                // }}
                color={"#fff"}
                fontSize={{
                  md: 'lg',
                }}
              >
                Handle your subscriptions and transactions efficiently with the
                clear overview in Dashboard. Features like the smart search option
                allow you to quickly find any data you’re looking for.
              </chakra.p>
              {/* <Button
                w={{
                  base: 'full',
                  sm: 'auto',
                }}
                size='lg'
                bg={theme.colors.secondary}
                _dark={{
                  bg: 'gray.700',
                }}
                _hover={{
                  bg: 'gray.700',
                  _dark: {
                    bg: 'gray.600',
                  },
                }}
                color={theme.colors.text.primary}
                as='a'
              >
                Learn More
              </Button> */}
            </Box>
            <Box
              w='full'
              py={28}
              borderRadius={10}
              _dark={{
                bg: 'gray.700',
              }}
            >

<video controls width="100%" autoPlay={true} muted>
            <source src="/meetmine_ai_intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
            </Box>
          </SimpleGrid>
          <SimpleGrid
            alignItems='center'
            columns={{
              base: 1,
              md: 2,
            }}
            flexDirection='column-reverse'
            mb={8}
            spacingY={{
              base: 10,
              md: 32,
            }}
            spacingX={{
              base: 10,
              md: 24,
            }}
          >
            <Box
              order={{
                base: 'initial',
                md: 2,
              }}
            >
              <chakra.h2
                mb={4}
                fontSize={{
                  base: '2xl',
                  md: '4xl',
                }}
                fontWeight='extrabold'
                letterSpacing='tight'
                textAlign={{
                  base: 'center',
                  md: 'left',
                }}
                color={theme.colors.text.primary}
                _dark={{
                  color: theme.colors.text.secondary,
                }}
                lineHeight={{
                  md: 'shorter',
                }}
              >
                Decide how you integrate Payments
              </chakra.h2>
              <chakra.p
                mb={5}
                textAlign={{
                  base: 'center',
                  sm: 'left',
                }}
                color={"#fff"}
                fontSize={{
                  md: 'lg',
                }}
              >
                Love to code? Next to our ready-made and free plugins you can use
                our expansive yet simple API; decide how you integrate Payments
                and build advanced and reliable products yourself from scratch.
              </chakra.p>
          
            </Box>
            <Box
              w='full'
              // py={48}
              borderRadius={10}
              _dark={{
                bg: 'gray.700',
              }}
            >

<video controls width="100%" autoPlay={true} muted>
            <source src="/SideKick_AI.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

            </Box>
          </SimpleGrid>
        </Box>
      </Flex>
  );
};

export default Features;
