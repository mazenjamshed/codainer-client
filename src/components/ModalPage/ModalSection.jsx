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
      width={"100%"}
      //   h={"70vh"}
      bg={theme.colors.background.secondary}
      color={theme.colors.text.primary}
      pt={7}
    >
      <Flex
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        flexDirection={"column"}
        alignItems={["center", , "flex-start", , ,]}
        width={"100%"}
        padding={30}
        gap={"20px"}
      >
        <Flex
          alignItems={"center"}
          gap={2}
          borderWidth={"2px"}
          borderColor={"theme.colors.text.primary"}
        >
          <Icon as={RiArrowGoBackLine} />
          <Text>Back </Text>
        </Flex>
        <Text
          fontSize="1rem"
          letterSpacing="1.2px"
          fontWeight="500"
          whiteSpace={"nowrap"}
          fontFamily="favourit, Helvetica Neue, Arial, sans-serif"
        >
          What are you looking for?
        </Text>
        <Input
          {...register("looking")}
          type="text"
          w={["100%", "100%", "60%", "50%", "40%", "40%"]}
          padding={"20px"}
          borderRadius={0}
          placeholder="Let me know what you have in mind?"
        />

        <Text
          fontSize="1rem"
          letterSpacing="1.2px"
          fontWeight="500"
          whiteSpace={"nowrap"}
          fontFamily="favourit, Helvetica Neue, Arial, sans-serif"
        >
          What is your favourite color?
        </Text>
        <Input
          {...register("color")}
          type="text"
          w={["100%", "90%", "50%", "40%", ,]}
          padding={"20px"}
          borderRadius={0}
          mb={5}
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
          w="100%"
          padding="20px"
          borderRadius={0}
          mb={5}
        />

        <Button
          width={[, , "30%", "25%", "20%"]}
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
