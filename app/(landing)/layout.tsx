import type { Metadata, Viewport } from "next"
import { ThemeProvider } from "@mui/material"

import UnitTheme from '@/themes/unit'

import Navbar from '@/app/navbar'
import Footer from "./footer"



export const viewport: Viewport = {
	themeColor: "#9d000c"
}

export const metadata: Metadata = {
	title: "Australian Special Operations Taskforce",
	description: "Australia's premiere ARMA 3 mil sim community. Recruiting now! 17+ unless vouched for by a current member. Any experience level is welcome!",
	keywords: ["arma", "arma 3", "australian", "special", "operations", "taskforce", "asot", "milsim"],
	twitter: {
		images: `${process.env.NEXT_PUBLIC_BASEURL}/logo.png`
	},
	openGraph: {
		images: `${process.env.NEXT_PUBLIC_BASEURL}/logo.png`
	}
}



export default function LandingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<ThemeProvider theme={UnitTheme}>
			<div className="h-full flex flex-col">

				<Navbar />

				<div className="flex-grow">
					{children}
				</div>

				<Footer />

			</div>
		</ThemeProvider>
	)
}
