import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";




//debounce

// Imperativa vs Declarativa

export function SearchBox() {

  //controled components
  // const [search, setSearch] = useState('');

  //uncontroled components
  const searchInputRef = useRef<HTMLInputElement>(null)

  //searchInputRef.current.focus(); (Imperativo)
  //focus na tag (Declarativa)

  //console.log(searchInputRef.current.value)

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth="400"
      alignSelf="center"
      color="gray.200"
      bg="gray.800"
      position="relative"
      borderRadius="full"
    >

      <Input
        color="gray.50"
        variant="unstyled"
        placeholder="buscar na Plataforma"
        _placeholder={{ color: 'gray.400' }}
        px="4"
        mr="4"
        ref={searchInputRef}
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}