import { Box, Button } from "@chakra-ui/react";
import React from "react";
import styles from "../../styles/CustomButton.module.css";
import { getAdaptiveValue } from "../utils";

export default function CustomButton({
	children,
	variant = "default",
	width,
	display,
	zIndex,
}: {
	children: React.ReactNode;
	variant?: "primary" | "default";
	width?: string | string[];
	display?: string | string[];
	zIndex?: number;
}) {
	return (
		<Button
			display={display}
			borderRadius={"30px"}
			p="16px 32px"
			fontSize={"16px"}
			cursor={"pointer"}
			h={getAdaptiveValue("64px", "52px", "52px")}
			position={"relative"}
			overflow={"hidden"}
			className={[styles["button"], styles[variant]].join(" ")}
			width={width}
			zIndex={zIndex}
			_hover={{}}
			_focus={{}}
			variant={"unstyled"}
		>
			<Box
				w="5px"
				h="97px"
				opacity={"0.5"}
				background={"#FFF"}
				transform={"rotate(15deg)"}
				position={"absolute"}
				className={styles.arrow}
			></Box>
			{children}
		</Button>
	);
}
