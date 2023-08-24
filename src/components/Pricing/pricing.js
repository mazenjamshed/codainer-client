import {
  Badge,
  Box,
  Button,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  chakra,
  useTheme,
  useToken,
} from '@chakra-ui/react';
import PriceCard from './priceCard';


const Pricing = () => {
  const theme = useTheme();
  const topBg = theme.colors.background.primary;
  const bottomBg = theme.colors.background.secondary;
  const [bottomBgHex] = useToken('colors', [bottomBg]);

  return (
    <Flex
      boxSize='full'
      bg={topBg}
      p={[0]}
      alignItems='center'
      justifyContent='center'
      color={theme.colors.text.primary}
      id='pricing'
      h='100vh'
    >
      <Box
        mx='auto'
        textAlign={{
          base: 'left',
          md: 'center',
        }}
        rounded='md'
        shadow='base'
        w='full'
        bg={bottomBg}
      >
        <Box pt={20} rounded='md' bg={topBg}>
          <Box w='full' px={[10, , 4]} mx='auto'>
            <Text
              mb={2}
              fontSize={theme.fontSizes["5xl"]}
              fontWeight={theme.fontWeights.medium}
              lineHeight='tight'
              color={theme.colors.text.primary}
              fontFamily={theme.fonts.heading}
            >
              The right price for you, whoever you are
            </Text>
            <chakra.p
             fontSize={theme.fontSizes["lg"]}
             fontWeight={theme.fontWeights.normal}
             lineHeight='tight'
             color={theme.colors.text.secondary}
             fontFamily={theme.fonts.body}
             mb={6}
             >
              Our plans scale for any organization from startups to Fortune
              500s.
            </chakra.p>
          </Box>
          <Box
          >
            <SimpleGrid
              columns={[1, , , 3]}
              gap='24px'
              rounded='md'
              mx={[10, , 24]}
              textAlign='left'
            >
              <PriceCard price='0' badge='Free' />
              <PriceCard price='19' badge='Standard' />
              <PriceCard price='39' badge='Powerful' />
            </SimpleGrid>
            <Flex
              mb='100px'
              mx={[10, , 24]}
              p={10}
              mt={5}
              rounded='md'
              bg={theme.colors.background.tertiary}
              align='center'
              direction={['column', , 'row']}
            >
              <Stack flex='0.8' pr={10}>
                <Badge
                  mb={1}
                  fontSize='xs'
                  letterSpacing='wide'
                  colorScheme='gray'
                  fontWeight='medium'
                  rounded='full'
                  px={4}
                  py={1}
                  w='fit-content'
                  bg={theme.colors.background.secondary}
                  color={theme.colors.primary}
                >
                  Discounted
                </Badge>
                <Text textAlign='left' color={theme.colors.secondary}>
                  We offer <chakra.span fontWeight='bold'>50%</chakra.span> off
                  of for all students and universities. Please get in touch with
                  us and provide proof of your status.
                </Text>
              </Stack>
              <Button
                w={['full', , 'auto']}
                display='inline-flex'
                alignItems='center'
                justifyContent='center'
                px={5}
                py={3}
                mt={[5, , 0]}
                border='solid transparent'
                fontWeight='semibold'
                rounded='md'
                shadow='md'
                h='fit-content'
                color={theme.colors.text.primary}
                bg={theme.colors.background.secondary}
                _hover={{
                  bg: 'brand.900',
                }}
                flex='0.2'
                outlineColor={theme.colors.text.primary}
                variant='outline'
              >
                Get Discount
              </Button>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Pricing;
