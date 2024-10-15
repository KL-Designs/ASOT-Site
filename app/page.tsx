'use client'

import Link from 'next/link'
import Image from 'next/image'

import { useState } from 'react'

import * as Icon from '@mui/icons-material'
import { Button, IconButton, Typography, Divider } from '@mui/material'
import { ThemeProvider } from '@mui/material'

import UnitTheme from '@/themes/unit'


import YearsOfExperience from '@/public/images/home/yearsofexperience.jpg'
import DynamicGameplay from '@/public/images/home/dynamicgameplay.jpg'



export default function Page() {

	const [page, setPage] = useState(0)

	const Pages = [
		{
			label: 'Landing',
			title: 'AUSTRALIAN SPECIAL OPERATIONS TASKFORCE',
			background: '/images/home/PHQ2.png',
			html: <Home />
		},
		{
			label: 'About Us',
			title: 'About Us',
			background: '/images/home/training2.png',
			html: <About />
		},
		{
			label: 'Call Signs',
			title: 'Call Signs',
			background: '/images/home/training2.png',
			html: <About />
		},
		{
			label: 'Rules & Expectations',
			title: 'Rules & Expectations',
			background: '/images/home/training2.png',
			html: <Rules />
		},
		{
			label: 'FAQs',
			title: 'Frequently Asked Questions',
			background: '/images/home/training2.png',
			html: <Rules />
		}
	]


	return (
		<ThemeProvider theme={UnitTheme}>
			<div className='h-screen w-full'>

				<div
					className='h-[80vh] w-full bg-cover bg-center absolute'
					style={{
						zIndex: -1,
						backgroundImage: `url(${Pages[page].background})`,
						filter: 'blur(2px)'
					}}
				/>

				<div className='h-[80%] pt-[80px] flex flex-col justify-center items-center select-none'>

					<div className='max-w-[1000px] mx-24 flex flex-col justify-center gap-5'>
						<div style={{
							backgroundColor: 'rgba(0, 0, 0, 0.5)',
							backdropFilter: 'blur(10px)',
							border: '2px solid #db001d',
							padding: '10px'
						}}>
							<Typography variant='h2' align='center' fontWeight={700} fontFamily={'inherit'} letterSpacing={4}>
								{Pages[page].title}
							</Typography>
						</div>
					</div>

				</div>


				<div className='w-full flex flex-row justify-center py-5' style={{
					borderTop: '1px solid #db001d'
				}}>
					<div>

						<div className='w-full flex flex-row justify-center gap-x-5'>
							{Pages.map((p, i) => (
								<Button variant='contained' onClick={() => setPage(i)}>{p.label}</Button>
							))}
						</div>

						{Pages[page].html}
					</div>
				</div>


				<div className='p-8 px-28 w-full bg-[#131313] flex flex-col justify-center gap-y-2'
					style={{
						borderTop: '2px solid #db001d'
					}}>
					<Typography variant='h6' align='center' fontWeight={600}>DISCLAIMER</Typography>
					<Divider />
					<Typography variant='body1' align='center'>ARMA 2™ ARMA 3™ and Bohemia Interactive™ are trademarks of Bohemia Interactive. Australian Special Operations Taskforce is an ArmA 3 online gaming community. We are not, in any way, affiliated, associated, authorized, endorsed by or officially connected with the Australian Defense Force or the Australian Government.</Typography>
				</div>

			</div>
		</ThemeProvider>
	)
}



function Home() {
	return (
		<div className='px-28 w-fit'>
			<div className='p-8 w-full bg-[#0e0a0a] flex flex-row justify-center gap-x-14'>
				<div className='max-w-[600px] self-center'>
					<Image className='rounded-lg' src={YearsOfExperience} alt='Years of Experience' style={{
					}} />
				</div>

				<div className='max-w-[500px] flex flex-col gap-y-8 self-center'>
					<Typography variant='h4' fontWeight={500}>Years of Experience</Typography>
					<Divider color='#db001d' />
					<Typography variant='body1'>Our staff and members have a wealth of knowledge and experience behind them in running a community and of course, lots of hours within ARMA.</Typography>
					<Typography variant='body1'>We have a number of previous and currently serving members of the armed forces who have helped develop our game play into a good balance of realism and playability.</Typography>
				</div>
			</div>

			<Divider className='mx-8' />

			<div className='p-8 w-full bg-[#0e0a0a] flex flex-row justify-center gap-x-14'>
				<div className='max-w-[500px] flex flex-col gap-y-8 self-center'>
					<Typography variant='h4' align='left' fontWeight={500}>Dynamic and Varied Gameplay</Typography>
					<Divider color='#db001d' />
					<Typography variant='body1' align='left'>Our missions are created with both realism and enjoyment in mind. Our full time Zeus team ensures we experience well-balanced, challenging and dynamic missions each week.</Typography>
					<Typography variant='body1' align='left'>We use a multitude of different weapons, equipment, vehicles and aircraft to create a truly combined arms approach to game play. There’s something for everyone.</Typography>
				</div>

				<div className='max-w-[600px] self-center'>
					<Image className='rounded-lg' src={DynamicGameplay} alt='Dynamic and Varied Gameplay' style={{
					}} />
				</div>
			</div>
		</div>
	)
}


