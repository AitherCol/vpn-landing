import { ContentContainer, uncageFont } from "@/pages/_app";
import { Center, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import { getAdaptiveValue } from "../utils";

export default function Footer() {
	return (
		<ContentContainer>
			<Center w="full" p={getAdaptiveValue("0px", "0px", "64px")}>
				<Stack
					w="full"
					bgColor={"#191919"}
					border={"1px solid #252525"}
					borderRadius={"24px"}
					padding={"24px"}
					direction={getAdaptiveValue("column", "column", "row") as any}
					spacing={"16px"}
				>
					<Stack
						w={getAdaptiveValue("full", "full", "364px")}
						direction={"column"}
						spacing={0}
					>
						<Stack
							direction={"row"}
							spacing={"6px"}
							alignItems={"center"}
							cursor={"pointer"}
						>
							<Image src="/logos/icon.svg" w="36px" h="36px" />
							<Heading
								textTransform={"uppercase"}
								fontSize={"20px"}
								background={"linear-gradient(87deg, #BFFFFF 0%, #83D0CB 100%)"}
								backgroundClip={"text"}
								fontWeight={700}
								style={uncageFont.style}
								lineHeight={"normal"}
								height={"20px"}
							>
								NotBlockNet
							</Heading>
						</Stack>
						<Text
							mt="auto"
							display={getAdaptiveValue("none", "none", "block") as any}
							fontSize={"14px"}
							fontWeight={400}
						>
							© 2024 NotBlockNet. Все права защищены.
						</Text>
					</Stack>

					<Stack
						direction={"column"}
						spacing={getAdaptiveValue("16px", "16px", "24px")}
					>
						<Heading
							fontSize={"24px"}
							style={uncageFont.style}
							fontWeight={700}
							color={"#fff"}
						>
							Навигация
						</Heading>
						<Stack direction={"column"} spacing={"12px"}>
							<Stack
								direction={getAdaptiveValue("column", "column", "row") as any}
								spacing={"12px"}
							>
								<Link
									color={"#A8A8A8"}
									fontSize={"14px"}
									fontWeight={400}
									opacity={"0.7"}
									_hover={{ opacity: "1" }}
								>
									Почему мы?
								</Link>
								<Link
									color={"#A8A8A8"}
									fontSize={"14px"}
									fontWeight={400}
									opacity={"0.7"}
									_hover={{ opacity: "1" }}
								>
									Преимущества
								</Link>
							</Stack>
							<Stack
								direction={getAdaptiveValue("column", "column", "row") as any}
								spacing={"12px"}
							>
								<Link
									color={"#A8A8A8"}
									fontSize={"14px"}
									fontWeight={400}
									opacity={"0.7"}
									_hover={{ opacity: "1" }}
								>
									Как это работает?
								</Link>
								<Link
									color={"#A8A8A8"}
									fontSize={"14px"}
									fontWeight={400}
									opacity={"0.7"}
									_hover={{ opacity: "1" }}
								>
									Частые вопросы
								</Link>
							</Stack>
						</Stack>
					</Stack>

					<Stack
						direction={"column"}
						spacing={getAdaptiveValue("16px", "16px", "24px")}
					>
						<Heading
							fontSize={"24px"}
							style={uncageFont.style}
							fontWeight={700}
							color={"#fff"}
						>
							Дополнительно
						</Heading>
						<Stack direction={"column"} spacing={"12px"}>
							<Stack
								direction={getAdaptiveValue("column", "column", "row") as any}
								spacing={"12px"}
							>
								<Link
									color={"#A8A8A8"}
									fontSize={"14px"}
									fontWeight={400}
									opacity={"0.7"}
									_hover={{ opacity: "1" }}
								>
									Политика конфиденциальности
								</Link>
								<Link
									color={"#A8A8A8"}
									fontSize={"14px"}
									fontWeight={400}
									opacity={"0.7"}
									_hover={{ opacity: "1" }}
								>
									Поддержка
								</Link>
							</Stack>
						</Stack>
						<Text
							mt="auto"
							display={getAdaptiveValue("block", "block", "none") as any}
							fontSize={"14px"}
							fontWeight={400}
						>
							© 2024 NotBlockNet. Все права защищены.
						</Text>
					</Stack>
				</Stack>
			</Center>
		</ContentContainer>
	);
}
