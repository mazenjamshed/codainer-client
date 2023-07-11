import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const PaymentMethod = ({ paymentMethods }) => {
  return (
    <Box>
      {/* Render payment method options */}
      {paymentMethods.map(method => (
        <Box key={method.id}>
          <Text>{method.name}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default PaymentMethod;
