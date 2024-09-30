import Cover from "@/components/pages/main/Cover";
import FAQ from "@/components/pages/main/FAQ";
import Features from "@/components/pages/main/Features";
import HowItWorks from "@/components/pages/main/HowItWorks";
import Referral from "@/components/pages/main/Referral";
import Storm from "@/components/pages/main/Storm";
import { Stack } from "@chakra-ui/react";

export default function Home() {
	return (
		<Stack direction={"column"} spacing={0}>
			<Cover />
			<Storm />
			<Features />
			<HowItWorks />
			<Referral />
			<FAQ />
		</Stack>
	);
}
