import client from '@/lib/discord'
import { Metadata } from "next"
import { connection } from 'next/server'
import { redirect } from 'next/navigation'


export const metadata: Metadata = {
	title: "Configure Optional Mods - ASOT",
}



export default async function Layout({ children }: { children: React.ReactNode }) {
	await connection()

	const me = await client.fetchMe()
		.catch(() => redirect("/login"))

	return (
		<div className="h-full w-full p-10">
			<div className="flex flex-col justify-center items-center">
				{children}
			</div>
		</div>
	)
}
