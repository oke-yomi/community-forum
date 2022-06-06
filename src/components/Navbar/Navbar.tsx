import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import RightContent from "./RightContent/RightContent";
import SearchInput from "./SearchInput";

// logo style: height='46px' display={{base: 'none', md: 'unset'}}

const Navbar: React.FC = () => {
	return (
		<>
			<Flex bg="white" height="44px" padding="6px 12px">
				<Flex align="center">
					{/* <Image src='' alt="Logo" height='30px' /> */}
					<Text
						color="blue.500"
						fontWeight={700}
						cursor="pointer"
						display={{ base: "none", md: "unset" }}>
						LOGO
					</Text>
				</Flex>
				{/* <Directory /> */}
				<SearchInput />
				<RightContent />
      </Flex>
      
		</>
	);
};

export default Navbar;
