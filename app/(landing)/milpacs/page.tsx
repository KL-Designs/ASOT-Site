import { Metadata } from "next"
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import { Typography, Button } from '@mui/material'
import { VolunteerActivism } from '@mui/icons-material'

import Container from "@/components/container"
import { ContentText } from '@/components/content'

import Banner from '@/public/images/home/Rooftopincert.jpg'



export const metadata: Metadata = {
	title: "Donate | Australian Special Operations Taskforce",
}



export default function Page() {
	return (
		<Container title="MILPACS" subtitle="Any donations are appreciated and will entirely go towards covering the costs of the community." background={Banner} sx={{ bannerHeight: 'md', maxWidth: 'max-w-md' }}>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
				
			</div>

		</Container>
	)
}