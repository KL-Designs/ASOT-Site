import './dashboard.css'

import { connection } from 'next/server'
import { redirect } from 'next/navigation'

import client from "@/lib/discord"

import { ThemeProvider } from "@mui/material"
import { Person, MilitaryTech, ManageAccounts, Collections } from '@mui/icons-material'

import UnitTheme from '@/themes/unit'

import Navbar from './navbar'



export default async function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {

	await connection()

	const member = await client.fetchMe()
		.catch(() => redirect('/login'))


	const Links = [
		{ name: 'My Account', href: '/dashboard/account', icon: <Person />, authorized: true },
		{ name: 'Member Manager', href: '/dashboard/members', icon: <ManageAccounts />, authorized: member.hasRoles(['All Staff']) },
		{ name: 'Gallery Manager', href: '/dashboard/gallery', icon: <Collections />, authorized: member.hasRoles(['All Staff']) },
		{ name: 'Unit Manager', href: '/dashboard/unit', icon: <MilitaryTech />, authorized: member.hasRoles(['J4-Administration']) },
	]


	return (
		<ThemeProvider theme={UnitTheme}>
			<div className="h-full flex flex-col md:flex-row">

				<Navbar links={Links} />

				<div className="flex-grow p-5">
					{children}
				</div>

			</div>
		</ThemeProvider>
	)
}