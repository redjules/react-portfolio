import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack shadow="md" borderRadius="md" backgroundColor="white" spacing={4}>
      <Image borderRadius="md" src={imageSrc} />
      <VStack padding="1em" alignItems="flex-start">
      <Heading as='h4' size='md' color="black">{title}</Heading>
      <Text color="gray">{description}</Text>
      <HStack>
      <Text color="Black" fontWeight="bold">See More</Text>
      <FontAwesomeIcon icon={faArrowRight} size="1x" color="black"/>
      </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
