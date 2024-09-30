import { getAdaptiveValue } from "@/components/utils";
import { ContentContainer, uncageFont } from "@/pages/_app";
import { Box, Center, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";

function Card({
	title,
	description,
	icon,
	numberIcon,
	isPrimary,
}: {
	title: string;
	description: string;
	icon: React.ReactElement;
	numberIcon: React.ReactElement;
	isPrimary?: boolean;
}) {
	return (
		<Stack
			direction={"row"}
			spacing={"24px"}
			alignItems={"center"}
			background={
				isPrimary
					? "linear-gradient(267deg, #BFFFFF -0.95%, #83D0CB 99.13%)"
					: "#191919"
			}
			border={isPrimary ? "1px solid #83D0CB" : "1px solid #252525"}
			borderRadius={"24px"}
			p={getAdaptiveValue("12px", "24px", "24px")}
			position={"relative"}
			minW={getAdaptiveValue("full", "806px")}
			boxShadow={
				isPrimary ? "0px 0px 48px 0px rgba(131, 208, 203, 0.16)" : undefined
			}
		>
			<Center
				w="48px"
				h="48px"
				p="12px"
				bgColor={isPrimary ? "rgba(0, 0, 0, 0.08)" : "#242424"}
				borderRadius={"999px"}
				position={"absolute"}
				right={"8px"}
				top="8px"
				display={getAdaptiveValue("none", "flex", "flex") as any}
			>
				<Icon
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					width={"24px"}
					color={isPrimary ? "#000000" : undefined}
					height={"24px"}
				>
					{numberIcon}
				</Icon>
			</Center>
			<Center
				w="56px"
				h="56px"
				p="16px"
				bgColor={isPrimary ? "#191919" : "rgba(255, 255, 255, 0.10)"}
				borderRadius={"999px"}
			>
				<Icon
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					width={"24px"}
					height={"24px"}
				>
					{icon}
				</Icon>
			</Center>
			<Stack textAlign={"start"} direction={"column"} spacing={"4px"}>
				<Heading
					fontSize={getAdaptiveValue("22px", "24px", "32px")}
					color={isPrimary ? "#191919" : undefined}
					fontWeight={700}
					lineHeight={"normal"}
				>
					{title}
				</Heading>
				<Text
					fontSize={"16px"}
					fontWeight={400}
					lineHeight={"normal"}
					color={isPrimary ? "#191919" : "#A7A7A7"}
				>
					{description}
				</Text>
			</Stack>
		</Stack>
	);
}

export default function HowItWorks() {
	return (
		<Box id="how" position="relative" overflow={"hidden"}>
			<Box
				position={"absolute"}
				right="-250px"
				top="-250px"
				width="500px"
				height="500px"
				background="radial-gradient(50% 50% at 50% 50%, #83D0CB 0%, rgba(131, 208, 203, 0.00) 100%)"
				zIndex="0"
				filter="blur(2px)"
				opacity={"0.1"}
			/>
			<ContentContainer>
				<Center
					w="full"
					h="full"
					mt={getAdaptiveValue("92px", "92px", "164px")}
					mb={getAdaptiveValue("92px", "92px", "164px")}
				>
					<Stack
						direction={"column"}
						spacing={getAdaptiveValue("32px", "32px", "24px")}
						alignItems={"center"}
						textAlign={"center"}
						w="full"
					>
						<Heading
							fontWeight={700}
							style={uncageFont.style}
							textAlign={"center"}
							fontSize={getAdaptiveValue("22px", "36px", "48px")}
							textTransform={"uppercase"}
							lineHeight={"normal"}
						>
							Как это работает?
						</Heading>

						<Stack direction={"column"} spacing={"0px"}>
							<Card
								title="Запуск Телеграм-бота"
								description="Откройте Телеграм и начните общение с нашим ботом для подключения"
								icon={
									<path d="M13 4.05493C17.5 4.55237 21 8.36745 21 13V22H3V13C3 8.36745 6.50005 4.55237 11 4.05493V1H13V4.05493ZM12 18C14.7614 18 17 15.7614 17 13C17 10.2386 14.7614 8 12 8C9.23858 8 7 10.2386 7 13C7 15.7614 9.23858 18 12 18ZM12 16C10.3431 16 9 14.6569 9 13C9 11.3431 10.3431 10 12 10C13.6569 10 15 11.3431 15 13C15 14.6569 13.6569 16 12 16ZM12 14C12.5523 14 13 13.5523 13 13C13 12.4477 12.5523 12 12 12C11.4477 12 11 12.4477 11 13C11 13.5523 11.4477 14 12 14Z"></path>
								}
								numberIcon={
									<path d="M14 1.5V22H12V3.704L7.5 4.91V2.839L12.5 1.5H14Z"></path>
								}
							/>
							<Box h="24px" w="full" position={"relative"}>
								<Box
									display={getAdaptiveValue("none", "block", "block") as any}
									zIndex={2}
									h="34px"
									w="4px"
									bgColor={"#242424"}
									position={"absolute"}
									right={"31px"}
								></Box>
							</Box>
							<Card
								title="Выбор страны"
								description="Выберите нужное местоположение для безопасного подключения"
								icon={
									<path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"></path>
								}
								numberIcon={
									<path d="M16.0002 7.5C16.0002 5.29086 14.2094 3.5 12.0002 3.5C9.7911 3.5 8.00024 5.29086 8.00024 7.5H6.00024C6.00024 4.18629 8.68653 1.5 12.0002 1.5C15.314 1.5 18.0002 4.18629 18.0002 7.5C18.0002 8.93092 17.4993 10.2448 16.6633 11.276L9.344 19.9991L18.0002 20V22H6.00024L6 20.8731L15.0642 10.071C15.6485 9.37595 16.0002 8.47905 16.0002 7.5Z"></path>
								}
							/>
							<Box h="24px" w="full" position={"relative"}>
								<Box
									display={getAdaptiveValue("none", "block", "block") as any}
									zIndex={2}
									h="34px"
									w="4px"
									bgColor={"#242424"}
									position={"absolute"}
									right={"31px"}
								></Box>
							</Box>
							<Card
								title="Подключение одним нажатием"
								description="Нажмите на кнопку в боте, чтобы мгновенно подключиться к VPN"
								icon={
									<path d="M17 14H12.6586C11.8349 16.3304 9.61244 18 7 18C3.68629 18 1 15.3137 1 12C1 8.68629 3.68629 6 7 6C9.61244 6 11.8349 7.66962 12.6586 10H23V14H21V18H17V14ZM7 14C8.10457 14 9 13.1046 9 12C9 10.8954 8.10457 10 7 10C5.89543 10 5 10.8954 5 12C5 13.1046 5.89543 14 7 14Z"></path>
								}
								numberIcon={
									<path d="M18.0001 2V3.36217L12.8087 9.54981C16.0169 9.94792 18.5001 12.684 18.5001 16C18.5001 19.5899 15.5899 22.5 12.0001 22.5C8.95434 22.5 6.39789 20.4052 5.69287 17.5778L7.63351 17.0922C8.12156 19.0497 9.89144 20.5 12.0001 20.5C14.4853 20.5 16.5001 18.4853 16.5001 16C16.5001 13.5147 14.4853 11.5 12.0001 11.5C11.2795 11.5 10.5985 11.6694 9.99465 11.9705L9.76692 12.0923L9.07705 10.8852L14.8551 3.99917L6.50006 4V2H18.0001Z"></path>
								}
							/>
							<Box h="24px" w="full" position={"relative"}>
								<Box
									display={getAdaptiveValue("none", "block", "block") as any}
									zIndex={2}
									h="34px"
									w="4px"
									background={
										"linear-gradient(to bottom, rgba(36,36,36,1) 0%, rgba(174,234,233,1) 100%)"
									}
									position={"absolute"}
									right={"31px"}
								></Box>
							</Box>
							<Card
								title="Безопасный и свободный интернет"
								description="Наслаждайтесь защищённым и анонимным интернетом без ограничений"
								icon={
									<path d="M3.78307 2.82598L12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598Z"></path>
								}
								numberIcon={
									<path d="M16.0001 1.5L16 16H19.0001V18H16L16.0001 22H14.0001L14 18H4V16.898L14.0001 1.5H16.0001ZM14 16V5.171L6.968 16H14Z"></path>
								}
								isPrimary
							/>
						</Stack>
					</Stack>
				</Center>
			</ContentContainer>
		</Box>
	);
}
