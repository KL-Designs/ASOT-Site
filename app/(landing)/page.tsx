import Link from 'next/link'
import Image from 'next/image'

import * as Icon from '@mui/icons-material'
import { Button, IconButton, Typography, Divider } from '@mui/material'
import { ThemeProvider } from '@mui/material'

import UnitTheme from '@/themes/unit'

import { ContentText, ContentWithImage } from './about/content'
import MemberCount from './membercount'


import Banner from '@/public/images/home/PHQ2.png'
import YearsOfExperience from '@/public/images/home/yearsofexperience.jpg'
import DynamicGameplay from '@/public/images/home/dynamicgameplay.jpg'
import CommunityFocussed from '@/public/images/home/VicPose2.png'
import LargestMilsim from '@/public/images/home/Rooftopincert.jpg'
import CustomFeatures from '@/public/images/home/Droneteam7.png'



export default function Page() {

	return (
		<ThemeProvider theme={UnitTheme}>
			<div className='h-full w-full'>

				<div className='relative w-full h-[50vh] md:h-[70vh] flex flex-col justify-center items-center'>
					<Image src={Banner} alt='Banner' fill className='object-cover object-center blur-[1px]' loading='eager' />

					<div className='max-w-[1000px] mt-[70px] mx-10 flex flex-col justify-center gap-5'>
						<div style={{
							backgroundColor: 'rgba(0, 0, 0, 0.5)',
							backdropFilter: 'blur(10px)',
							border: '2px solid #db001d',
							padding: '15px'
						}}>
							<Typography className='text-[34px] md:text-[60px]' variant='h1' align='center' fontWeight={700} fontFamily={'inherit'} letterSpacing={4}>
								AUSTRALIAN SPECIAL OPERATIONS TASKFORCE
							</Typography>
						</div>
					</div>
				</div>

				<div style={{ borderTop: '1px solid #db001d' }}>
					<div className='py-5 m-auto max-w-[1200px]'>

						<ContentText title='Recruiting Now!' titlePos='center'>
							<Typography>If you’re looking for a real to life and serious, yet fun approach to ARMA 3 military simulation game play, then your search is over!</Typography>
							<br />
							<Link href="https://discord.gg/asot" target='_blank'><Button className='bg-[#5d64ef]' variant='contained' size='large' fullWidth>Join our Discord</Button></Link>
						</ContentText>

						<Divider className='mx-8' />

						<ContentWithImage title='Largest Milsim In Australia' images={[LargestMilsim]} titlePos='center' imageSide='left'>

							<div className='flex flex-col gap-1'>
								<Typography fontWeight={600} align='center'>Current Active Members</Typography>
								<Typography className='text-[20px] text-[#db001d]' variant='h3' fontWeight={600} align='center'><MemberCount /></Typography>
							</div>

							<br />
							<Typography align='center'>We are proudly the largest milsim unit not only in Australia, but the entire Oceanic Region. With new recruits each week joining from across Australia, New-Zealand, Asia and more, our operations boast numbers of 50+ every week.</Typography>
						</ContentWithImage>

						<Divider className='mx-8' />

						<ContentWithImage title='Years of Experience' images={[YearsOfExperience]} imageSide='right'>
							<Typography>Our staff and members have a wealth of knowledge and experience behind them in running a community and of course, lots of hours within ARMA.</Typography>
							<br />
							<Typography>We have a number of previous and currently serving members of the armed forces who have helped develop our game play into a good balance of realism and playability.</Typography>

							<Link href='/about'><Button className='mt-5' variant='contained' fullWidth>About Us</Button></Link>
						</ContentWithImage>

						<Divider className='mx-8' />

						<ContentWithImage title='Community Focussed' images={[CommunityFocussed]} imageSide='left'>
							<Typography>Everyone has a voice.</Typography>
							<br />
							<Typography>Although we’re a large, structured unit, everyone has the chance to provide feedback in nearly everything we do. New ideas are welcomed and we foster a community that is more like a family.</Typography>
						</ContentWithImage>

						<Divider className='mx-8' />

						<ContentWithImage title='Custom Game Features' images={[CustomFeatures]} imageSide='right'>
							<Typography>ASOT only features.</Typography>
							<br />
							<Typography>ASOT boasts custom in and out of game features and opportunities for members to enjoy. From custom uniforms, patches and weapons such as tasers, to vehicle recovery systems that allow our engineers to recover fully destroyed vehicles and aircraft, you will find a whole new side to ARMA never seen in other units!</Typography>
							<br />
							<Typography>Along with our in-game additions, we also have a custom rank and uniform system that allows members to track their progression and achievements in the unit.</Typography>
						</ContentWithImage>

						<Divider className='mx-8' />

						<ContentWithImage title='Dynamic and Varied Gameplay' images={[DynamicGameplay]} imageSide='left'>
							<Typography>Our missions are created with both realism and enjoyment in mind. Our full time Zeus team ensures we experience well-balanced, challenging and dynamic missions each week.</Typography>
							<br />
							<Typography>We use a multitude of different weapons, equipment, vehicles and aircraft to create a truly combined arms approach to game play. There’s something for everyone.</Typography>

							<Link href='/about/callsigns'><Button className='mt-5' variant='contained' fullWidth>Call Signs</Button></Link>
						</ContentWithImage>

					</div>

				</div>
			</div>
		</ThemeProvider>
	)
}