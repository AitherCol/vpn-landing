import CustomButton from "@/components/ui/CustomButton";
import { getAdaptiveValue, openInNewTab } from "@/components/utils";
import {
	Box,
	Center,
	Heading,
	Icon,
	SimpleGrid,
	Stack,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { ContentContainer } from "./_app";

function Card({
	icon,
	title,
	description,
	buttonText = "Скачать",
	link,
}: {
	icon: React.ReactElement;
	title: string;
	description: string;
	buttonText?: string;
	link: string;
}) {
	return (
		<Stack
			direction={"column"}
			spacing={"24px"}
			p="16px"
			background={"#191919"}
			border={"1px solid #252525"}
			borderRadius={"24px"}
			maxW={["full", "full", "652px", "652px", "427px"]}
			textAlign={"start"}
		>
			<Center
				w="96px"
				h="96px"
				p="12px"
				bgColor={"#242424"}
				borderRadius={"999px"}
				display={"flex"}
			>
				<Icon
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					width={"64px"}
					height={"64px"}
				>
					{icon}
				</Icon>
			</Center>
			<Stack mt="auto" direction={"column"} spacing={"16px"}>
				<Stack direction={"column"} spacing={"4px"}>
					<Heading
						lineHeight={"normal"}
						fontSize={getAdaptiveValue("22px", "24px", "32px")}
						fontWeight={700}
					>
						{title}
					</Heading>

					<Text fontSize={"16px"} fontWeight={400} color={"#A7A7A7"}>
						{description}
					</Text>
				</Stack>

				<CustomButton
					variant="primary"
					zIndex={3}
					onClick={() => openInNewTab(link)}
				>
					{buttonText}
				</CustomButton>
			</Stack>
		</Stack>
	);
}

export default function Welcome() {
	return (
		<Box position="relative" overflow={"hidden"} minH="100vh">
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
				<Center minH="100svh">
					<Stack
						direction={"column"}
						spacing={getAdaptiveValue("60px", "0px", "0px")}
						textAlign={"center"}
						alignItems={"center"}
						position={"relative"}
					>
						<Heading fontWeight={700}>Выберите вашу платформу</Heading>
						<SimpleGrid columns={[1, 2]} spacing={"24px"}>
							<Card
								icon={
									<path d="M9.82726 21.7633C5.34912 20.7712 2 16.7767 2 12C2 10.1779 2.48734 8.46958 3.33878 6.99834L7.62189 14.4169C8.47396 15.9571 10.1152 17 12 17C12.2023 17 12.4018 16.988 12.5978 16.9646L9.82726 21.7633ZM12 22L16.2868 14.5751C16.7396 13.8229 17 12.9419 17 12C17 10.8744 16.6281 9.83566 16.0004 9H21.5422C21.8396 9.94704 22 10.9548 22 12C22 17.5228 17.5228 22 12 22ZM14.5721 13.545C14.0473 14.4168 13.0917 15 12 15C10.8897 15 9.92024 14.3968 9.40149 13.5002L9.37313 13.4501C9.13535 13.0203 9 12.526 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 12.5465 14.8539 13.0589 14.5985 13.5002L14.5721 13.545ZM4.6322 5.23859C6.46008 3.24783 9.08432 2 12 2C15.7014 2 18.9331 4.01099 20.6622 7H12C9.93635 7 8.1647 8.25019 7.40112 10.0345L4.6322 5.23859Z"></path>
								}
								title="Расширение для браузера"
								description="Подходит для браузеров на базе Chromium (Chrome, Yandex, Opera и так далее)"
								link="https://chromewebstore.google.com/detail/notblocknet-vpn/jlonngicgaieihhpihpdegpekeghnceh"
							/>
							<Card
								icon={
									<path d="M2.14753 11.8099C7.3949 9.52374 10.894 8.01654 12.6447 7.28833C17.6435 5.20916 18.6822 4.84799 19.3592 4.83606C19.5081 4.83344 19.8411 4.87034 20.0567 5.04534C20.2388 5.1931 20.2889 5.39271 20.3129 5.5328C20.3369 5.6729 20.3667 5.99204 20.343 6.2414C20.0721 9.08763 18.9 15.9947 18.3037 19.1825C18.0514 20.5314 17.5546 20.9836 17.0736 21.0279C16.0283 21.1241 15.2345 20.3371 14.2221 19.6735C12.6379 18.635 11.7429 17.9885 10.2051 16.9751C8.42795 15.804 9.58001 15.1603 10.5928 14.1084C10.8579 13.8331 15.4635 9.64397 15.5526 9.26395C15.5637 9.21642 15.5741 9.03926 15.4688 8.94571C15.3636 8.85216 15.2083 8.88415 15.0962 8.9096C14.9373 8.94566 12.4064 10.6184 7.50365 13.928C6.78528 14.4212 6.13461 14.6616 5.55163 14.649C4.90893 14.6351 3.67265 14.2856 2.7536 13.9869C1.62635 13.6204 0.730432 13.4267 0.808447 12.8044C0.849081 12.4803 1.29544 12.1488 2.14753 11.8099Z"></path>
								}
								title="Telegram-бот"
								description="Подходит для Windows, MacOS, Android и iOS. Для подключения используется клиент Outline."
								link="https://t.me/NotBlockNetBot"
								buttonText="Открыть"
							/>
						</SimpleGrid>
					</Stack>
				</Center>
			</ContentContainer>
		</Box>
	);
}
