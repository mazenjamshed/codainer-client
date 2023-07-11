import React from 'react';
import { Box, useTheme, Flex, Wrap, WrapItem } from '@chakra-ui/react';
import BorderedButton from './../UI/Buttons/borderedButton';
import FeatureCard from './../FeatureCard';

const Features = () => {
  const theme = useTheme();

  const features = [
    {
      heading: 'Grow',
      description: 'Choose how you want to sell, Paddle supports every type of sales motion. Optimize your checkout for conversions, scale your sales-assisted invoicing to more business accounts, and add subscription billing',
      buttons: ['Custom checkout', 'B2B invoicing', 'Subscription billing'],
    },
    {
      heading: 'Operate',
      description: 'However and wherever you sell, Paddle ensures you get as much revenue as possible. We route between multiple payment partners, cover 100% of sales tax compliance and protect you against fraud',
      buttons: ['Custom checkout', 'B2B invoicing', 'Subscription billing'],
    },
    {
      heading: 'Understand',
      description: 'With all your revenue coming through Paddle, across every bank, region and channel, we act as your single source of truth. So whether you run your reports through Paddle or connect to another tool, your data is always reliable.',
      buttons: ['Custom checkout', 'B2B invoicing', 'Subscription billing'],
    },
  ];

  const newCardButtons = ['Custom checkout', 'B2B invoicing', 'Subscription billing', 'Custom checkout', 'B2B invoicing', 'Subscription billing'];

  return (
    <Box 
      bg={theme.colors.background.secondary} 
      color={theme.colors.text.primary} 
      p={1} 
      display="flex"
      flexDirection="column"
      alignContent="center"
      alignItems="center"
      height="110vh"
    >
      <FeatureCard
        heading="Features"
        description="Your all-in-one payments infrastructure"
        features={features}
      />
      {/* New Card */}
      <Box
        width="90%"
        height="220px"
        p={4}
        borderWidth="1px"
        borderColor={theme.colors.text.primary}
        borderRadius="lg"
        fontSize={theme.fontSizes.sm}
        style={{
          background: theme.colors.background.tertiary,
          fontFamily: theme.fonts.body,
          fontWeight: theme.fontWeights.medium,
          paddingLeft: theme.space[4], // Add padding left
          paddingRight: theme.space[4], // Add padding right
        }}
        mt={8}
      >
        <Flex justifyContent="space-between" mt={1}>
          <Box>
            <h3 
              style={{ 
                color: theme.colors.background.primary,
                fontSize: theme.fontSizes['4xl'], 
                fontWeight: theme.fontWeights.bold, 
                marginBottom:"1rem", 
                letterSpacing:"-0.01rem",
                lineHeight: "1.2",
                fontFamily: theme.fonts.heading,
                marginTop: "15px"
              }}
            >
              Services
            </h3>
            <p
              style={{
                width: "50rem",
                color: theme.colors.background.primary,
                fontSize: theme.fontSizes.xl,
                fontWeight: theme.fontWeights.normal,
                marginRight: theme.space[8],
                overflowWrap: 'break-word',
                wordWrap: 'break-word',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
              }}
            >
              Scaling a SaaS business takes more than technology. Customers need specialist support; you need advice on pricing and go-to-market strategies; and you want to seamlessly migrate subscription agreements.
            </p>
          </Box>
          <Flex justifyContent="center" alignItems="center">
            <Wrap spacing={2}>
              {newCardButtons.map((button, buttonIndex) => (
                <WrapItem key={buttonIndex}>
                  <BorderedButton
                    paddingX={4}
                    paddingY={5}
                    text={button}
                    dark={true}
                    fontFamily={theme.fonts.body}
                    fontWeight={theme.fontWeights.medium}
                    fontSize={theme.fontSizes.md}
                    marginLeft={0}
                    borderRadius="100px"
                  />
                </WrapItem>
              ))}
            </Wrap>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Features;
