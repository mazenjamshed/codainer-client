import { Box, Button, Flex, SimpleGrid, chakra, useTheme, ThemeProvider,Text } from '@chakra-ui/react';

const Features = () => {
  const theme = useTheme(); // Access the theme

  return (
      <Flex
        bg={theme.colors.background.primary}
        _dark={{
          bg: theme.colors.background.secondary,
        }}
        p={[50,50,50,50,40,40]}
        w='100%'
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
            display={'flex'}
            flexDirection={['column',,'row',,,]}
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
            py={20}
          >
            <Box  >
              <Text
                mb={4}
                fontSize={['1.3rem','1.6rem','1.4rem','2rem','2.5rem','3.2rem']}
                fontWeight='bold'
                letterSpacing='tight'
                textAlign={'left'}
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
              </Text>
              <chakra.p
                mb={5}
                textAlign={{
                  base: 'left',
                  sm: 'left',
                }}
                // color={theme.colors.background.secondary}
                // _dark={{
                //   color: theme.colors.text.secondary,
                // }}
                color={"#fff"}
                fontSize={
                 ['16px','16px','10.5px','15px','17px','20px']
                }
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
              w='100%'
              borderRadius={10}
              _dark={{
                bg: 'gray.700',
              }}
            >

<video controls width="100%" autoPlay={true} muted >
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
                fontSize={['1.3rem','1.6rem','1.4rem','2rem','2.3rem','3.2rem']}
                fontWeight='extrabold'
                letterSpacing='tight'
                textAlign={'left'}
                
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
                  base: 'left',
                  sm: 'left',
                }}
                color={"#fff"}
                fontSize={
                  [,'16px','10.5px','15px','17px','20px']
                 }
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

<video controls width="100%"  autoPlay={true} muted >
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
