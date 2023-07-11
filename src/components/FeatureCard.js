import React from 'react';
import { Box, useTheme, Flex, Wrap, WrapItem } from '@chakra-ui/react';
import BorderedButton from './UI/Buttons/borderedButton';
import { fonts } from 'web3uikit';

const FeatureCard = ({ heading, description, features }) => {
  const theme = useTheme();

  return (
    <Box width="90%" mx="auto" mt={20}>
      <Box mb={4} textAlign="left">
        <h2 
          style={{ 
            fontSize: theme.fontSizes['sm'], 
            fontWeight: theme.fontWeights.medium, 
            marginBottom:"1rem", 
            letterSpacing:"2px",
            lineHeight: "1.33",
            textTransform:"uppercase",
            fontFamily: theme.fonts.heading,
            marginTop:"80px"
          }}
        >
          {heading}
        </h2>
        <p          
          style={{ 
            fontSize: theme.fontSizes['4xl'], 
            fontWeight: theme.fontWeights.normal, 
            marginBottom:"1rem", 
            letterSpacing:"-0.01rem",
            lineHeight: "1.2",
            fontFamily: theme.fonts.heading
          }}>
          {description}
        </p>
      </Box>
      <Flex justifyContent="space-between">
        {features.map((feature, index) => (
          <Box
            key={index}
            width="32%"
            height="350px"
            p={6}
            borderWidth="1px"
            borderColor={theme.colors.text.primary}
            borderRadius="lg"
            fontSize={theme.fontSizes.sm}
            style={{
              background: theme.colors.background.tertiary,
              fontFamily: theme.fonts.body,
              fontWeight: theme.fontWeights.medium,
            }}
          >
            <h3 
              style={{ 
                color: theme.colors.background.primary,
                fontSize: theme.fontSizes['4xl'], 
                fontWeight: theme.fontWeights.bold, 
                marginBottom:"1rem", 
                letterSpacing:"-0.01rem",
                lineHeight: "1.2",
                fontFamily: theme.fonts.heading

              }}
            >
              {feature.heading}
            </h3>
            <p
              style={{
                width: "30rem",
                color: theme.colors.background.primary,
                fontSize: theme.fontSizes.xl,
                fontWeight: theme.fontWeights.normal,
                marginRight: theme.space[8],
                overflowWrap: 'break-word',
                wordWrap: 'break-word',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                marginTop:"30px"
              }} 
            >
              {feature.description}
            </p>
            <Wrap spacing={2} mt={8}>
              {feature.buttons.map((button, buttonIndex) => (
                <WrapItem key={buttonIndex} marginBottom={2}>
                  <BorderedButton
                    paddingX={3}
                    paddingY={5}
                    borderRadius="100px"
                    text={button}
                    dark={true}
                    fontFamily={theme.fonts.body}
                    fontWeight={theme.fontWeights.medium}
                    fontSize={theme.fontSizes.md}
                    marginLeft={0}
                  />
                </WrapItem>
              ))}
            </Wrap>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default FeatureCard;
