import { getAdaptiveValue } from "@/components/utils";
import { ContentContainer, uncageFont } from "@/pages/_app";
import { Box, Center, Heading, Icon, Stack, Text } from "@chakra-ui/react";

export default function Referral() {
	return (
		<Box id="referral" position="relative" overflow={"hidden"}>
			<ContentContainer>
				<Center
					w="full"
					h="full"
					mt={getAdaptiveValue("92px", "92px", "164px")}
					mb={getAdaptiveValue("92px", "92px", "164px")}
				>
					<Stack
						direction={"column"}
						spacing={"36px"}
						alignItems={"center"}
						textAlign={"center"}
						w="full"
					>
						<Icon
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							w="138px"
							h="138px"
						>
							<defs>
								<linearGradient
									id="gradient1"
									x1="0%"
									y1="0%"
									x2="100%"
									y2="0%"
								>
									<stop
										offset="0%"
										style={{ stopColor: "rgba(191,255,255,1)", stopOpacity: 1 }}
									/>
									<stop
										offset="100%"
										style={{ stopColor: "rgba(131,208,203,1)", stopOpacity: 1 }}
									/>
								</linearGradient>
							</defs>
							<path
								d="M14 14.252V22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM18.5858 17L16.7574 15.1716L18.1716 13.7574L22.4142 18L18.1716 22.2426L16.7574 20.8284L18.5858 19H15V17H18.5858Z"
								fill="url(#gradient1)"
							/>
						</Icon>

						<Stack
							direction={"column"}
							alignItems={"center"}
							textAlign={"center"}
							spacing={"16px"}
						>
							<Heading
								fontWeight={700}
								style={uncageFont.style}
								textAlign={"center"}
								fontSize={getAdaptiveValue("22px", "36px", "48px")}
								textTransform={"uppercase"}
								lineHeight={"normal"}
							>
								Неделя бесплатно
							</Heading>
							<Text
								color={"#A7A7A7"}
								lineHeight={"normal"}
								fontWeight={400}
								fontSize={"16px"}
							>
								Приглашай друзей и получай за каждый оформленный другом месяц
								<br />
								подписки - дополнительную неделю к своей подписке!
							</Text>
						</Stack>
					</Stack>
				</Center>
			</ContentContainer>
		</Box>
	);
}
