import type { Metadata, Viewport } from "next"
import { connection } from 'next/server'
import { redirect } from 'next/navigation'

import client from "@/lib/auth"

import { ThemeProvider } from "@mui/material"

import UnitTheme from '@/themes/unit'

import Navbar from '@/app/navbar'



export default async function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {

	await connection()

	await client.fetchMe()
		.catch(() => redirect('/login'))


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