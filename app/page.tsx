import Link from 'next/link'
import Image from 'next/image'

import * as Icon from '@mui/icons-material'
import { Button, IconButton, Typography, Divider } from '@mui/material'
import { ThemeProvider } from '@mui/material'

import UnitTheme from '@/themes/unit'

import { ContentWithImage } from './about/content'


import YearsOfExperience from '@/public/images/home/yearsofexperience.jpg'
import DynamicGameplay from '@/public/images/home/dynamicgameplay.jpg'



export default function Page() {
	return (
		<ThemeProvider theme={UnitTheme}>
			<div className='h-screen w-full'>

				<div
					className='h-[80vh] w-full bg-cover bg-center absolute'
					style={{
						zIndex: -1,
						backgroundImage: `url('/images/home/PHQ2.png')`,
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
								AUSTRALIAN SPECIAL OPERATIONS TASKFORCE
							</Typography>
						</div>
					</div>

				</div>


				<div className='w-full flex flex-row justify-center py-5' style={{ borderTop: '1px solid #db001d' }}>
					<div className='px-28 w-fit'>

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