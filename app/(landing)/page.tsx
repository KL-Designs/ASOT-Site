'use client'

import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

import { useRef, useEffect, useState } from 'react'

import { Button, Typography, Divider } from '@mui/material'
import { ChevronRight } from '@mui/icons-material'

import { ContentText, ContentWithImage, ContentBanner } from '@/components/content'


import LargeLogo from '@/public/ASOT.svg'
import Banner from '@/public/images/home/PHQ2.png'
import YearsOfExperience from '@/public/images/home/yearsofexperience.jpg'
import DynamicGameplay from '@/public/images/home/dynamicgameplay.jpg'
import CommunityFocussed from '@/public/images/home/VicPose2.png'
import LargestMilsim from '@/public/images/home/Rooftopincert.jpg'
import CustomFeatures from '@/public/images/home/Droneteam7.png'

import SPEAR_OVERCAST_Final from '@/public/images/home/SPEAR_OVERCAST_Final.png'
import Mike1440 from '@/public/images/home/Mike1440.png'
import Droneteam7 from '@/public/images/home/Droneteam7.png'



export default function Page() {

	const ref = useRef<HTMLDivElement>(null)
	const [keys, setKeys] = useState<string>('')

	useEffect(() => {
		if (ref.current) {
			ref.current.focus({ preventScroll: true })
		}
	}, [])

	useEffect(() => {
		const phrase = keys.toLocaleLowerCase()
		if (phrase === 'id10t') window.location.href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0'
	}, [keys])

	function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
		if (e.key === 'Shift') return
		if (e.key === 'Backspace') return setKeys('')
		setKeys(keys + e.key)
	}


	return (
		<>

			<div
				ref={ref}
				className='h-[50vh] md:h-[80vh] w-full relative my-[-5px]'
				style={{ zIndex: -1 }}
				onKeyDown={handleKeyDown}
				tabIndex={0}
			>
				<Image src={Banner} alt='Banner' fill className='object-cover object-center blur-[2px]' />

				<div className='absolute w-full h-full bg-black opacity-10' />

				<div className='h-full py-[100px] px-[50px] flex flex-col justify-center'>
					<div className='relative h-full w-full max-h-[350px] min-h-[200px]'>
						<Image src={LargeLogo} alt='Large Logo' fill className='object-contain object-center' />
					</div>
				</div>

			</div>

			<div style={{
				borderTop: '1px solid var(--red)',
				background: 'rgb(10,10,10)',
				zIndex: 0
			}}>
				<div className={'m-auto flex flex-col gap-10 max-w-[1400px]'} style={{ padding: '3rem 2rem' }}>

					{/* <ContentText title='Recruiting Now!' titlePos='center'>
						<Typography align='center'>If you’re looking for a real to life and serious, yet fun approach to ARMA 3 military simulation game play, then your search is over!</Typography>
						<br />
						<Link href="https://discord.gg/asot" target='_blank'><Button className='bg-[#5d64ef]' variant='contained' size='large' fullWidth>Join our Discord</Button></Link>
					</ContentText> */}

					<ContentBanner title='The Largest Milsim In Australia' image={LargestMilsim}>
						<div className='flex flex-col gap-1'>
							<Typography fontWeight={600} align='center'>Current Active Members</Typography>
							<Typography className='text-[20px] text-[var(--red)]' variant='h3' fontWeight={600} align='center'><MemberCount /></Typography>
						</div>

						<br />
						<Typography align='center'>We are proudly the largest milsim unit not only in Australia, but the entire Oceania Region. With new recruits each week joining from across Australia, New-Zealand, Asia and more, our operations boast numbers of 50+ every week.</Typography>
					</ContentBanner>

					<Divider style={{ backgroundColor: 'var(--grey)' }} />

					<div className='flex flex-col gap-[2rem]'>
						<h2 className='text-center' style={{ fontSize: '4rem', fontWeight: 600, lineHeight: '3.5rem', letterSpacing: '0.1rem' }}>JOIN OUR PLATOONS</h2>

						<div className='h-full min-h-[650px] flex flex-wrap gap-[2rem]'>
							<PlatoonCard title='1-1' image={Droneteam7} link=''>
								1-1 is our primary infantry platoon, providing the main fighting
								force for the task force. They utilize a variety of weapons, vehicles,
								and equipment to enhance the task force's overall capability. The
								platoon consists of three 8-man sections and a 4-man platoon
								headquarters. responsible for delivering effective ground combat
								power.
							</PlatoonCard>

							<PlatoonCard title='1-2' image={SPEAR_OVERCAST_Final} link=''>
								1-2 mirrors the structure and role of 1-1, serving as a core infantry
								platoon in ASOT. They are equipped with diverse combat assets and
								are responsible for tactical operations. Like 1-1, they consist of three
								8-man sections and a 4-man platoon headquarters to lead the
								platoon in all ground operations.
							</PlatoonCard>

							<PlatoonCard title='1-3' image={Mike1440} link=''>
								1-3 Platoon is ASOT's support platoon, providing essential
								capabilities such as combat engineering, indirect fire support, rotary
								air support, medical aid, and armoured cavalry. Their specialized
								teams handle explosive disposal, artillery, airlift, casualty evacuation,
								and heavy firepower, ensuring operational flexibility. With these skills,
								1-3 enhances mission success by offering crucial logistics, firepower,
								and medical support on the battlefield.
							</PlatoonCard>
						</div>
					</div>

					<Divider style={{ backgroundColor: 'var(--grey)' }} />

					<ContentWithImage title='Years of Experience' images={[YearsOfExperience]} imageSide='right'>
						<Typography>Our staff and members have a wealth of knowledge and experience behind them in running a community and of course, lots of hours within ARMA.</Typography>
						<br />
						<Typography>We have a number of previous and currently serving members of the armed forces who have helped develop our game play into a good balance of realism and playability.</Typography>

						<Link href='/about'><Button className='mt-5' variant='contained' fullWidth style={{backgroundColor: 'var(--primary)'}}>About Us</Button></Link>
					</ContentWithImage>

					<Divider style={{ backgroundColor: 'var(--grey)' }} />

					<ContentWithImage title='Community Focussed' images={[CommunityFocussed]} imageSide='left'>
						<Typography>Everyone has a voice.</Typography>
						<br />
						<Typography>Although we’re a large, structured unit, everyone has the chance to provide feedback in nearly everything we do. New ideas are welcomed and we foster a community that is more like a family.</Typography>
					</ContentWithImage>

					<Divider style={{ backgroundColor: 'var(--grey)' }} />

					<ContentWithImage title='Custom Game Features' images={[CustomFeatures]} imageSide='right'>
						<Typography>ASOT only features.</Typography>
						<br />
						<Typography>ASOT boasts custom in and out of game features and opportunities for members to enjoy. From custom uniforms, patches and weapons such as tasers, to vehicle recovery systems that allow our engineers to recover fully destroyed vehicles and aircraft, you will find a whole new side to ARMA never seen in other units!</Typography>
						<br />
						<Typography>Along with our in-game additions, we also have a custom rank and uniform system that allows members to track their progression and achievements in the unit.</Typography>
					</ContentWithImage>

					<Divider style={{ backgroundColor: 'var(--grey)' }} />

					<ContentWithImage title='Dynamic and Varied Gameplay' images={[DynamicGameplay]} imageSide='left'>
						<Typography>Our missions are created with both realism and enjoyment in mind. Our full time Zeus team ensures we experience well-balanced, challenging and dynamic missions each week.</Typography>
						<br />
						<Typography>We use a multitude of different weapons, equipment, vehicles and aircraft to create a truly combined arms approach to game play. There’s something for everyone.</Typography>

						<Link href='/about/callsigns'><Button className='mt-5' variant='contained' fullWidth style={{backgroundColor: 'var(--primary)'}}>Call Signs</Button></Link>
					</ContentWithImage>

				</div>
			</div>
		</>
	)
}


function PlatoonCard({ children, title, link, image }: { children: React.ReactNode, title: string, link: string, image: StaticImageData }) {
	return (
		<div className='relative flex-grow overflow-hidden' style={{ width: 'clamp(320px, 340px, 400px)' }}>

			<Image src={image} alt='PlatoonCard' fill className='object-cover object-center blur-[1px]' />
			<div className='absolute w-full h-full bg-black opacity-20' />

			<div className='h-full relative flex flex-col justify-between p-10 overflow-hidden' style={{ zIndex: 1 }}>
				<h2
					className='text-center'
					style={{
						fontSize: '12rem',
						fontWeight: '700'
					}}
				>
					{title}
				</h2>

				<div className='flex flex-col items-center gap-8'>
					<p className='text-center'>{children}</p>
					<div className='pButton'>
						<p>LEARN MORE</p>
						<ChevronRight />
					</div>
				</div>
			</div>
		</div>
	)
}


function MemberCount() {

	const [count, setCount] = useState<number | null>(null)

	useEffect(() => {
		fetch('/api/membercount')
			.then(res => res.json())
			.then(data => setCount(data.count))
	})


	return (
		<>{count || '---'}</>
	)
}