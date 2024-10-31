import Link from 'next/link'
import Image from 'next/image'

import * as Icon from '@mui/icons-material'
import { Button, IconButton, Typography, Divider } from '@mui/material'

import Content from '../content'



export default function Tab() {
	return (
		<div className='w-full grid grid-cols-1 md:grid-cols-2'>

			<Content title='TEAMSPEAK' >
				<Typography><b>Address:</b> <Link className='underline' href='ts3server://103.193.80.60'>103.193.80.60</Link></Typography>
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