import type { Metadata, Viewport } from "next"
import { ThemeProvider } from "@mui/material"

import UnitTheme from '@/themes/unit'

import Navbar from '@/app/navbar'
import Footer from "./footer"



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
