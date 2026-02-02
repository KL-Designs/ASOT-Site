import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Retarded | Australian Special Operations Taskforce",
}



export default function Layout({ children }: { children: React.ReactNode }) {

	return (
		<div className="h-full w-full">
			{children}
		</div>
	)
}
