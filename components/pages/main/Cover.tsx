import CustomButton from "@/components/ui/CustomButton";
import { getAdaptiveValue } from "@/components/utils";
import { ContentContainer, uncageFont } from "@/pages/_app";
import { Box, Center, Heading, Stack, Text } from "@chakra-ui/react";

export default function Cover() {
	return (
		<Box id="main" position="relative" overflow={"hidden"} minH="100vh">
			<Box
				position="absolute"
				top="0"
				left="0"
				width="100%"
				height="100%"
				backgroundImage="url('/assets/main/cover_bg.png')"
				backgroundSize="cover"
				backgroundPosition="center"
				backgroundRepeat={"no-repeat"}
				zIndex="-1"
			/>
			<Box
				position={"absolute"}
				left="calc(100vw - 500px)"
				width={"1000px"}
				height="100vh"
				background="radial-gradient(50% 50% at 50% 50%, #83D0CB 0%, rgba(131, 208, 203, 0.00) 100%)"
				zIndex="0"
				opacity={"0.1"}
				filter="blur(2px)"
				display={["none", "block"]}
			/>
			<ContentContainer>
				<Center minH="100vh">
					<Stack
						direction={"column"}
						spacing={"32px"}
						textAlign={"center"}
						alignItems={"center"}
						position={"relative"}
					>
						{/* Lock Icon */}
						<Center top="-120px" position={"absolute"} zIndex={1}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="171"
								height="256" // Adjust size to match the mockup
								viewBox="0 0 203 274"
								fill="none"
							>
								<path
									d="M18 274V114C18 60.9807 61.093 18 114.251 18C144.423 18 171.352 31.8467 189 53.5165"
									stroke="url(#paint0_linear_57_2051)"
									strokeWidth="36"
								/>
								<defs>
									<linearGradient
										id="paint0_linear_57_2051"
										x1="114.251"
										y1="18"
										x2="114.251"
										y2="274"
										gradientUnits="userSpaceOnUse"
									>
										<stop stopColor="white" />
										<stop offset="0.596574" stopColor="white" stopOpacity="0" />
										<stop offset="1" stopColor="white" stopOpacity="0" />
									</linearGradient>
								</defs>
							</svg>
						</Center>

						{/* Main Heading and Text */}
						<Stack
							direction={"column"}
							spacing={["16px", "12px"]}
							textAlign={"center"}
						>
							<Heading
								fontWeight={700}
								style={uncageFont.style}
								textAlign={"center"}
								fontSize={["28px", "56px"]}
								textTransform={"uppercase"}
								lineHeight={"normal"}
							>
								Свобода интернета
								<br />
								без границ
							</Heading>
							<Text
								fontSize={["14px", "16px"]}
								color={"#A7A7A7"}
								lineHeight={"normal"}
							>
								Подключитесь к любой точке мира в одно касание.
								<br />
								Безопасность и скорость без компромиссов.
							</Text>
						</Stack>

						{/* Buttons */}
						<Stack
							w={["full", "auto"]}
							direction={
								getAdaptiveValue("column-reverse", "row", "row") as any
							}
							spacing={getAdaptiveValue("16px", "16px", "24px")}
						>
							<CustomButton width={["full", "auto"]}>
								Узнать подробнее
							</CustomButton>
							<CustomButton variant="primary" width={["full", "auto"]}>
								Начать использовать
							</CustomButton>
						</Stack>
					</Stack>
				</Center>
			</ContentContainer>
		</Box>
	);
}
