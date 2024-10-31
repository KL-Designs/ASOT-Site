import { Metadata, Viewport } from "next"
import Link from 'next/link'
import Image from 'next/image'

import * as Icon from '@mui/icons-material'
import { Button, IconButton, Typography, Divider } from '@mui/material'



export const viewport: Viewport = {
	themeColor: "#9d000c"
}

export const metadata: Metadata = {
	title: "ORBAT | Australian Special Operations Taskforce",
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
	return (
		<div className='h-full w-full'>

			<div className='relative w-full h-[40vh] md:h-[60vh] flex flex-col justify-center items-center'>
				<Image src={'/images/home/3DMA_Final2.png'} alt='Banner' fill className='object-cover object-center blur-[2px]' loading='eager' />

				<div className='max-w-[1000px] mt-[70px] mx-10 flex flex-col justify-center gap-5'>
					<div className='flex flex-col justify-center items-center gap-3' style={{
						backgroundColor: 'rgba(0, 0, 0, 0.5)',
						backdropFilter: 'blur(10px)',
						border: '2px solid #db001d',
						padding: '15px'
					}}>

						<Typography className='hidden md:flex text-[60px]' variant='h1' align='center' fontWeight={700} fontFamily={'inherit'} letterSpacing={4}>
							OUR ORBAT
						</Typography>

						<Typography className='flex md:hidden text-[34px]' variant='h1' align='center' fontWeight={700} fontFamily={'inherit'} letterSpacing={4}>
							OUR ORBAT
						</Typography>

						<Divider flexItem color='#db001d' />

						<Typography className='hidden md:flex max-w-[700px] text-[15px]' variant='h5' align='center' fontWeight={700} fontFamily={'inherit'} letterSpacing={1}>
							Our order of battle (ORBAT) is based around the current Australian Defense Force (ADF) structure with some custom changes that suit our style of game play and desires.
						</Typography>

						<Typography className='flex md:hidden max-w-[400px] text-[12px]' variant='h5' align='center' fontWeight={700} fontFamily={'inherit'} letterSpacing={1}>
							Our order of battle (ORBAT) is based around the current Australian Defense Force (ADF) structure with some custom changes that suit our style of game play and desires.
						</Typography>

					</div>
				</div>
			</div>


			<div className="w-full" style={{ borderTop: '1px solid #db001d' }}>
				<div className='py-5 px-10 m-auto'>

					<div className="m-auto mb-5 flex justify-center max-w-[1400px]">
						<Link className="w-full" href='https://docs.google.com/spreadsheets/d/1rkzQSPimBYV3UDp-CFHUfQo59yww_xbj9UTPGWBzSL0/edit?usp=sharing' target="_blank">
							<Button variant="contained" fullWidth>Open ORBAT</Button>
						</Link>
					</div>

					<div style={{ zoom: 0.7, scrollbarWidth: 'none' }} className="max-w-full overflow-scroll">
						<iframe className="m-auto w-[2000px] h-[1650px] select-none pointer-events-none cursor-pointer" src="https://docs.google.com/spreadsheets/d/1rkzQSPimBYV3UDp-CFHUfQo59yww_xbj9UTPGWBzSL0/edit?usp=sharing" />
					</div>

				</div>
			</div>

		</div>
	)
}
