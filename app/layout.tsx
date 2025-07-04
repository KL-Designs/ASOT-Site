import type { Metadata, Viewport } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"


const montserrat = Montserrat({ subsets: ["latin"] })



export const viewport: Viewport = {
	themeColor: "#9d000c"
}

export const metadata: Metadata = {
	title: "Australian Special Operations Taskforce",
	description: "Australia's premiere ARMA 3 milsim community. Recruiting now! 17+ unless vouched for by a current member. Any experience level is welcome!",
	keywords: ["arma", "arma 3", "australian", "special", "operations", "taskforce", "asot", "milsim"],
	twitter: {
		images: `${process.env.NEXT_PUBLIC_BASEURL}/meta_banner.png`
	},
	openGraph: {
		images: `${process.env.NEXT_PUBLIC_BASEURL}/meta_banner.png`
	}
}



export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className="h-full">
			<head>
				<link rel="apple-touch-icon" href="/banner.jpg" />
			</head>

			<body className={`${montserrat.className} antialiased h-full`}>
				{children}
			</body>
		</html>
	)
}
