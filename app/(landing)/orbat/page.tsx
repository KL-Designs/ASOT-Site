import { Metadata } from "next"
import Link from 'next/link'

import { Button } from '@mui/material'

import Container from "@/components/container"


import Banner from '@/public/images/home/3DMA_Final2.png'



export const metadata: Metadata = {
	title: "ORBAT | Australian Special Operations Taskforce"
}



export default function Page() {
	return (
		<Container
			title="OUR ORBAT"
			subtitle="Our order of battle (ORBAT) is based around the current Australian Defense Force (ADF) structure with some custom changes that suit our style of game play and desires."
			background={Banner}
			sx={{ bannerHeight: 'md', maxWidth: 'max-w-lg', padding: '2rem', gap: 'gap-5' }}
		>

			<div className="m-auto w-full flex justify-center max-w-[1330px]">
				<Link className="w-full" href='https://docs.google.com/spreadsheets/d/1rkzQSPimBYV3UDp-CFHUfQo59yww_xbj9UTPGWBzSL0/edit?usp=sharing' target="_blank">
					<Button variant="contained" fullWidth>Open ORBAT</Button>
				</Link>
			</div>

			<div style={{ zoom: 0.7, scrollbarWidth: 'none' }} className="max-w-full overflow-scroll">
				<iframe className="m-auto w-[1900px] h-[1450px] select-none pointer-events-none cursor-pointer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSblfrp4eHK6O0P73vF1vTxwEp_QkqTh52UEXPPiGSlwv6ba39UltnhAvqahEz1-hhfxC80qMsMxuJL/pubhtml?gid=275180000&amp;single=true&amp;widget=true&amp;headers=false" />
			</div>

		</Container>
	)
}
