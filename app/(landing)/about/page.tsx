import { Metadata } from "next"
import Link from 'next/link'

import { Typography, Divider } from '@mui/material'

import Content from '../content'


export const metadata: Metadata = {
	title: "About Us | Australian Special Operations Taskforce"
}



export default function Tab() {

	const localTime = new Date()
	localTime.setHours(18, 0, 0, 0)
	
	const formattedTime = new Intl.DateTimeFormat('en-AU', {
		hour: '2-digit',
		minute: '2-digit',
		timeZone: 'Australia/Sydney',
		timeZoneName: 'short',
	}).format(localTime)

	const Times = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' })

	return (
		<>
			<Content title='WHO ARE WE?'>
				<Typography>We are an ARMA 3 community that aims to achieve realistic yet enjoyable game play in what we call a semi-hardcore game style. What this means is we use real to life military tactics, procedures and structure whilst still maintaining a relaxed approach. We do not expect members to address staff by rank or ‘Sir/Ma’am’.</Typography>
				<br />
				<Typography>With many years experience and tens of thousands of hours of experience throughout the group, our knowledge is vast. We have a number of previous and currently serving members of the armed forces who have helped develop our game play into a good balance of realism and playability.</Typography>
			</Content>

			<Divider />

			<Content title='WHO WE PLAY AS'>
				<Typography>We are based on a fictional department/corps of the Australian Defence Force (ADF). Our ORBAT, procedures and structure are created to resemble closely to the ADF. Being fictional has allowed us to create a flexible and varied ORBAT including many vehicles, air frames and weapons used by other countries. Essentially, it allows us to use what we want, when we want.</Typography>
			</Content>

			<Divider />

			<Content title='WHEN DO WE RUN MISSIONS?'>
				<Typography>Our primary missions are run every Saturday and Sunday.</Typography>
				<br />
				<Typography>1 Platoon conducts missions on Saturday nights.</Typography>
				<Typography>2 Platoon conducts missions on Sunday nights.</Typography>
				<Typography>3 Platoon(Support Platoon) supports both Saturday and Sunday night missions.</Typography>
				<br />
				<Typography className='underline'>When Daylight savings is not observed.</Typography>
				<br />
				<Typography><b>Load into server:</b> No later than 1800 AEST</Typography>
				<Typography><b>Op briefing:</b> 1815 AEST</Typography>
				<Typography><b>Step off:</b> 1830 AEST</Typography>
				<Typography><b>Mission end:</b> 2030 - 2130 AEST</Typography>
				<br />
				<Typography>We also run missions and trainings throughout the week but these are optional.</Typography>
				<br />
				<Typography>If you wish to check the times for your state, you can use the link below to assist.</Typography>
				<br />
				<Typography><Link className='underline break-words' href='https://www.timeanddate.com/worldclock/converter.html' target='_blank'>https://www.timeanddate.com/worldclock/converter.html</Link></Typography>
			</Content>

			<Divider />

			<Content title='MISSION TYPES AND STYLES'>
				<Typography>Our missions are created by our highly skilled mission creation team and lead by our dedicated Zeus team. This allows for well balanced, challenging yet enjoyable game play.</Typography>
				<br />
				<Typography>Although primarily focused on the modern era ADF/military, we also run missions based throughout the ages for both our main operations and mid-week missions/events. One week it could be WWII, next could be futuristic. The same ORBAT, structure and procedures are kept relatively the same, but this allows us to play as ASOT during any period of humanity. Fictional missions are also an option.</Typography>
			</Content>
		</>
	)
}