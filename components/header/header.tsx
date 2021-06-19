import React from "react";
import Link from "next/link";
import { Container, HStack, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <header>
      <Container maxW={"100%"} paddingY={6} paddingX={0}>
        <HStack justifyContent={"space-between"}>
          <Link href={"/"}>Service Centre</Link>
          <HStack>
            <Link href={"/add-customer"}>Add customer</Link>
            <Link href={"/customers"}>Customers</Link>
          </HStack>
        </HStack>
      </Container>
    </header>
  );
};

export default Header;
