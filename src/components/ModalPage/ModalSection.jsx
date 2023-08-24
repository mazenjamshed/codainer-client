import React from "react";
import {
  Flex,
  useTheme,
  Button,
  Text,
  Input,
  Icon,
  Textarea,
} from "@chakra-ui/react";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useForm } from "react-hook-form";

const ModalSection = () => {
  const theme = useTheme();
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    console.log(data); // This will contain the form data
  };

  return (
    <Flex
      width="100%"
      bg={theme.colors.background.secondary}
      color={theme.colors.text.primary}
      pt={7}
    >
      <Flex
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        flexDirection={"column"}
        alignItems={["flex-start", , , , ,]}
        width={"100%"}
        padding={30}
        gap={"20px"}
      >
        <Flex
          alignItems={"center"}
          mb={"10px"}
          borderWidth={"2px"}
          borderColor={"theme.colors.text.primary"}
          padding={"10px"}
          cursor={"pointer"}
          _hover={{
            bgColor: theme.colors.text.primary,
            textColor: theme.colors.background.secondary,
          }}
        >
          <Icon as={RiArrowGoBackLine} />
        </Flex>
        <Text
          fontSize="1rem"
          letterSpacing="1.2px"
          fontWeight="500"
          whiteSpace={"nowrap"}
          fontFamily="favourit, Helvetica Neue, Arial, sans-serif"
        >
          Name:
        </Text>
        <Input
          {...register("name")}
          type="text"
          w={["100%", "90%", "50%", "40%", "40%", "40%"]}
          padding={"20px"}
          borderRadius={0}
          placeholder="Enter your Name"
        />

        <Text
          fontSize="1rem"
          letterSpacing="1.2px"
          fontWeight="500"
          whiteSpace={"nowrap"}
          fontFamily="favourit, Helvetica Neue, Arial, sans-serif"
        >
          Email:
        </Text>
        <Input
          {...register("email")}
          type="email"
          w={["100%", "90%", "50%", "40%", ,]}
          padding={"20px"}
          borderRadius={0}
          placeholder="Enter your Email"
        />

        <Text
          fontSize="1rem"
          letterSpacing="1.2px"
          fontWeight="500"
          whiteSpace={"nowrap"}
          fontFamily="favourit, Helvetica Neue, Arial, sans-serif"
        >
          Details:
        </Text>
        <Textarea
          {...register("details")}
          padding="20px"
          borderRadius={0}
          mb={5}
          placeholder="Enter your Details"
          w={["100%", "90%", "50%", "40%", ,]}
        />

        <Button
          width={["60%", "50%", "30%", "25%", "20%"]}
          letterSpacing="2px"
          fontWeight="500"
          fontSize="1rem"
          fontFamily="favourit, Helvetica Neue, Arial, sans-serif"
          whiteSpace={"nowrap"}
          padding={"25px"}
          bg={"transparent"}
          textColor={"theme.colors.text.primary"}
          borderWidth={"2px"}
          borderColor={"theme.colors.text.primary"}
          borderRadius={0}
          _hover={{
            bgColor: theme.colors.text.primary,
            textColor: theme.colors.background.secondary,
          }}
          type="submit"
        >
          Submit
        </Button>
      </Flex>
    </Flex>
  );
};

export default ModalSection;
