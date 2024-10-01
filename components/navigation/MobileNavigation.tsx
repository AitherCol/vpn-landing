import {
	Icon,
	IconButton,
	Popover,
	PopoverBody,
	PopoverContent,
	PopoverTrigger,
	Stack,
	useDisclosure,
} from "@chakra-ui/react";
import NavigationButton from "./NavigationButton";

export default function MobileNavigation() {
	const { isOpen, onToggle, onClose } = useDisclosure();

	return (
		<>
			<Popover placement="bottom-end" isOpen={isOpen} onClose={onClose}>
				<PopoverTrigger>
					<IconButton
						onClick={onToggle}
						aria-label="menu"
						bgColor={"#242424"}
						borderRadius={"999px"}
						w="48px"
						h="48px"
						variant={"unstyled"}
						_active={{
							transform: "scale(0.875)",
						}}
						icon={
							<Icon
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								width={"24px"}
								height={"24px"}
							>
								{!isOpen ? (
									<path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
								) : (
									<path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
								)}
							</Icon>
						}
					/>
				</PopoverTrigger>
				<PopoverContent
					bgColor={"#191919"}
					border={"none"}
					borderRadius={"24px"}
					p={0}
					maxW="164px"
				>
					<PopoverBody p={"4px"}>
						<Stack textAlign={"center"} direction={"column"} spacing={0}>
							<NavigationButton isMobile elementId="main">
								Главная
							</NavigationButton>
							<NavigationButton isMobile elementId="why">
								Почему мы?
							</NavigationButton>
							<NavigationButton isMobile elementId="features">
								Преимущества
							</NavigationButton>
							<NavigationButton isMobile elementId="how">
								Как это работает?
							</NavigationButton>
							<NavigationButton isMobile elementId="faq">
								Частые вопросы
							</NavigationButton>
						</Stack>
					</PopoverBody>
				</PopoverContent>
			</Popover>
		</>
	);
}
