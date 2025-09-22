import { Metadata, Viewport } from "next"
import Image from 'next/image'

import { Typography } from '@mui/material'
import Container from '@/components/container'

import Banner from '@/public/images/home/snowwalk1.png'


export const viewport: Viewport = {
	themeColor: "#9d000c"
}

export const metadata: Metadata = {
	title: "Gallery | Australian Special Operations Taskforce",
	description: "Australia's premiere ARMA 3 mil sim community. Recruiting now! 17+ unless vouched for by a current member. Any experience level welcome and no DLC is required.",
	keywords: ["arma", "arma 3", "australian", "special", "operations", "taskforce", "asot", "milsim"],
	twitter: {
		images: `${process.env.NEXT_PUBLIC_BASEURL}/logo.png`
	},
	openGraph: {
		images: `${process.env.NEXT_PUBLIC_BASEURL}/logo.png`
	}
}



export default function Page({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<Container title='GALLERY' background={Banner} sx={{ bannerHeight: 'sm', maxWidth: '100%', padding: '0px' }}>
			<div className='py-5 m-auto px-10'>

				{children}

			</div>
		</Container>
	)
}