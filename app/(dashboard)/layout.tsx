import type { Metadata, Viewport } from "next"
import { redirect } from 'next/navigation'

import { Member } from "@/lib/auth"

import { ThemeProvider } from "@mui/material"

import UnitTheme from '@/themes/unit'

import Navbar from '@/app/navbar'



export const viewport: Viewport = {
	themeColor: "#9d000c"
}

export const metadata: Metadata = {
	title: "Dashboard | Australian Special Operations Taskforce",
	description: "Australia's premiere ARMA 3 mil sim community. Recruiting now! 17+ unless vouched for by a current member. Any experience level welcome and no DLC is required.",
	keywords: ["arma", "arma 3", "australian", "special", "operations", "taskforce", "asot", "milsim"],
	twitter: {
		images: `${process.env.NEXT_PUBLIC_BASEURL}/logo.png`
	},
	openGraph: {
		images: `${process.env.NEXT_PUBLIC_BASEURL}/logo.png`
	}
}



export default async function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {

	const user = await new Member().fetchUser()
	if (!user) return redirect('/login')


	return (
		<ThemeProvider theme={UnitTheme}>
			<div className="h-full flex flex-col">

				<Navbar />

				<div className="flex-grow">
					{children}
				</div>

			</div>
		</ThemeProvider>
	)
}