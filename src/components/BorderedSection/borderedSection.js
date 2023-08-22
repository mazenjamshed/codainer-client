import React, { useState } from "react";
import { Box, Flex, useTheme } from "@chakra-ui/react";
import { FaAngleRight } from "react-icons/fa";

const Section = () => {
  const theme = useTheme();

  const [hoveredBox, setHoveredBox] = useState(null);

  const handleBoxHover = (boxIndex) => {
    setHoveredBox(boxIndex);
  };

  const isBoxHovered = (boxIndex) => {
    return hoveredBox === boxIndex;
  };

  const boxDefaultStyles = {
    background: theme.colors.background.primary,
    color: theme.colors.text.primary,
    cursor: "pointer",
    transition: "background-color 0.3s ease-in-out",
  };

  const boxHoverStyles = {
    background: theme.colors.background.tertiary,
    color: theme.colors.background.primary,
  };

  const textDefaultStyles = {
    color: theme.colors.text.primary,
    fontSize: theme.fontSizes.xl,
    fontWeight: theme.fontWeights.normal,
    transition: "color 0.3s ease-in-out",
  };

  const textHoverStyles = {
    color: theme.colors.background.primary,
    fontSize: theme.fontSizes.xl,
    fontWeight: theme.fontWeights.normal,
  };

  return (
    <Box
      // height="50vh"
      backgroundColor={theme.colors.background.primary}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Flex justifyContent="space-between" >
        <Box
          flex="1"
          borderWidth="1px"
          borderColor="rgb(43, 50, 50)"
          borderRadius="none"
          borderTopWidth="1px"
          borderBottomWidth="1px"
          py={4}
          px={6}
          onMouseEnter={() => handleBoxHover(0)}
          onMouseLeave={() => handleBoxHover(null)}
          style={{
            ...boxDefaultStyles,
            ...(isBoxHovered(0) ? boxHoverStyles : {}),
          }}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="flex-start"
          pb="2rem"
        >
          <h3
            style={{
              color: isBoxHovered(0) ? theme.colors.background.primary : theme.colors.text.primary,
              fontSize: theme.fontSizes["4xl"],
              fontWeight: theme.fontWeights.bold,
              marginBottom: "1rem",
              letterSpacing: "-0.01rem",
              lineHeight: "1.2",
              fontFamily: theme.fonts.heading,
              padding: "35px",
              transition: "color 0.3s ease-in-out",
            }}
          >
            Explore Content Nexus
          </h3>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="space-between"
            width="90%"
            marginLeft={8}
          >
            <p
              style={{
                ...textDefaultStyles,
                ...(isBoxHovered(0) && textHoverStyles),
              }}
            >
              Discover the power of the Content Nexus platform and explore the wide range of services it offers
            </p>
            <FaAngleRight style={{ fontSize: "20px", marginTop: "5px", marginLeft: "50px" }} />
          </Box>
        </Box>
        <Box
          flex="1"
          borderWidth="1px"
          borderColor="rgb(43, 50, 50)"
          borderRadius="none"
          borderTopWidth="1px"
          borderBottomWidth="1px"
          py={4}
          px={6}
          onMouseEnter={() => handleBoxHover(1)}
          onMouseLeave={() => handleBoxHover(null)}
          style={{
            ...boxDefaultStyles,
            ...(isBoxHovered(1) ? boxHoverStyles : {}),
          }}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <h3
            style={{
              color: isBoxHovered(1) ? theme.colors.background.primary : theme.colors.text.primary,
              fontSize: theme.fontSizes["4xl"],
              fontWeight: theme.fontWeights.bold,
              marginBottom: "1rem",
              letterSpacing: "-0.01rem",
              lineHeight: "1.2",
              fontFamily: theme.fonts.heading,
              padding: "35px",
              transition: "color 0.3s ease-in-out",
            }}
          >
            Pricing
          </h3>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="space-between"
            width="90%"
            marginLeft={8}
          >
            <p
              style={{
                ...textDefaultStyles,
                ...(isBoxHovered(1) && textHoverStyles),
              }}
            >
              Sell all-inclusive pricing at our standard rate or get a customized quote
            </p>
            <FaAngleRight style={{ fontSize: "20px", marginTop: "5px", marginLeft: "50px" }} />
          </Box>
        </Box>
        <Box
          flex="1"
          borderWidth="1px"
          borderColor="rgb(43, 50, 50)"
          borderRadius="none"
          borderTopWidth="1px"
          borderBottomWidth="1px"
          py={4}
          px={6}
          onMouseEnter={() => handleBoxHover(2)}
          onMouseLeave={() => handleBoxHover(null)}
          style={{
            ...boxDefaultStyles,
            ...(isBoxHovered(2) ? boxHoverStyles : {}),
          }}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <h3
            style={{
              color: isBoxHovered(2) ? theme.colors.background.primary : theme.colors.text.primary,
              fontSize: theme.fontSizes["4xl"],
              fontWeight: theme.fontWeights.bold,
              marginBottom: "1rem",
              letterSpacing: "-0.01rem",
              lineHeight: "1.2",
              fontFamily: theme.fonts.heading,
              padding: "35px",
              transition: "color 0.3s ease-in-out",
            }}
          >
            Get Started
          </h3>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="space-between"
            width="90%"
            marginLeft={8}
          >
            <p
              style={{
                ...textDefaultStyles,
                ...(isBoxHovered(2) && textHoverStyles),
              }}
            >
              Now is the moment to push the button and unlock the gateway to revolution.
            </p>
            <FaAngleRight style={{ fontSize: "20px", marginTop: "5px", marginLeft: "50px" }} />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Section;
