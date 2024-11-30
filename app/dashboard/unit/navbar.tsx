'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Button, Divider, Typography } from "@mui/material"
import { MilitaryTech, Work, Hive, Token, CardMembership, EmojiEvents } from '@mui/icons-material'



const Links = [
    { title: 'Ranks', icon: <MilitaryTech />, href: '/dashboard/unit/ranks' },
    { title: 'Roles', icon: <Work />, href: '/dashboard/unit/roles' },
    { title: 'Sections', icon: <Hive />, href: '/dashboard/unit/sections' },
    { title: 'Platoons', icon: <Token />, href: '/dashboard/unit/platoons' },
    { title: 'Certifications', icon: <CardMembership />, href: '/dashboard/unit/certifications' },
    { title: 'Awards', icon: <EmojiEvents />, href: '/dashboard/unit/awards' },
]


export default function Navbar() {

    const pathname = usePathname()
    const page = Links.find(link => link.href === pathname)


    return (
        <>
            <Typography variant='h4'>{page?.title} | Unit Management</Typography>

            <Divider />

            <div className="flex gap-5 justify-center flex-wrap">
                {Links.map((link, i) => (
                    <Link className="flex-grow" key={i} href={link.href}>
                        <Button variant="contained" startIcon={link.icon} color={page?.href === link.href ? 'primary' : 'inherit'} fullWidth>{link.title}</Button>
                    </Link>
                ))}
            </div>
        </>
    )
}