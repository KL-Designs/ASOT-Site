'use client'

import Link from 'next/link'

import { useRef, useEffect, useState } from 'react'

import { Button, Typography, Divider } from '@mui/material'

import Container from './container'
import { ContentText, ContentWithImage, ContentBanner } from './content'
import MemberCount from './membercount'


import Banner from '@/public/images/home/PHQ2.png'
import YearsOfExperience from '@/public/images/home/yearsofexperience.jpg'
import DynamicGameplay from '@/public/images/home/dynamicgameplay.jpg'
import CommunityFocussed from '@/public/images/home/VicPose2.png'
import LargestMilsim from '@/public/images/home/Rooftopincert.jpg'
import CustomFeatures from '@/public/images/home/Droneteam7.png'

import ThomoFire from '@/public/thomo/fire.png'



export default function Page() {

	const ref = useRef<HTMLDivElement>(null)
	const [keys, setKeys] = useState<string>('')
	const [thomo, setThomo] = useState<boolean>(false)

	useEffect(() => {
		if (ref.current) {
			ref.current.focus()
		}
	}, [])

	useEffect(() => {
		let phrase = keys.toLocaleLowerCase()
		if (phrase === 'id10t') window.location.href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0'
		if (phrase === 'thomo') setThomo(true)
	}, [keys])

	function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
		if (e.key === 'Shift') return
		if (e.key === 'Backspace') return setKeys('')
		setKeys(keys + e.key)
	}


	return (
		<div ref={ref} tabIndex={0} onKeyDown={handleKeyDown}>

			{!thomo ? (
				<Container title='AUSTRALIAN SPECIAL OPERATIONS TASKFORCE' background={Banner} sx={{ maxWidth: 'max-w-md', bannerHeight: 'lg' }}>
					<ContentText title='Recruiting Now!' titlePos='center'>
						<Typography align='center'>If you’re looking for a real to life and serious, yet fun approach to ARMA 3 military simulation game play, then your search is over!</Typography>
						<br />
						<Link href="https://discord.gg/asot" target='_blank'><Button className='bg-[#5d64ef]' variant='contained' size='large' fullWidth>Join our Discord</Button></Link>
					</ContentText>

					<ContentBanner title='Largest Milsim In Australia' image={LargestMilsim}>
						<div className='flex flex-col gap-1'>
							<Typography fontWeight={600} align='center'>Current Active Members</Typography>
							<Typography className='text-[20px] text-[#db001d]' variant='h3' fontWeight={600} align='center'><MemberCount /></Typography>
						</div>

						<br />
						<Typography align='center'>We are proudly the largest milsim unit not only in Australia, but the entire Oceania Region. With new recruits each week joining from across Australia, New-Zealand, Asia and more, our operations boast numbers of 50+ every week.</Typography>
					</ContentBanner>

					<Divider />

					<ContentWithImage title='Years of Experience' images={[YearsOfExperience]} imageSide='right'>
						<Typography>Our staff and members have a wealth of knowledge and experience behind them in running a community and of course, lots of hours within ARMA.</Typography>
						<br />
						<Typography>We have a number of previous and currently serving members of the armed forces who have helped develop our game play into a good balance of realism and playability.</Typography>

						<Link href='/about'><Button className='mt-5' variant='contained' fullWidth>About Us</Button></Link>
					</ContentWithImage>

					<Divider />

					<ContentWithImage title='Community Focussed' images={[CommunityFocussed]} imageSide='left'>
						<Typography>Everyone has a voice.</Typography>
						<br />
						<Typography>Although we’re a large, structured unit, everyone has the chance to provide feedback in nearly everything we do. New ideas are welcomed and we foster a community that is more like a family.</Typography>
					</ContentWithImage>

					<Divider />

					<ContentWithImage title='Custom Game Features' images={[CustomFeatures]} imageSide='right'>
						<Typography>ASOT only features.</Typography>
						<br />
						<Typography>ASOT boasts custom in and out of game features and opportunities for members to enjoy. From custom uniforms, patches and weapons such as tasers, to vehicle recovery systems that allow our engineers to recover fully destroyed vehicles and aircraft, you will find a whole new side to ARMA never seen in other units!</Typography>
						<br />
						<Typography>Along with our in-game additions, we also have a custom rank and uniform system that allows members to track their progression and achievements in the unit.</Typography>
					</ContentWithImage>

					<Divider />

					<ContentWithImage title='Dynamic and Varied Gameplay' images={[DynamicGameplay]} imageSide='left'>
						<Typography>Our missions are created with both realism and enjoyment in mind. Our full time Zeus team ensures we experience well-balanced, challenging and dynamic missions each week.</Typography>
						<br />
						<Typography>We use a multitude of different weapons, equipment, vehicles and aircraft to create a truly combined arms approach to game play. There’s something for everyone.</Typography>

						<Link href='/about/callsigns'><Button className='mt-5' variant='contained' fullWidth>Call Signs</Button></Link>
					</ContentWithImage>
				</Container>
			) : null}


			{thomo ? (
				<Container title='Enter Major General Thomas' background={ThomoFire} sx={{ maxWidth: 'max-w-md', bannerHeight: 'lg' }}>
					
					<div>
						
					</div>

				</Container>
			) : null}
		</div>
	)
}