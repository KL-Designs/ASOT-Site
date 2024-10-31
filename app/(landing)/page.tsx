import Link from 'next/link'
import Image from 'next/image'

import * as Icon from '@mui/icons-material'
import { Button, IconButton, Typography, Divider } from '@mui/material'
import { ThemeProvider } from '@mui/material'

import UnitTheme from '@/themes/unit'

import { ContentWithImage } from './about/content'


import Banner from '@/public/images/home/PHQ2.png'
import YearsOfExperience from '@/public/images/home/yearsofexperience.jpg'
import DynamicGameplay from '@/public/images/home/dynamicgameplay.jpg'



export default function Page() {
	return (
		<ThemeProvider theme={UnitTheme}>
			<div className='h-full w-full'>

				<div className='relative w-full h-[60vh] md:h-[80vh] flex flex-col justify-center items-center'>
					<Image src={Banner} alt='Banner' fill className='object-cover object-center blur-[2px]' loading='eager' />

					<div className='max-w-[1000px] mt-[70px] mx-10 flex flex-col justify-center gap-5'>
						<div style={{
							backgroundColor: 'rgba(0, 0, 0, 0.5)',
							backdropFilter: 'blur(10px)',
							border: '2px solid #db001d',
							padding: '15px'
						}}>
							<Typography className='hidden md:flex text-[60px]' variant='h1' align='center' fontWeight={700} fontFamily={'inherit'} letterSpacing={4}>
								AUSTRALIAN SPECIAL OPERATIONS TASKFORCE
							</Typography>

							<Typography className='flex md:hidden text-[34px]' variant='h1' align='center' fontWeight={700} fontFamily={'inherit'} letterSpacing={4}>
								AUSTRALIAN SPECIAL OPERATIONS TASKFORCE
							</Typography>
						</div>
					</div>
				</div>

				<div className='py-5 m-auto max-w-[1200px]' style={{ borderTop: '1px solid #db001d' }}>

					<ContentWithImage title='Years of Experience' images={[YearsOfExperience]}>
						<Typography>Our staff and members have a wealth of knowledge and experience behind them in running a community and of course, lots of hours within ARMA.</Typography>
						<br />
						<Typography>We have a number of previous and currently serving members of the armed forces who have helped develop our game play into a good balance of realism and playability.</Typography>

						<Link href='/about'><Button className='mt-5' variant='contained' fullWidth>About Us</Button></Link>
					</ContentWithImage>

					<Divider className='mx-8' />

					<ContentWithImage title='Dynamic and Varied Gameplay' images={[DynamicGameplay]} imageSide='right'>
						<Typography>Our missions are created with both realism and enjoyment in mind. Our full time Zeus team ensures we experience well-balanced, challenging and dynamic missions each week.</Typography>
						<br />
						<Typography>We use a multitude of different weapons, equipment, vehicles and aircraft to create a truly combined arms approach to game play. There’s something for everyone.</Typography>

						<Link href='/about/callsigns'><Button className='mt-5' variant='contained' fullWidth>Call Signs</Button></Link>
					</ContentWithImage>

				</div>

			</div>
		</ThemeProvider>
	)
}