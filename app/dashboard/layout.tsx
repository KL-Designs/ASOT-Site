import './dashboard.css'

import { connection } from 'next/server'
import { redirect } from 'next/navigation'

import client from "@/lib/discord"

import { ThemeProvider } from "@mui/material"

import UnitTheme from '@/themes/unit'

import Navbar from './navbar'



export default async function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {

	await connection()

	await client.fetchMe()
		.catch(() => redirect('/login'))


	return (
		<ThemeProvider theme={UnitTheme}>
			<div className="h-full flex flex-col md:flex-row">

				<Navbar />

				<div className="flex-grow p-5">
					{children}
				</div>

			</div>
		</ThemeProvider>
	)
}