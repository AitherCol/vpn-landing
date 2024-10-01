import { getAdaptiveValue } from "@/components/utils";
import { Container, Heading, Stack, Text } from "@chakra-ui/react";
import { uncageFont } from "./_app";

export default function privacy() {
	return (
		<Container pt="80px" maxW="container.lg">
			<Stack direction="column" spacing="16px">
				<Stack direction="column" spacing="8px">
					<Heading
						fontWeight={700}
						style={uncageFont.style}
						fontSize={getAdaptiveValue("22px", "36px", "48px")}
						textTransform={"uppercase"}
						lineHeight={"normal"}
					>
						Privacy policy
					</Heading>
					<Text>
						In this policy, we describe how we are processing your personal data
						as a data controller.
					</Text>
				</Stack>
				<Stack direction="column" spacing="8px">
					<Heading size="md">Policy overview</Heading>
					<Text>
						{" "}
						Our underlying policy is that we want you to remain anonymous when
						using our service. It is therefore our policy to never store any
						activity logs or metadata and to have as minimal data retention as
						possible. However, in some situations we might process your personal
						data if you, for example, are making payments by a bank wire,
						PayPal, Swish, Stripe, etc. or are sending an e-mail or reporting a
						problem. In those cases, we might process your personal data. Also,
						if you use our service for illegal purposes, we have every right to
						revoke your license key and restrict access to our service.{" "}
					</Text>
				</Stack>
				<Stack direction="column" spacing="8px">
					<Heading size="md">General payment data</Heading>
					<Text>
						{" "}
						Certain payment data must be kept for the statutory retention period
						described in applicable local laws. If not required by law or stated
						above, the data will be stored for no longer than necessary for the
						purpose. After the statutory retention periods, the data will be
						permanently deleted.{" "}
					</Text>
				</Stack>
				<Stack direction="column" spacing="8px">
					<Heading size="md">Payments</Heading>
					<Text>
						{" "}
						Payment information are processed for the purpose of providing you
						with the service we offer, to pay out refunds and for accounting
						purposes. The processing of payment data for the first two purposes
						are based on a legitimate interest where our rights to process the
						data for such interest overrides your rights to your personal data.
						Payment information processed for accounting purposes are necessary
						for the compliance of a legal obligation to which we are subject.
						Please avoid making payments through bank wire.{" "}
					</Text>
				</Stack>
				<Stack direction="column" spacing="8px">
					<Heading size="md">Support and problem report</Heading>
					<Text>
						{" "}
						Support by e-mail: your e-mail address and other information which
						you have written in the e-mail. Problem reported by the app/client:
						(program logs, email, IP-addresses and sensitive path are removed).
						Please refrain from entering any personal data when reporting a
						problem by the app/client.{" "}
					</Text>
					<Text>
						{" "}
						Processing of e-mails and problem reports via our social media and
						email are made for the purpose of answering questions, resolve
						problems, and provide general support to customers. The processing
						is necessary for the purpose of the legitimate interests where such
						interest overrides your rights to your personal data.{" "}
					</Text>
					<Text>
						{" "}
						After "solving" or "closing" a support case/problem report, all
						related emails/problem reports are archived (removed from the
						inbox). After six months, all emails/problem reports sent to our
						support address are automatically, permanently erased (from inbox,
						deleted items, sent items, trash, and archives).{" "}
					</Text>
				</Stack>
				<Stack direction="column" spacing="8px">
					<Heading size="md">Third-party recipients</Heading>
					<Text>
						{" "}
						Your personal data will only be shared with third party suppliers
						who are performing services on our behalf and for the purposes
						stated above. The categories of such recipients are e-mail service
						providers and payment solution suppliers (which are subject to
						confidentiality).{" "}
					</Text>
				</Stack>
				<Stack direction="column" spacing="8px">
					<Heading size="md">Is any transfer made to a third country?</Heading>
					<Text>
						{" "}
						No. We only store your personal data within the EU/EEA. If transfer
						to a third country occurs in exceptional cases, we will ensure that
						there is a legal basis for such a transfer and provide you with
						necessary information.{" "}
					</Text>
				</Stack>
				<Stack direction="column" spacing="8px">
					<Heading size="md">Automated decision making</Heading>
					<Text>
						{" "}
						No automated decision making (including profiling) takes place.{" "}
					</Text>
				</Stack>
				<Stack direction="column" spacing="8px">
					<Heading size="md">Age restriction</Heading>
					<Text>
						{" "}
						In accordance with the Children's Online Privacy Protection Act
						(COPPA) and related regulations, we do not knowingly collect or
						store any personal information from children under the age of 13.
					</Text>
				</Stack>
				<Stack direction="column" spacing="8px">
					<Heading size="md">Updates</Heading>
					<Text>
						{" "}
						This Privacy policy was updated September 18, 2024. This Privacy
						policy may be updated and, in such case, a new version will be
						published on https://notblock.net/privacy.
					</Text>
				</Stack>
			</Stack>
		</Container>
	);
}