function About() {

	function Content({ title, body }: { title: string, body: string[] | React.ReactNode[] }) {
		return (
			<div className='p-8 w-full bg-[#0e0a0a] flex flex-row justify-center gap-x-14'>
				<div className='w-full flex flex-col gap-y-5 self-center'>
					<Typography variant='h4' fontWeight={500}>{title}</Typography>
					<Divider color='#db001d' />
					{body.map((text, i) => (
						<Typography key={i} variant='body1'>{text}</Typography>
					))}
				</div>
			</div>
		)
	}


	return (
		<div className='px-28 w-fit flex flex-col max-w-[1100px]'>

			<Content
				title='WHO ARE WE?'
				body={[
					"We are an ARMA 3 community that aims to achieve realistic yet enjoyable game play in what we call a semi-hardcore game style. What this means is we use real to life military tactics, procedures and structure whilst still maintaining a relaxed approach. We do not expect members to address staff by rank or ‘Sir/Ma’am’.",
					"With many years experience and tens of thousands of hours of experience throughout the group, our knowledge is vast. We have a number of previous and currently serving members of the armed forces who have helped develop our game play into a good balance of realism and playability."
				]}
			/>

			<Divider className='mx-8 my-10' />

			<Content
				title='WHO WE PLAY AS'
				body={[
					"We are based on a fictional department/corps of the Australian Defence Force (ADF). Our ORBAT, procedures and structure are created to resemble closely to the ADF. Being fictional has allowed us to create a flexible and varied ORBAT including many vehicles, air frames and weapons used by other countries. Essentially, it allows us to use what we want, when we want.",
				]}
			/>

			<Divider className='mx-8 my-10' />

			<Content
				title='WHEN DO WE RUN MISSIONS?'
				body={[
					"Our primary missions are run every Saturday and Sunday.",
					<p>1 Platoon conducts missions on Saturday nights.<br />2 Platoon conducts missions on Sunday nights.<br />3 Platoon(Support Platoon) supports both Saturday and Sunday night missions.</p>,
					<p className='underline'>When Daylight savings is not observed.</p>,
					<p><b>Load into server:</b> No later than 1800 AEST<br /><b>Op briefing:</b> 1815 AEST<br /><b>Step off:</b> 1830 AEST<br /><b>Mission end:</b> 2030 - 2130 AEST</p>,
					"We also run missions and trainings throughout the week but these are optional.",
					"If you wish to check the times for your state, you can use the link below to assist.",
					<a className='underline' href='https://www.timeanddate.com/worldclock/converter.html' target='_blank'>https://www.timeanddate.com/worldclock/converter.html</a>
				]}
			/>

			<Divider className='mx-8 my-10' />

			<Content
				title='MISSION TYPES AND STYLES'
				body={[
					"Our missions are created by our highly skilled mission creation team and lead by our dedicated Zeus team. This allows for well balanced, challenging yet enjoyable game play.",
					"Although primarily focused on the modern era ADF/military, we also run missions based throughout the ages for both our main operations and mid-week missions/events. One week it could be WWII, next could be futuristic. The same ORBAT, structure and procedures are kept relatively the same, but this allows us to play as ASOT during any period of humanity. Fictional missions are also an option."
				]}
			/>

		</div>
	)
}


