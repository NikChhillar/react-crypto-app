import React from 'react'
import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import img1 from "../assets/btc.png";

const Footer = () => {
    return (
        <Box
            bgColor={"blackAlpha.900"}
            color={"whiteAlpha.700"}
            minH={"48"}
            px={"16"}
            py={["16", "8"]}
        >
            <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
                <VStack w={"full"} alignItems={["center", "flex-start"]}>
                    <Text fontWeight={"bold"} letterSpacing={"1px"}>About Us</Text>
                    <Text
                        fontSize={"sm"}
                        letterSpacing={"widest"}
                        textAlign={["center", "left"]}
                        fontFamily={"cursive"}
                    >
                        Welcome to the Dark Web Society....We can provide you anything you desire, but not just for free
                    </Text>
                </VStack>

                <VStack>
                    <Avatar boxSize={"28"} mt={["4", "0"]} src={img1} />
                    <Text>Lord Ainz</Text>
                </VStack>
            </Stack>
        </Box>
    )
}

export default Footer