import { getAdaptiveValue } from "@/components/utils";
import { ContentContainer, uncageFont } from "@/pages/_app";
import styles from "@/styles/FAQ.module.css";
import {
	Accordion,
	AccordionButton,
	AccordionItem,
	Box,
	Center,
	Collapse,
	Heading,
	Icon,
	Link,
	Stack,
	Text,
} from "@chakra-ui/react";

function QuestionComponent({
	question,
	answer,
}: {
	question: string;
	answer: string;
}) {
	return (
		<AccordionItem w="full" borderTop={"none"}>
			{({ isExpanded }) => (
				<>
					<AccordionButton
						borderTop={"none"}
						p={0}
						paddingInline={0}
						w="full"
						outline={"none"}
					>
						<Stack
							w="full"
							bgColor={"#191919"}
							border={"1px solid"}
							borderColor={isExpanded ? "#BFFFFF" : "#252525"}
							borderRadius={"24px"}
							p="24px"
							textAlign={"start"}
							_hover={{
								bgColor: "#191919",
								color: "#bfffff",
							}}
							direction={"column"}
							spacing={"4px"}
							position={"relative"}
							className={styles.button}
						>
							<Box
								w={"370px"}
								h="370px"
								position={"absolute"}
								left={"-238px"}
								top="-238px"
								borderRadius={"999px"}
								opacity={isExpanded ? "0.1" : "0"}
								className={styles.shadow}
								background={
									"radial-gradient(50% 50% at 50% 50%, #83D0CB 0%, rgba(131, 208, 203, 0.00) 100%)"
								}
								filter={"blur(2px)"}
							></Box>

							<Heading
								className={[isExpanded ? styles["question"] : undefined].join(
									" "
								)}
								fontSize={getAdaptiveValue("16px", "18px", "24px")}
								fontWeight={700}
								lineHeight={"normal"}
							>
								{question}
							</Heading>
							<Center
								position={"absolute"}
								w={"36px"}
								h={"36px"}
								top="8px"
								right={"8px"}
								className={[
									styles.arrow,
									isExpanded ? styles["arrow-expanded"] : undefined,
								].join(" ")}
								bgColor={"#242424"}
								borderRadius={"999px"}
								p="12px"
							>
								<Box
									w={"523px"}
									h="523px"
									position={"absolute"}
									left={"-244px"}
									top="-244px"
									borderRadius={"999px"}
									opacity={isExpanded ? "0.1" : "0"}
									className={styles.shadow}
									background={
										"radial-gradient(50% 50% at 50% 50%, #83D0CB 0%, rgba(131, 208, 203, 0.00) 100%)"
									}
									filter={"blur(2px)"}
									zIndex={2}
								></Box>
								<Icon
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									w="24px"
									h="24px"
								>
									<path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
								</Icon>
							</Center>
							<Collapse in={isExpanded} animateOpacity>
								<Text color={"#BFFFFF"} fontWeight={400} fontSize={"16px"}>
									{answer}
								</Text>
							</Collapse>
						</Stack>
					</AccordionButton>
				</>
			)}
		</AccordionItem>
	);
}

export default function FAQ() {
	return (
		<Box id="faq" position="relative" overflow={"hidden"}>
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
							Частые вопросы
						</Heading>
						<Accordion
							w="full"
							alignItems={"center"}
							justifyContent={"center"}
							display={"flex"}
							allowToggle
						>
							<Stack
								maxW={getAdaptiveValue("full", "652px", "787px")}
								w="full"
								direction={"column"}
								spacing={"16px"}
							>
								<QuestionComponent
									question="Как подключиться к NotBlockNet?"
									answer="Для подключения используйте нашего Telegram бота или наше расширение для браузера."
								/>
								<QuestionComponent
									question="Безопасен ли ваш сервис?"
									answer="Да, мы не храним никаких логов и используем современные технологии шифрования для защиты вашего интернет-трафика и обеспечения анонимности."
								/>
								<QuestionComponent
									question="Сколько устройств я могу подключить?"
									answer="Количество устройств для подключения неограниченно."
								/>
								<QuestionComponent
									question="Что делать, если у меня проблемы с подключением?"
									answer="Мы рекомендуем вам обратиться в нашу службу поддержки, ссылка на поддержку есть внизу страницы."
								/>
								<QuestionComponent
									question="Есть ли у вас бесплатный пробный период?"
									answer={`Да, мы даем пробный период на 1 час. Активировать его можно в разделе "Подписка" в Telegram боте.`}
								/>

								<Center
									border={"1px solid #252525"}
									borderRadius={"24px"}
									w="full"
									p="24px"
								>
									<Stack direction={"column"} spacing={"8px"}>
										<Text
											fontSize={"16px"}
											lineHeight={"normal"}
											fontWeight={400}
										>
											Не нашли ответ на нужный вопрос?
										</Text>
										<Link
											color={"#BFFFFF"}
											fontWeight={500}
											fontSize={"16px"}
											href="https://t.me/NotBlockNetSupportBot"
											isExternal
										>
											Обратитесь в нашу поддержку
										</Link>
									</Stack>
								</Center>
							</Stack>
						</Accordion>
					</Stack>
				</Center>
			</ContentContainer>
		</Box>
	);
}
