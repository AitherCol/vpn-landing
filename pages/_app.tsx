import Footer from "@/components/navigation/Footer";
import Header from "@/components/navigation/Header";
import theme from "@/components/theme";
import "@/styles/globals.css";
import { ChakraProvider, Container } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import Head from "next/head";
import React from "react";

export const uncageFont = localFont({
	src: "./fonts/UNCAGE-Bold.ttf",
	variable: "--font-uncage",
	weight: "700",
});

export function ContentContainer({
	children,
}: {
	children: React.ReactElement;
}) {
	return (
		<Container
			maxW={["full", "full", "full", "full", "full", "container.xl"]}
			paddingInlineStart={0}
			h="full"
			paddingInlineEnd={0}
			padding={["20px 16px", "20px 64px"]}
		>
			{children}
		</Container>
	);
}

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>NotBlockNet – надежный VPN</title>
				<meta
					name="description"
					content="NotBlockNet – это свободный, быстрый и безопасный интернет. Мы предоставляем надёжное и безопасное VPN-решение, которое защитит твою конфиденциальность и откроет доступ к любому контенту, где бы ты ни находился. Одна подписка — полная свобода в интернете."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
				<meta
					name="keywords"
					content="notblocknet, not block net, нотблокнет нот блок нет, vpn, впн, fast vpn, free vpn, быстрый впн, надёжный впн, впн хесуса, hesus vpn, хесус впн, jesusavgn vpn, notblocknet vpn, нотблокнет впн"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<ChakraProvider theme={theme}>
				<Header />

				<Component {...pageProps} />

				<Footer />
			</ChakraProvider>
		</>
	);
}