function Rules() {

	function Content({ title, body }: { title: string, body: string[] | React.ReactNode[] }) {
		return (
			<div className='p-8 w-full bg-[#0e0a0a] flex flex-row justify-center gap-x-14'>
				<div className='w-full flex flex-col gap-y-5 self-center'>
					<Typography variant='h4' fontWeight={500}>{title}</Typography>
					<Divider color='#db001d' />
					{body.map((text, i) => (
						<Typography key={i} variant='body1'>{text}</Typography>
					))}
				</div>
			</div>
		)
	}


	return (
		<div className='px-28 w-fit flex flex-col max-w-[1100px]'>

			<Content
				title='SECTION 1 - GENERAL'
				body={[
					<div className='flex flex-col gap-y-2'>
						<p>- All members must treat everyone, including guests with the utmost respect.</p>
						<p>- There is strictly no bullying, harassment or toxic behaviour allowed within the community.</p>
						<p>- Members not associated with J1 are not to attempt to recruit or post recruitment content anywhere. Recommendations or invite links are acceptable to be passed onto potential new recruits.</p>
						<p>- Members not associated with J3 are not to attempt to train new members.</p>
						<p>- Be willing to assist all new members with any issues or concerns they may be experiencing.</p>
						<p>- If you’re not 15mins early, you’re late!</p>
					</div>
				]}
			/>

			<Divider className='mx-8 my-10' />

			<Content
				title='SECTION 2 - ATTENDANCE'
				body={[
					<div className='flex flex-col gap-y-2'>
						<p>- Members who are in a position within a call sign are expected to attend at least 3 of 4 weekends per month.</p>
						<p>- Reservists are expected to attend at least 2 of 4 weekends per month.</p>
						<p>- Members’ expected attendance is to be tracked in the op-attendance channel on the discord each week.</p>
						<p>- Not meeting the required level of attendance may result in removal from the community. We require keen and dedicated members.</p>
					</div>
				]}
			/>

			<Divider className='mx-8 my-10' />

			<Content
				title='SECTION 3 - TEAMSPEAK'
				body={[
					<div className='flex flex-col gap-y-2'>
						<p>- Uphold a high level of seriousness and sensibility.</p>
						<p>- Have their Teamspeak name set to the same as it would be when in-game on ArmA.</p>
						<p>- Treat new and existing Teamspeak users with respect.</p>
						<p>- Use Teamspeak permissions (Move/Ban/Kick) sensibly and not to the detriment of others.</p>
						<p>- Point out teamspeak permission errors (IE a user has move/kick abilities when they shouldn’t be able to)</p>
						<p>- Ensure that, if they have channel admin in any channel, the channels name, topic and description is not vulgar, pornographic, racist or homophobic.</p>
					</div>
				]}
			/>

			<Divider className='mx-8 my-10' />

			<Content
				title='SECTION 4 - OPERATIONS AND MISSIONS'
				body={[
					<div className='flex flex-col gap-y-2'>
						<p>- All members are to set their in-game name with the following format – “PTE Name or CAPT Name”.</p>
						<p>- Listen to the orders of those with higher rank no matter which call sign they are from.</p>
						<p>- Wait for permission/your turn to speak during briefings and debriefings.</p>
						<p>- Use radio’s or general voice for in-game/in character related chat.</p>
						<p>- Posting in global chat is forbidden apart from admin related reasons. (Eg: Need Zeus assistance or for announcements related to the mission)</p>
						<p>- Use a legitimate, unhacked version of ARMA 3.</p>
						<p>- Only use vehicles their role is permitted to use. (Eg: Only members in Hotel and Foxtrot may fly)</p>
						<p>- Do not communicate about operation related matters on any out of game communication platform whilst in operations. Eg: “I am knocked out at x location.” “Tell x about contacts over there”</p>
						<p>- Correctly use radio calls/call signs.</p>
						<p>- Do not team kill other BLUFOR players or shoot at unarmed civilians.</p>
						<p>- Ensure your mods are up to date at least 48 hours before the commencing of an operation or training.</p>
						<p>- Provide constructive and respectful feedback on your experience during an operation.</p>
						<p>- Leave FOB’s, HQ’s and the training server in a tidy state for other members to use.</p>
					</div>
				]}
			/>

			<Divider className='mx-8 my-10' />

			<Content
				title='SECTION 5 - DISCORD OR OTHER MEDIA FORUMS'
				body={[
					<div className='flex flex-col gap-y-2'>
						<p>- DO NOT post, link to or otherwise reference vulgar, racist or sexual content.</p>
						<p>- DO NOT post, link to or otherwise reference shit posting/flame baiting/troll or other bait related topics or replies.</p>
						<p>- DO NOT Spam posts or replies.</p>
						<p>- Be active and willing to assist new members with any issues or concerns they may be experiencing.</p>
						<p>- Use the correct channels for the correct content.</p>
					</div>
				]}
			/>

		</div>
	)
}