'use client'

import Link from 'next/link'
import Image from 'next/image'

import { useRef, useEffect, useState } from 'react'

import { Button, Typography, Divider } from '@mui/material'

import Container from './container'
import { ContentText, ContentWithImage, ContentBanner } from './content'
import MemberCount from './membercount'


import LargeLogo from '@/public/ASOT.svg'
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
		const phrase = keys.toLocaleLowerCase()
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
				<>
					<div className='h-banner-lg-md w-full relative'>
						<Image src={Banner} alt='Banner' fill className='object-cover object-center blur-[2px]' />

						<div className='absolute w-full h-full bg-black opacity-10'/>

						<div className='h-full pt-[250px] pb-[150px] px-[30px] flex flex-col justify-center'>
							<div className='relative h-full w-full max-h-[400px] min-h-[200px]'>
								<Image src={LargeLogo} alt='Large Logo' fill className='object-contain object-center' />
							</div>
						</div>

					</div>

					<div style={{ borderTop: '1px solid #db001d' }}>
						<div className={'m-auto flex flex-col gap-10 max-w-md'} style={{ padding: '2rem 2rem' }}>

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

						</div>
					</div>
				</>
			) : null}


			{thomo ? (
				<Container title='Enter Lieutenant General Thomas' background={ThomoFire} sx={{ maxWidth: 'max-w-xl', bannerHeight: 'lg' }}>

					<div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
						{[
							'tred.png',
							'meme.gif',
							'gifPerms.gif',
							'mci.gif',
							'mci2.gif',
							'meme_1.gif',
							'meme_2.gif',
							'meme_3.gif',
							'meme_4.gif',
							'meme_5.gif',
							'meme_6.gif',
							'meme_7.gif',
							'meme_8.gif',
							'meme_9.gif',
							'meme_10.gif',
							'meme.gif',
							'simpsons.gif',
							'image.png',
						].map((image, i) => (
							<img key={i} src={`/thomo/${image}`} className='m-auto' />
						))}
					</div>

				</Container>
			) : null}
		</div>
	)
}