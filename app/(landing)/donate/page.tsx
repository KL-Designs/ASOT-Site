import { Metadata } from "next"
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import { Typography, Button } from '@mui/material'
import { VolunteerActivism } from '@mui/icons-material'

import Container from "../container"
import { ContentText } from '../content'

import Banner from '@/public/images/home/Rooftopincert.jpg'



export const metadata: Metadata = {
	title: "Donate | Australian Special Operations Taskforce",
}



export default function Page() {
	return (
		<Container title="DONATE TO ASOT" subtitle="Any donations are appreciated and will entirely go towards covering the costs of the community." background={Banner} sx={{ bannerHeight: 'md', maxWidth: '1200px' }}>

			<Link href="https://www.paypal.com/donate?business=JLAN3RDW9BEAJ&no_recurring=0&item_name=Thankyou from the bottom of our hearts for supporting ASOT. Every cents goes towards ASOT costs or other features.&currency_code=AUD" target='_blank'>
				<Button className='bg-[#2270dd]' variant='contained' size='large' fullWidth startIcon={<VolunteerActivism />}>Donate with PayPal</Button>
			</Link>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
				<ContentText title="How Donations Support ASOT">
					<Typography>There are expenses for running a community such as ASOT which can add up to quite a bit over the year. In no way do we expect members to donate to the community and it is not a joining requirement.</Typography>
				</ContentText>

				<ContentText title="What is a Donation?">
					<Typography>A donation is a gift given without return consideration. This means that, you as the donator, expect no returned item to be given now or in the future.</Typography>
				</ContentText>

				<ContentText title="How does ASOT use donations?">
					<Typography>All donations given to ASOT enter an account used to pay for server related bills such as; the Virtual Server, ArmA clans, teamspeak licenses, and website domains.</Typography>
				</ContentText>

				<ContentText title="What will your donation to ASOT give you?">
					<Typography>At this stage, due to the nature of our community and Bohemia’s EULA in regards to in-game rewards, nothing will be given to you as a donator on our servers.</Typography>
				</ContentText>

				<ContentText title="Where do I donate?">
					<Typography>Donate via the secure Paypal donation button above. This will take you off our site and process your donation.</Typography>
				</ContentText>

				<ContentText title="Conditions of donating">
					<Typography>By donating money to ASOT (thomasdean92@hotmail.com) you agree that:</Typography>
					<br />
					<Typography>- Under no circumstance will your donation be disputed or refunded</Typography>
					<Typography>- Any incentive for donation can be removed, edited or added without notice</Typography>
					<Typography>- Your donation does not in any way exempt you from following the SOP’s and rules expected of other members</Typography>
					<Typography>- Your donation does not elevate any potential opportunity you may receive in the community (ASOT)</Typography>
					<Typography>- Any incentive given for your donation is a privilege and, under any circumstance, may be removed or amended at any time without notice.</Typography>
					<Typography>- Your donation is a contribution to ASOT, held on behalf of thomasdean92@hotmail.com. Money sent to this account is used for the sole purpose of paying for the server costs and operating expenses of ASOT</Typography>
				</ContentText>
			</div>

		</Container>
	)
}



function UnitCard({ children, name, branch, region, style, image }: { children: React.ReactNode, name: string, branch: string, region: string, style: string, image: StaticImageData }) {
	return (
		<div className="flex flex-col gap-8">

			<div className="relative w-full h-[200px]">
				<Image src={image} alt={name} fill className="object-center object-contain" loading="eager" />
			</div>

			<Typography variant="h5" fontWeight={700} align="center">{name}</Typography>

			<div>
				<Typography variant="body1" align="center"><b>Branch:</b> {branch}</Typography>
				<Typography variant="body1" align="center"><b>Region:</b> {region}</Typography>
				<Typography variant="body1" align="center"><b>Gameplay Style:</b> {style}</Typography>
			</div>

			<div className="flex flex-col gap-4">
				{children}
			</div>

		</div>
	)
}