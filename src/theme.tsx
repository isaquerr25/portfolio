import { ChakraProvider, extendTheme } from "@chakra-ui/react";
export const theme = extendTheme({
	styles: {
		global: () => ({
			body: {
				bg: "#010208",
				color: "#E9E9E9",
				fontSize: "lg",
			},
		}),
	},
});
