import { getAdaptiveValue } from "@/components/utils";
import { uncageFont } from "@/pages/_app";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";

export default function Storm() {
	return (
		<Box
			id="why"
			position="relative"
			height={getAdaptiveValue("auto", "auto", "100vh")}
			pb={getAdaptiveValue("92px", "113px", "0px")}
			overflow={"hidden"}
		>
			<Box
				position="absolute"
				top="0"
				left="0"
				width="100%"
				height="100%"
				backgroundImage="url('/assets/main/storm_bg.png')"
				backgroundSize="cover"
				backgroundPosition="center"
				backgroundRepeat={"no-repeat"}
				zIndex="-1"
			/>

			{/* Lower-left glow */}
			<Box
				position="absolute"
				left="-250px"
				bottom="-250px"
				width="500px"
				height="500px"
				background="radial-gradient(50% 50% at 50% 50%, #83D0CB 0%, rgba(131, 208, 203, 0.00) 100%)"
				zIndex="0"
				filter="blur(2px)"
				opacity={"0.1"}
				// display={["none", "block"]}
			/>

			{/* Upper-left glow */}

			<Box
				position={"absolute"}
				left="calc(100vw - 250px)"
				top="-250px"
				width="500px"
				height="500px"
				background="radial-gradient(50% 50% at 50% 50%, #83D0CB 0%, rgba(131, 208, 203, 0.00) 100%)"
				zIndex="0"
				filter="blur(2px)"
				opacity={"0.1"}
				// display={["none", "block"]}
			/>

			<Stack
				direction={"column"}
				spacing={"32px"}
				textAlign={"center"}
				alignItems={"center"}
			>
				<svg
					width="147"
					height="259"
					viewBox="0 0 147 259"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g filter="url(#filter0_bd_13_834)">
						<path
							d="M50.2036 75.9127L87.4851 206.239L102.516 100.486L132.414 107.777L109.79 42.7736L142.611 49.4652L127.634 -114H4L85.5733 20.7871L54.9833 11.5464L87.4851 83.2416L50.2036 75.9127Z"
							fill="url(#paint0_linear_13_834)"
							shape-rendering="crispEdges"
						/>
						<path
							d="M55.8937 12.3437L85.4287 21.2657L86.6753 21.6423L86.001 20.5282L4.88704 -113.5H127.178L142.052 48.8409L109.89 42.2837L109.029 42.1082L109.318 42.938L131.64 107.074L102.635 100.001L102.099 99.8701L102.021 100.416L87.3204 203.845L50.9091 76.561L87.3887 83.7322L88.3414 83.9195L87.9405 83.0352L55.8937 12.3437Z"
							stroke="url(#paint1_linear_13_834)"
							shape-rendering="crispEdges"
						/>
					</g>
					<path
						d="M83.7022 159.469L74.3946 155.304L56.7128 162.055L40.0556 199.285L46.8061 216.967L56.1137 221.131"
						stroke="white"
						stroke-width="16"
					/>
					<path
						d="M73.6135 243.908L81.7538 250.049L100.498 247.425L125.06 214.864L122.436 196.12L114.296 189.979"
						stroke="white"
						stroke-width="16"
					/>
					<path
						d="M100.726 159.123L100.305 146.019"
						stroke="white"
						stroke-width="12"
					/>
					<path
						d="M107.879 175.618L123.593 166.242"
						stroke="white"
						stroke-width="12"
					/>
					<path
						d="M117.438 150.072L128.852 137.307"
						stroke="white"
						stroke-width="12"
					/>
					<rect
						x="79.8906"
						y="185.485"
						width="21.6679"
						height="21.6679"
						transform="rotate(29.8595 79.8906 185.485)"
						fill="white"
					/>
					<path
						d="M83.625 195.494L82.6091 186.271L89.397 190.311L86.813 197.653L81.4662 198.683L79.8287 202.606L79.8955 198.415L83.625 195.494Z"
						fill="#0F0F0F"
					/>
					<defs>
						<filter
							id="filter0_bd_13_834"
							x="-64.5"
							y="-182.5"
							width="275.611"
							height="457.239"
							filterUnits="userSpaceOnUse"
							color-interpolation-filters="sRGB"
						>
							<feFlood flood-opacity="0" result="BackgroundImageFix" />
							<feGaussianBlur in="BackgroundImageFix" stdDeviation="34.25" />
							<feComposite
								in2="SourceAlpha"
								operator="in"
								result="effect1_backgroundBlur_13_834"
							/>
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feOffset dy="4" />
							<feGaussianBlur stdDeviation="2" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
							/>
							<feBlend
								mode="normal"
								in2="effect1_backgroundBlur_13_834"
								result="effect2_dropShadow_13_834"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect2_dropShadow_13_834"
								result="shape"
							/>
						</filter>
						<linearGradient
							id="paint0_linear_13_834"
							x1="78.5631"
							y1="205.92"
							x2="72.5759"
							y2="-114"
							gradientUnits="userSpaceOnUse"
						>
							<stop offset="0.171171" stop-color="#83D0CB" stop-opacity="0" />
							<stop offset="1" stop-color="#83D0CB" />
						</linearGradient>
						<linearGradient
							id="paint1_linear_13_834"
							x1="78.5631"
							y1="205.92"
							x2="72.5759"
							y2="-114"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#83D0CB" stop-opacity="0" />
							<stop offset="1" stop-color="#83D0CB" />
						</linearGradient>
					</defs>
				</svg>
				<Stack
					direction={"column"}
					spacing={["16px", "12px"]}
					textAlign={"center"}
					alignItems={"center"}
				>
					<Heading
						fontWeight={700}
						style={uncageFont.style}
						textAlign={"center"}
						fontSize={["22px", "48px"]}
						textTransform={"uppercase"}
						lineHeight={"normal"}
					>
						Молниеносно обходим
						<br />
						любые блокировки
					</Heading>
					<Text fontSize={["16px"]} color={"#A7A7A7"} lineHeight={"normal"}>
						Как со стороны сервисов, так и от государственных блокировок
					</Text>
				</Stack>
			</Stack>
		</Box>
	);
}
