import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
	fonts: {
		heading: `'Onest', sans-serif`,
		body: `'Onest', sans-serif`,
	},
	styles: {
		global: {
			body: {
				color: "white",
				backgroundColor: "#0F0F0F",
			},
		},
	},
	config: {
		initialColorMode: "dark",
		useSystemColorMode: false,
		cssVarPrefix: "notblocknet",
	},
});
