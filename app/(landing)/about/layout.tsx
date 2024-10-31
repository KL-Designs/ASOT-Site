import { Metadata, Viewport } from "next"

import * as Icon from '@mui/icons-material'
import { Button, IconButton, Typography, Divider } from '@mui/material'

import { Navigation, Banner } from './navigation'


export const viewport: Viewport = {
	themeColor: "#9d000c"
}

export const metadata: Metadata = {
	title: "About Us | Australian Special Operations Taskforce",
	description: "Australia's premiere ARMA 3 mil sim community. Recruiting now! 17+ unless vouched for by a current member. Any experience level welcome and no DLC is required.",
	keywords: ["arma", "arma 3", "australian", "special", "operations", "taskforce", "asot", "milsim"],
	twitter: {
		images: `${process.env.NEXT_PUBLIC_BASEURL}/logo.png`
	},
	openGraph: {
		images: `${process.env.NEXT_PUBLIC_BASEURL}/logo.png`
	}
}



export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className='h-full w-full'>

			<Banner />

			<div className="w-full" style={{ borderTop: '1px solid #db001d' }}>
				<div className='py-5 m-auto max-w-[1200px]'>

					<div className='px-10 py-3 w-full flex flex-row flex-wrap justify-center gap-5'>
						<Navigation />
					</div>

					{children}

				</div>
			</div>

		</div>
	)
}
