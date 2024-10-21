import Link from 'next/link'
import Image from 'next/image'

import * as Icon from '@mui/icons-material'
import { Button, IconButton, Typography, Divider } from '@mui/material'

import Content from '../content'



export default function Tab() {
	return (
		<div className='w-full flex flex-col'>

			<div className='flex flex-col sm:flex-row justify-center items-start'>
				<Content className='w-full' title='TEAMSPEAK' >
					<Typography><b>Address:</b> <a className='underline' href='ts3server://103.193.80.60'>103.193.80.60</a></Typography>
				</Content>

				<Divider className='mx-8 my-10' />

				<Content className='w-full' title='DISCORD'>
					<iframe className='w-full h-[500px]' src='https://discord.com/widget?id=744518510092484660&theme=dark' />
				</Content>
			</div>

		</div>
	)
}