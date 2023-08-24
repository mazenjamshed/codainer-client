import React from 'react';
import { Box, useTheme } from '@chakra-ui/react';

const SectionSeparator = () => {
  const theme = useTheme();

  return (
    <Box
      as="hr"
      borderTop="1px solid"
      borderColor={theme.colors.primary}
      margin="0"
      width="100%"
    />
  );
};

export default SectionSeparator;
