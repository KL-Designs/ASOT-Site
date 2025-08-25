import { Metadata, Viewport } from "next"
import Image from 'next/image'

import { Typography } from '@mui/material'

import Banner from '@/public/images/home/snowwalk1.png'



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
	return (
		<div className='h-full w-full'>

			<div className='relative w-full h-[40vh] md:h-[60vh] flex flex-col justify-center items-center'>
				<Image src={Banner} alt='Banner' fill className='object-cover object-center blur-[2px]' loading='eager' />

				<div className='max-w-[1000px] mt-[70px] mx-10 flex flex-col justify-center gap-5'>
					<div className='flex flex-col justify-center items-center gap-3' style={{
						backgroundColor: 'rgba(0, 0, 0, 0.5)',
						backdropFilter: 'blur(10px)',
						border: '2px solid #db001d',
						padding: '15px'
					}}>
						<Typography className='hidden md:flex text-[34px] md:text-[60px]' variant='h1' align='center' fontWeight={700} fontFamily={'inherit'} letterSpacing={4}>
							GALLERY
						</Typography>
					</div>
				</div>
			</div>


			<div className="w-full" style={{ borderTop: '1px solid #db001d' }}>
				<div className='py-5 m-auto'>

					<Typography></Typography>

				</div>
			</div>

		</div>
	)
}
