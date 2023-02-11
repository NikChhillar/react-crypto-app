import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import img1 from "../assets/btc.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          scale: 0.7,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={img1}
          filter={"grayscale(1)"}
        />
        <Text
          fontSize={"6xl"}
          textAlign={"center"}
          fontWeight={"thin"}
          color={"whiteAlpha.600"}
          fontFamily={"cursive"}
          mt={"-20"}
        >
          Crypto-X
        </Text>
      </motion.div>
    </Box>
  );
};

export default Home;
