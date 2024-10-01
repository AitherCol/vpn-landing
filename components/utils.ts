import { NextRouter } from "next/router";

export function getAdaptiveValue(
	phone: string | number,
	tablet?: string | number,
	desktop?: string | number
) {
	return { base: phone, md: tablet, xl: desktop };
}

export function scrollToElement(elementId: string, router: NextRouter) {
	router.push(`/#${elementId}`);
}

export const openInNewTab = (url: string): void => {
	const link = document.createElement("a");
	link.href = url;
	link.target = "_blank";
	link.rel = "noopener noreferrer";
	link.click();
};
