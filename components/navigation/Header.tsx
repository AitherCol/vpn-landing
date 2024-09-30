import { uncageFont } from "@/pages/_app";
import { Box, Center, Heading, Image, Stack } from "@chakra-ui/react";
import CustomButton from "../ui/CustomButton";
import { openInNewTab } from "../utils";
import NavigationButton from "./NavigationButton";

export default function Header() {
	return (
		<Center
			padding={["8px 16px", "8px 16px", "8px", "16px", "8px 64px"]}
			w="full"
			position={"fixed"}
			zIndex={4}
			background={
				"linear-gradient(180deg, #0F0F0F 0%, rgba(15, 15, 15, 0.98) 51.72%, rgba(15, 15, 15, 0.00) 100%)"
			}
		>
			<Box
				position="relative"
				w={["full", "full", "full", "full", "full", "container.xl"]}
				h="60px"
			>
				<Stack
					direction={"row"}
					justifyContent={"space-between"}
					alignItems={"center"}
					h="full"
					w="full"
				>
					{/* Левый блок с логотипом и заголовком */}
					<Stack
						h="full"
						direction={"row"}
						spacing={"6px"}
						alignItems={"center"}
						cursor={"pointer"}
						display={["flex", "flex", "none", "none", "flex", "flex"]}
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

					{/* Правый блок */}

					<CustomButton
						display={[
							"none",
							"none",
							"none",
							"none",
							"inline-flex",
							"inline-flex",
						]}
						variant="primary"
						zIndex={3}
						onClick={() => openInNewTab("https://t.me/NotBlockNetBot")}
					>
						Начать использовать
					</CustomButton>
				</Stack>

				{/* Центральный блок с абсолютным позиционированием */}
				<Box
					position="absolute"
					left="50%"
					top="50%"
					transform="translate(-50%, -50%)"
					w="full"
					pointerEvents="none" // Отключаем обработку событий для всего контейнера
					display={["none", "none", "block", "block", "block"]}
				>
					<Center h="full">
						<Stack
							direction={"row"}
							padding={"4px"}
							alignItems={"center"}
							spacing={0}
							pointerEvents="auto" // Включаем кликабельность для элементов внутри
							bgColor={"#191919"}
							borderRadius={"40px"}
						>
							<NavigationButton elementId="main">Главная</NavigationButton>
							<NavigationButton elementId="why">Почему мы?</NavigationButton>
							<NavigationButton elementId="features">
								Преимущества
							</NavigationButton>
							<NavigationButton elementId="how">
								Как это работает?
							</NavigationButton>
							<NavigationButton elementId="referral">
								Реферальная система
							</NavigationButton>
						</Stack>
					</Center>
				</Box>
			</Box>
		</Center>
	);
}
