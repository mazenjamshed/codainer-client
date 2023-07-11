import {
    Badge,
    Box,
    Button,
    Flex,
    Icon,
    Stack,
    Text,
    chakra,
  } from '@chakra-ui/react';
  const Feature = (props) => {
    return (
      <Flex align='center'>
        <Flex shrink={0}>
          <Icon
            boxSize={5}
            mt={1}
            mr={2}
            color='brand.300'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
              clipRule='evenodd'
            ></path>
          </Icon>
        </Flex>
        <Box ml={4}>
          <chakra.span mt={2} color='gray.400'>
            {props.children}
          </chakra.span>
        </Box>
      </Flex>
    );
  };
  
  const PriceCard = ({ price, badge }) => {
    return (
      <Box bg='gray.800' pt={10} shadow='lg' rounded='md'>
        <Flex direction='column'>
          <Box px={10} pb={5}>
            <Badge
              mb={1}
              fontSize='xs'
              letterSpacing='wide'
              fontWeight='medium'
              rounded='full'
              px={4}
              py={1}
              bg='accent.100'
            >
              {badge}
            </Badge>
            <Text
              mb={2}
              fontSize='5xl'
              fontWeight={['bold', 'extrabold']}
              color='gray.50'
              lineHeight='tight'
            >
              ${price}
              <chakra.span fontSize='2xl' fontWeight='medium' color='gray.400'>
                {' '}
                /mo{' '}
              </chakra.span>
            </Text>
            <chakra.p mb={6} fontSize='md' color='gray.500'>
              One plan for any organization—from startups to Fortune 500s. We
              offer 50% off of for all students and universities. Please get in
              touch with us and provide proof of your status.
            </chakra.p>
          </Box>
          <Flex
            px={10}
            pt={5}
            pb={10}
            direction='column'
            bg='gray.900'
            roundedBottom='md'
          >
            <Stack mb={5} spacing={4}>
              <Feature>Granular access controls</Feature>
              <Feature>Custom components</Feature>
              <Feature>Deploy on-premises</Feature>
              <Feature>Identity management</Feature>
            </Stack>
            <Button
              w='full'
              display='inline-flex'
              alignItems='center'
              justifyContent='center'
              px={5}
              py={3}
              border='solid transparent'
              fontWeight='semibold'
              rounded='md'
              shadow='md'
              color='dark.100'
              bg='accent.100'
              // bg='gray.500'
              _hover={{
                bg: 'gray.600',
              }}
              variant='outline'
              outlineColor='light.100'
            >
              Get started
            </Button>
          </Flex>
        </Flex>
      </Box>
    );
  };
  
  export default PriceCard;
  