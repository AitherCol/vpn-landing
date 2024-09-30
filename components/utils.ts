export function getAdaptiveValue(
	phone: string | number,
	tablet?: string | number,
	desktop?: string | number
) {
	return { base: phone, md: tablet, xl: desktop };
}
