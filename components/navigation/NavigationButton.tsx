import { Center, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

export default function NavigationButton({
	children,
	elementId,
}: {
	children: React.ReactNode;
	elementId: string;
}) {
	const [isActive, setActive] = useState<boolean>(false);
	const observer = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		// Получаем элемент, который нужно отслеживать
		const targetElement = document.getElementById(elementId);
		if (!targetElement) return;

		// Создаем новый наблюдатель
		observer.current = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					// Если элемент виден на экране, устанавливаем isActive в true
					setActive(entry.isIntersecting);
				});
			},
			{
				// Настройки для срабатывания при 50% видимости элемента
				threshold: 0.5,
			}
		);

		// Запускаем наблюдение за элементом
		observer.current.observe(targetElement);

		// Очищаем наблюдатель при размонтировании компонента
		return () => {
			if (observer.current && targetElement) {
				observer.current.unobserve(targetElement);
			}
		};
	}, [elementId]);

	const handleScroll = () => {
		// Скроллим к элементу по клику
		const targetElement = document.getElementById(elementId);
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<Center
			cursor={"pointer"}
			borderRadius={isActive ? "40px" : "40px"}
			bgColor={isActive ? "#242424" : "transparent"}
			p="10px 20px"
			onClick={handleScroll}
			transitionProperty={
				"var(--notblocknet-transition-property-common) !important"
			}
			transitionDuration={"350ms"}
		>
			<Text fontSize={"16px"} opacity={isActive ? "1" : "0.7"}>
				{children}
			</Text>
		</Center>
	);
}
