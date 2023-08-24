import React from 'react';
import { Box, useTheme, Heading, Text } from '@chakra-ui/react';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const OurModelSection = () => {
  const theme = useTheme();

  return (
    <Box
      bg={theme.colors.background.secondary}
      color={theme.colors.text.primary}
      paddingTop={[5,,10,,,]}
      paddingBottom={[5,,10,,,]}
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-around"
    >
    <Box
      width="90%"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      
    >
      <Box 
        width="30%" 
        marginEnd="4"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mb={'40px'}
      >
        <Heading
        style={{ 
            
            fontWeight: theme.fontWeights.medium, 
            marginBottom:"1rem", 
            letterSpacing:"2px",
            lineHeight: "1.33",
            fontFamily: theme.fonts.heading,
          }}
          fontSize= {[,'3xl','7xl',,,]}
        >
         250+ 
        </Heading>
        <Text
          style={{ 
            
            fontWeight: theme.fontWeights.normal, 
            marginBottom:"1rem", 
            letterSpacing:"2px",
            lineHeight: "1.33",
            fontFamily: theme.fonts.body,
          }}
          textAlign={'center'}
          fontSize= {[,'15px','lg',,,]} 
        >
      Happy  Clients
        </Text>
      </Box>
      <Box 
        width="30%" 
        marginEnd="4"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading
        style={{ 
            
            fontWeight: theme.fontWeights.medium, 
            marginBottom:"1rem", 
            letterSpacing:"2px",
            lineHeight: "1.33",
            fontFamily: theme.fonts.heading,
          }}
          whiteSpace={'nowrap'}
          fontSize= {[,'3xl','7xl',,,]}
        >
        AI SaaS
        </Heading>
        <Text
          style={{ 
           
            fontWeight: theme.fontWeights.normal, 
            marginBottom:"1rem", 
            letterSpacing:"2px",
            lineHeight: "1.33",
            fontFamily: theme.fonts.body,
          }}
          textAlign={'center'}
          fontSize= {[,'15px','lg',,,]} 
        >
          in many categories
        </Text>
      </Box>
      <Box 
        width="30%" 
        marginEnd="4"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading
        style={{ 
            
            fontWeight: theme.fontWeights.medium, 
            marginBottom:"1rem", 
            letterSpacing:"2px",
            lineHeight: "1.33",
            fontFamily: theme.fonts.heading,
          }}
          fontSize= {[,'3xl','7xl',,,]}
        >
         100%
        </Heading>
        <Text
          style={{ 
            
            fontWeight: theme.fontWeights.normal, 
            marginBottom:"1rem", 
            letterSpacing:"2px",
            lineHeight: "1.33",
            fontFamily: theme.fonts.body,
          }}
          fontSize= {[,'15px','lg',,,]} 
          whiteSpace={[,,,'nowrap',,]}
          textAlign={'center'}
        >
    Executions for all Innovative Ideas
        </Text>
      </Box>
    </Box>
    <Box
      // height={[,"60vh","60vh","100vh","100vh","100vh"]}
      width="90%"
      display="flex"
      flexDirection={['column','column','column','column',"row","row"]}
      alignItems="center"
      justifyContent="center" 
    >
        <Box maxWidth="1200px" width="100%" mx={8}>
          <Box
            as="h2"
            fontSize="2xl"
            fontWeight="bold"
            mb={4}
            pb={2}
          >
            OUR MODEL
          </Box>
          <Box display="flex" flexDirection="column">
            <Box as="h3" fontSize="4xl" fontWeight="bold" mb={8}>
              How is Paddle different?
            </Box>
            <Box fontSize="xl" mb={8}>
              Paddle provides more than just the plumbing for your revenue. As a merchant of record, we do it for you:
            </Box>
          </Box>
        </Box>
        <Box maxWidth="1200px" width="100%" mx={8}>
          <Box display="flex" flexWrap="wrap" justifyContent="space-between" flexDirection={['column',,'row',,,]} >
            <Box width="48%" mb={4}>
              <Box display="flex" alignItems="center" mb={4}>
                <Box as={AiOutlineCheckCircle} fontSize="xl" color={theme.colors.accent} mr={2} />
                <Box>Effortless payment processing</Box>
              </Box>
              <Box display="flex" alignItems="center">
                <Box as={AiOutlineCheckCircle} fontSize="xl" color={theme.colors.accent} mr={2} />
                <Box>Global tax and compliance coverage</Box>
              </Box>
            </Box>
            <Box width="48%" mb={4}>
              <Box display="flex" alignItems="center" mb={4}>
                <Box as={AiOutlineCheckCircle} fontSize="xl" color={theme.colors.accent} mr={2} />
                <Box>Subscription and recurring billing management</Box>
              </Box>
              <Box display="flex" alignItems="center">
                <Box as={AiOutlineCheckCircle} fontSize="xl" color={theme.colors.accent} mr={2} />
                <Box>Powerful analytics and reporting</Box>
              </Box>
            </Box>
            <Box width="48%" mb={4}>
              <Box display="flex" alignItems="center" mb={4}>
                <Box as={AiOutlineCheckCircle} fontSize="xl" color={theme.colors.accent} mr={2} />
                <Box>Flexible pricing and packaging options</Box>
              </Box>
              <Box display="flex" alignItems="center">
                <Box as={AiOutlineCheckCircle} fontSize="xl" color={theme.colors.accent} mr={2} />
                <Box>Secure customer data and fraud prevention</Box>
              </Box>
            </Box>
            <Box width="48%" mb={4}>
              <Box display="flex" alignItems="center" mb={4}>
                <Box as={AiOutlineCheckCircle} fontSize="xl" color={theme.colors.accent} mr={2} />
                <Box>Effortless payment processing</Box>
              </Box>
              <Box display="flex" alignItems="center">
                <Box as={AiOutlineCheckCircle} fontSize="xl" color={theme.colors.accent} mr={2} />
                <Box>Global tax and compliance coverage</Box>
              </Box>
            </Box>
            <Box width="48%" mb={4}>
              <Box display="flex" alignItems="center" mb={4}>
                <Box as={AiOutlineCheckCircle} fontSize="xl" color={theme.colors.accent} mr={2} />
                <Box>Subscription and recurring billing management</Box>
              </Box>
              <Box display="flex" alignItems="center">
                <Box as={AiOutlineCheckCircle} fontSize="xl" color={theme.colors.accent} mr={2} />
                <Box>Powerful analytics and reporting</Box>
              </Box>
            </Box>
            <Box width="48%" mb={4}>
              <Box display="flex" alignItems="center" mb={4}>
                <Box as={AiOutlineCheckCircle} fontSize="xl" color={theme.colors.accent} mr={2} />
                <Box>Flexible pricing and packaging options</Box>
              </Box>
              <Box display="flex" alignItems="center">
                <Box as={AiOutlineCheckCircle} fontSize="xl" color={theme.colors.accent} mr={2} />
                <Box>Secure customer data and fraud prevention</Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OurModelSection;
