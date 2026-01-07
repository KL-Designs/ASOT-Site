'use client'

import { usePathname } from 'next/navigation'
import { StaticImageData } from 'next/image'
import Link from "next/link"

import { Button } from "@mui/material"

import Container from "@/components/container"


import ImgAbout from '@/public/images/home/training2.png'
import ImgCallsigns from '@/public/images/home/Gopro3.png'
import ImgContact from '@/public/images/home/Mike1440.png'
import ImgRules from '@/public/images/home/ADFField1.png'
import ImgFAQ from '@/public/images/home/SPEAR_OVERCAST_Final.png'
import ImgValues from '@/public/images/home/1122.png'



const Pages: { href: string, title: string, background: StaticImageData, subtitle?: string }[] = [
	{
		href: '/about',
		title: 'ABOUT US',
		background: ImgAbout,
	},
	{
		href: '/about/callsigns',
		title: 'CALL SIGNS',
		subtitle: 'Here you can see the current call signs we have and some basic information on how they are utilised in missions.',
		background: ImgCallsigns,
	},
	{
		href: '/about/contact',
		title: 'CONTACT US',
		subtitle: 'If you have any questions, queries, want to join or simply want to say hello, you can contact us any way you like. The best way is generally through our Discord but we are also active in all our media outlets.',
		background: ImgContact,
	},
	{
		href: '/about/rules',
		title: 'RULES & EXPECTATIONS',
		subtitle: 'These are some of the more basic rules and expectations we have for all members within the community. A more in depth version will be provided upon recruitment.',
		background: ImgRules,
	},
	{
		href: '/about/values',
		title: 'PRINCIPLES & VALUES',
		background: ImgValues,
	},
	{
		href: '/about/faq',
		title: 'FAQ',
		subtitle: 'If you cannot find the answer to your questions, please feel free to contact us to seek clarification.',
		background: ImgFAQ,
	}
]



export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {

	const pathname = usePathname()
    const page = Pages.find(page => page.href === pathname)

	return (
		<Container title={page?.title} subtitle={page?.subtitle} background={page?.background} sx={{ bannerHeight: 'md', maxWidth: 'max-w-md' }}>

			<div className='w-full flex flex-row flex-wrap justify-center gap-5'>
				{Pages.map((p, i) => (
					<Link className='flex-grow' key={i} href={p.href}>
						<Button fullWidth variant='contained' color={page?.href === p.href ? 'primary' : 'secondary'}>{p.title}</Button>
					</Link>
				))}
			</div>

			{children}

		</Container>
	)
}
