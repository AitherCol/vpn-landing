import { Center, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

export default function NavigationButton({
	children,
	elementId,
	isMobile,
}: {
	children: React.ReactNode;
	elementId: string;
	isMobile?: boolean;
}) {
	const [isActive, setActive] = useState<boolean>(false);
	const observer = useRef<IntersectionObserver | null>(null);
	const router = useRouter();

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
	}, [elementId, router.pathname]);

	const handleScroll = () => {
		router.push(`/#${elementId}`);
	};

	return (
		<Center
			cursor={"pointer"}
			borderRadius={isMobile ? "80px" : "40px"}
			bgColor={isActive ? "#242424" : "transparent"}
			p={isMobile ? undefined : "10px 20px"}
			pt={isMobile ? "14px" : undefined}
			pb={isMobile ? "14px" : undefined}
			onClick={handleScroll}
			transitionProperty={
				"var(--notblocknet-transition-property-common) !important"
			}
			transitionDuration={"350ms"}
		>
			<Text
				fontSize={isMobile ? "14px" : "16px"}
				opacity={isActive ? "1" : "0.7"}
			>
				{children}
			</Text>
		</Center>
	);
}
