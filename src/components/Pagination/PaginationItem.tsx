import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
}

export function PaginationItem({ isCurrent = false, number }: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        colorScheme="pink"
        width="3"
        disabled
        _disabled={{
          bgColor: 'pink.500',
          cursor: "default"
        }}
      >
        {number}
      </Button>
    );
  }
  return (
    <Button
      size="sm"
      fontSize="xs"
      colorScheme="pink"
      width="3"
      bgColor="gray.700"
      _hover={{
        bgColor: 'gray.500'
      }}
    >
      {number}
    </Button>
  );

}