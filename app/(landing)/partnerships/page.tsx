import { Metadata, Viewport } from "next"
import Link from 'next/link'
import Image from 'next/image'

import * as Icon from '@mui/icons-material'
import { Button, IconButton, Typography, Divider } from '@mui/material'

import { ContentText } from '../about/content'



export const viewport: Viewport = {
	themeColor: "#9d000c"
}

export const metadata: Metadata = {
	title: "Gallery | Australian Special Operations Taskforce",
	description: "Australia's premiere ARMA 3 mil sim community. Recruiting now! 17+ unless vouched for by a current member. Any experience level welcome and no DLC is required.",
	keywords: ["arma", "arma 3", "australian", "special", "operations", "taskforce", "asot", "milsim"],
	twitter: {
		images: `${process.env.NEXT_PUBLIC_BASEURL}/logo.png`
	},
	openGraph: {
		images: `${process.env.NEXT_PUBLIC_BASEURL}/logo.png`
	}
}



export default function Page() {


	function UnitCard({ children, name, branch, region, style, image }: { children: React.ReactNode, name: string, branch: string, region: string, style: string, image: string }) {
		return (
			<div className="flex flex-col gap-8">

				<div className="relative w-full h-[200px]">
					<Image src={image} alt={name} fill className="object-center object-contain" loading="eager" />
				</div>

				<Typography variant="h5" fontWeight={700} align="center">{name}</Typography>

				<div>
					<Typography variant="body1" align="center"><b>Branch:</b> {branch}</Typography>
					<Typography variant="body1" align="center"><b>Region:</b> {region}</Typography>
					<Typography variant="body1" align="center"><b>Gameplay Style:</b> {style}</Typography>
				</div>

				<div className="flex flex-col gap-4">
					{children}
				</div>

			</div>
		)
	}


	return (
		<div className='h-full w-full'>

			<div className='relative w-full h-[40vh] md:h-[60vh] flex flex-col justify-center items-center'>
				<Image src={'/images/home/snowwalk1.png'} alt='Banner' fill className='object-cover object-center blur-[2px]' loading='eager' />

				<div className='max-w-[1000px] mt-[70px] mx-10 flex flex-col justify-center gap-5'>
					<div className='flex flex-col justify-center items-center gap-3' style={{
						backgroundColor: 'rgba(0, 0, 0, 0.5)',
						backdropFilter: 'blur(10px)',
						border: '2px solid #db001d',
						padding: '15px'
					}}>

						<Typography className='hidden md:flex text-[60px]' variant='h1' align='center' fontWeight={700} fontFamily={'inherit'} letterSpacing={4}>
							PARTNERSHIPS
						</Typography>

						<Typography className='flex md:hidden text-[34px]' variant='h1' align='center' fontWeight={700} fontFamily={'inherit'} letterSpacing={4}>
							PARTNERSHIPS
						</Typography>

					</div>
				</div>
			</div>


			<div className="p-5 m-auto max-w-[1500px]" style={{ borderTop: '1px solid #db001d' }}>

				<div className="m-auto max-w-[1200px]">
					<ContentText title="It's About Community">
						<Typography>ASOT prides itself on being open and willing to work with and have relations with like-minded gaming communities and ARMA units.</Typography>
						<br />
						<Typography>With a lot of our members being a part of ARMA for a long time, we have built some wonderful and long lasting friendships not only between each other, but other communities and units.</Typography>
						<br />
						<Typography>With continued growth comes new and continued relations with other communities. ASOT is proud to announce our new page showing our beloved long-term relations, as well as celebrating newly created ones.</Typography>
					</ContentText>

					<ContentText title="Sister Arma Units">
						<Typography>ASOT has some long standing relations with fellow ARMA units which we believe is important to create and maintain to allow everyone to enjoy the best online ARMA experience possible.</Typography>
						<br />
						<Typography>This is our way of acknowledging and showing our appreciation to those fellow units as we continue with healthy, like-minded relationships.</Typography>
					</ContentText>
				</div>

				<br />

				<div className="px-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">
					<UnitCard name="Australia Pacific Combined Arms (APCA)" branch="Australian Defence Force" region="Oceania" style="Casual Realism" image="/images/partners/APCA.png">
						<Typography align="center">APCA and ASOT have a long and strong standing relationship that has continued to grow over the years. We have similar ideas on how ARMA operations should be run but with the execution being unique between the two units, APCA is one of the strongest relations that ASOT holds with another unit.</Typography>
						<Typography align="center">Their attitude, behaviour and warm welcoming nature means that we see a long lasting relationship between the two units and a great place for like minded ARMA players looking for a great home. APCA is a unit we can proudly recommend.</Typography>
					</UnitCard>

					<UnitCard name="7th Cavalry Gaming" branch="Army" region="United States of America" style="Slow Tactful" image="/images/partners/7Cav.png">
						<Typography align="center">7 Cav and ASOT have a long standing partnership more based around sharing of admin, website and community management idea sharing. 7 Cav motivated ASOT to create our own version of the MILPAC system which is now a treasured aspect of the unit. Along with sharing of admin and management ideas, 7 Cav’s assistance has helped guide ASOT into the unit it is today.</Typography>
						<Typography align="center">Operating since 2002, 7 Cav is one of the longest standing US gaming communities and has an impressive history with ARMA 3. 7 Cav operates as a combined armed Battalion with a wide variety of roles, trainings and options for it’s members.</Typography>
					</UnitCard>

					<UnitCard name="2nd Airmobile" branch="Airmobile" region="Oceania" style="Semi Realistic" image="/images/partners/2AM.png">
						<Typography align="center">2nd Airmobile is a relatively new unit but has long standing relationships with a number of ASOT members and the community. With 2nd Airmobile being a newly created unit, ASOT aims to continue building bonds and joining in on events and missions into the future.</Typography>
						<Typography align="center">As their unit name eludes to, 2nd Airmobile is based around an air mobile company which aims to provide a challenging and immersive experience for all members. They focus on realistic tactics, communication, and teamwork. They also hold strong ethics and positive attitude as key values within their community which ASOT can closely relate to.</Typography>
					</UnitCard>
				</div>

			</div>

		</div>
	)
}
