import { extendTheme } from "@chakra-ui/react";

const lightTheme = extendTheme({
  fonts: {
    heading: "favourit, Helvetica Neue, Arial, sans-serif",
    body: "favourit, Helvetica Neue, Arial, sans-serif",
  },
  fontSizes: {
    xs: "0.75rem", // Extra Small: 12px
    sm: "0.875rem", // Small: 14px
    md: "1rem", // Medium: 16px
    lg: "1.125rem", // Large: 18px
    xl: "1.25rem", // Extra Large: 20px
    "2xl": "1.5rem", // 2x Large: 24px
    "3xl": "1.875rem", // 3x Large: 30px
    "4xl": "2.25rem", // 4x Large: 36px
    "5xl": "3rem", // 5x Large: 48px
    "6xl": "3.125rem", // 6x Large: 50px
    "7xl": "3.25rem", // 7x Large: 52px
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  colors: {
    primary: "#111111", // Black
    secondary: "#FFFFFF", // White
    accent: "#FFC107", // Amber
    text: {
      primary: "#111111", // Black
      secondary: "#6B7280", // Gray
      tertiary: "#FFFFFF",
    },
    background: {
      primary: "#FCFCFC", // White
      secondary: "#CCCCCC", // Light gray
      tertiary: "#182222",
    },
  },
  components: {
    Navbar: {
      baseStyle: {
        bg: "background.primary",
        color: "text.primary",
      },
    },
    NavButton: {
      baseStyle: {
        borderRadius: "md",
        px: 4,
        py: 2,
        fontWeight: "bold",
        textTransform: "uppercase",
      },
      variants: {
        primary: {
          bg: "accent",
          color: "text.primary",
          _hover: {
            bg: "accent",
            opacity: 0.8,
          },
        },
        secondary: {
          bg: "transparent",
          color: "text.primary",
          borderWidth: 2,
          borderColor: "text.primary",
          _hover: {
            bg: "text.primary",
            color: "background.primary",
          },
        },
      },
    },
    PrimaryButton: {
      baseStyle: {
        borderRadius: "md",
        px: 4,
        py: 2,
        fontWeight: "bold",
        textTransform: "uppercase",
        bg: "accent",
        color: "text.primary",
        _hover: {
          bg: "accent",
          opacity: 0.8,
        },
      },
    },
    SecondaryButton: {
      baseStyle: {
        borderRadius: "md",
        px: 4,
        py: 2,
        fontWeight: "bold",
        textTransform: "uppercase",
        bg: "transparent",
        color: "text.primary",
        borderWidth: 2,
        borderColor: "text.primary",
        _hover: {
          bg: "text.primary",
          color: "background.primary",
        },
      },
    },
    OutlineButton: {
      baseStyle: {
        borderRadius: "md",
        px: 4,
        py: 2,
        fontWeight: "bold",
        textTransform: "uppercase",
        bg: "transparent",
        color: "accent",
        borderWidth: 2,
        borderColor: "accent",
        _hover: {
          bg: "accent",
          color: "text.primary",
        },
      },
    },
    Section: {
      baseStyle: {
        bg: "background.secondary",
        color: "text.primary",
        borderRadius: "lg",
        p: 4,
      },
    },
  },
});

export default lightTheme;
