import { getAdaptiveValue } from "@/components/utils";
import { ContentContainer, uncageFont } from "@/pages/_app";
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

function FeatureCard({
	title,
	description,
	icon,
	background,
	opacity = "0.1",
	backgroundBlendMode,
}: {
	title: string;
	description: string;
	icon: React.ReactElement;
	background: string;
	opacity?: string;
	backgroundBlendMode?: string;
}) {
	return (
		<Stack
			direction={"column"}
			spacing={"auto"}
			minH={["auto", "247px"]}
			maxW={["full", "full", "652px", "652px", "427px"]}
			p="16px"
			transitionProperty={"var(--notblocknet-transition-property-common)"}
			transitionDuration={"350ms"}
			userSelect={"none"}
			borderRadius={["12px", "24px"]}
			border="1px solid"
			borderColor={"#252525"}
			backgroundColor={"#191919"}
			w="full"
			h="full"
			alignItems={"start"}
			textAlign={"start"}
			position="relative"
			overflow="hidden"
			backgroundBlendMode={backgroundBlendMode}
			_hover={{
				borderColor: "#434343",
			}}
		>
			<Box
				position="absolute"
				top={0}
				left={0}
				right={0}
				bottom={0}
				backgroundImage={`url(${background})`}
				backgroundPosition="center"
				backgroundSize="cover"
				backgroundRepeat="no-repeat"
				zIndex={0}
				opacity={opacity}
				borderRadius={"24px"}
			/>
			<Icon
				w="128px"
				h="128px"
				viewBox="0 0 24 24"
				fill="currentColor"
				color={"#83D0CB"}
				position={"absolute"}
				right={"-36px"}
				top="-36px"
				opacity={"0.1"}
			>
				{icon}
			</Icon>
			<Center
				bgColor={"rgba(255, 255, 255, 0.10)"}
				borderRadius={"999px"}
				w="56px"
				h="56px"
				mb="24px"
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

			<Stack mt="auto" direction={"column"} spacing={"4px"}>
				<Heading
					fontSize={getAdaptiveValue("22px", "24px", "32px")}
					fontWeight={700}
				>
					{title}
				</Heading>
				<Text fontSize={"16px"} fontWeight={400} color={"#A7A7A7"}>
					{description}
				</Text>
			</Stack>
		</Stack>
	);
}

export default function Features() {
	return (
		<Box id="features" position="relative" overflow={"hidden"}>
			<Box
				position="absolute"
				right="-250px"
				bottom="-250px"
				width="500px"
				height="500px"
				background="radial-gradient(50% 50% at 50% 50%, #83D0CB 0%, rgba(131, 208, 203, 0.00) 100%)"
				zIndex="0"
				filter="blur(2px)"
				opacity={"0.1"}
			/>

			<Box
				position={"absolute"}
				left="-250px"
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
							Наши преимущества
						</Heading>

						<SimpleGrid
							columns={getAdaptiveValue(1, 1, 2) as any}
							spacing={"16px"}
						>
							<FeatureCard
								title="Безлимитный трафик"
								description="Наслаждайтесь интернетом без ограничений по трафику"
								icon={
									<path d="M11 7V4C11 3.44772 11.4477 3 12 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V8C2 7.44772 2.44772 7 3 7H11ZM5 16V18H10V16H5ZM14 16V18H19V16H14ZM14 13V15H19V13H14ZM14 10V12H19V10H14ZM5 13V15H10V13H5Z"></path>
								}
								background="/assets/main/features/1.png"
							/>
							<FeatureCard
								title="Высокая скорость"
								description="Используйте стабильное соединение с максимальной скоростью передачи данных"
								icon={
									<path d="M12 13.3334L2.77735 19.4818C2.54759 19.635 2.23715 19.5729 2.08397 19.3432C2.02922 19.261 2 19.1645 2 19.0658V4.93433C2 4.65818 2.22386 4.43433 2.5 4.43433C2.59871 4.43433 2.69522 4.46355 2.77735 4.5183L12 10.6667V4.93433C12 4.65818 12.2239 4.43433 12.5 4.43433C12.5987 4.43433 12.6952 4.46355 12.7774 4.5183L23.376 11.584C23.6057 11.7372 23.6678 12.0477 23.5146 12.2774C23.478 12.3323 23.4309 12.3795 23.376 12.4161L12.7774 19.4818C12.5476 19.635 12.2372 19.5729 12.084 19.3432C12.0292 19.261 12 19.1645 12 19.0658V13.3334Z"></path>
								}
								background="/assets/main/features/2.png"
								opacity="0.05"
								backgroundBlendMode="hard-light"
							/>

							<FeatureCard
								title="Ключи никогда не сбрасываются"
								description="Ваш доступ к сети всегда активен, никакого сброса ключей"
								icon={
									<path d="M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17ZM11 14V18H13V14H11Z"></path>
								}
								background="/assets/main/features/3.png"
								opacity="0.03"
							/>

							<FeatureCard
								title="Неограниченное количество устройств"
								description="Подключайте к сети сразу все свои устройства без ограничений"
								icon={
									<path d="M19 6H11C10.4477 6 10 6.44772 10 7V20H4C3.44772 20 3 19.5523 3 19V3C3 2.44772 3.44772 2 4 2H18C18.5523 2 19 2.44772 19 3V6ZM13 8H21C21.5523 8 22 8.44772 22 9V21C22 21.5523 21.5523 22 21 22H13C12.4477 22 12 21.5523 12 21V9C12 8.44772 12.4477 8 13 8Z"></path>
								}
								background="/assets/main/features/4.png"
								opacity="0.03"
								backgroundBlendMode="soft-light"
							/>
						</SimpleGrid>
					</Stack>
				</Center>
			</ContentContainer>
		</Box>
	);
}
