import { Metadata } from "next"
import Link from 'next/link'

import { Typography } from '@mui/material'

import Content from '@/components/content'


export const metadata: Metadata = {
	title: "Contact | Australian Special Operations Taskforce"
}



export default function Tab() {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

			<Content title='TEAMSPEAK' >
				<Typography><b>Address:</b> <Link className='underline' href='ts3server://ts.asotmilsim.com'>ts.asotmilsim.com</Link></Typography>
			</Content>

			<Content title='DISCORD'>
				<iframe className='w-full h-[500px]' src='https://discord.com/widget?id=744518510092484660&theme=dark' />
			</Content>

			<Content title='FACEBOOK' >
				<Typography><Link className='underline break-words' href='https://www.facebook.com/AustralianSpecialOperationsTaskforce' target='_blank'>https://www.facebook.com/AustralianSpecialOperationsTaskforce</Link></Typography>
			</Content>

			<Content title='EMAIL' >
				<Typography><Link className='underline break-words' href='mailto:australianspecialoperationstaskforce@hotmail.com'>australianspecialoperationstaskforce@hotmail.com</Link></Typography>
			</Content>

		</div>
	)
}