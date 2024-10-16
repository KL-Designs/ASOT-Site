import { Metadata, Viewport } from "next"

import * as Icon from '@mui/icons-material'
import { Button, IconButton, Typography, Divider } from '@mui/material'
import { ThemeProvider } from '@mui/material'

import UnitTheme from '@/themes/unit'

import { Navigation, Banner } from './navigation'


export const viewport: Viewport = {
	themeColor: "#9d000c"
}

export const metadata: Metadata = {
	title: "Australian Special Operations Taskforce",
	description: "Australia's premiere ARMA 3 mil sim community. Recruiting now! 17+ unless vouched for by a current member. Any experience level welcome and no DLC is required.",
	keywords: ["arma", "arma 3", "australian", "special", "operations", "taskforce", "asot", "milsim"],
	twitter: {
		images: '/logo.png'
	},
	openGraph: {
		images: '/logo.png'
	}
}



export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<ThemeProvider theme={UnitTheme}>
			<div className='h-screen w-full'>

				<Banner />

				<div className='w-full flex flex-row justify-center py-5' style={{
					borderTop: '1px solid #db001d'
				}}>
					<div>

						<div className='w-full flex flex-row justify-center gap-x-5'>
							<Navigation />
						</div>

						{children}

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
