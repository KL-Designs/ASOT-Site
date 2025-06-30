import { ThemeProvider } from "@mui/material"

import UnitTheme from '@/themes/unit'

import Navbar from '@/app/navbar'
import Footer from "./footer"



export default function LandingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<ThemeProvider theme={UnitTheme}>
			<div className="h-full flex flex-col">

				<div style={{ zIndex: 1 }}>
					<Navbar />
				</div>

				<div className="flex-grow" style={{ zIndex: 0 }}>
					{children}
				</div>

				<Footer />

			</div>
		</ThemeProvider>
	)
}
