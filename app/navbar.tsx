'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { useState, useEffect } from 'react'

import { Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material'
import { Home, School, Group, MilitaryTech, Collections, Handshake, Support, VolunteerActivism, Menu, AccountCircle } from '@mui/icons-material'


import Navigation from '@/styles/navigation.module.css'
import Avatar from '@/components/member/avatar'

import Logo from '@/public/logo.png'
import Honeycomb from '@/public/designs/honeycombs.svg'



export default function Navbar() {

    const [sideMenuOpen, setSideMenuOpen] = useState(false)
    const [user, setUser] = useState<User | null>(null)

    const Links = [
        { name: 'Home', href: '/', icon: <Home /> },
        { name: 'About Us', href: '/about', icon: <School />, subLinks: ['/callsigns', '/contact', '/rules', '/faq'] },
        { name: 'ORBAT', href: '/orbat', icon: <Group /> },
        { name: 'MILPACS', href: 'https://www.australianspecialoperationstaskforce.com/milpacs', icon: <MilitaryTech /> },
        { name: 'Gallery', href: '/gallery', icon: <Collections /> },
        { name: 'Partners', href: '/partnerships', icon: <Handshake /> },
        { name: 'Support', href: '/support', icon: <Support /> },
    ]


    useEffect(() => {
        fetch('/api/me')
            .then(res => res.json())
            .then(json => {
                if (json.error) return
                setUser(json)
            })
            .catch(() => { })
    }, [])


    return (
        <>
            <div
                className='relative'
                style={{
                    width: '100%',
                    borderBottom: '1px solid var(--red)',
                    backgroundColor: 'var(--background)',
                }}
            >

                <div className='absolute w-full h-full'>
                    <Image src={Honeycomb} alt='honeycomb' fill className='object-cover opacity-10' />
                </div>

                <div className='flex flex-row justify-between gap-10 p-[15px] px-[30px]' style={{ zIndex: 1 }}>
                    <div className='min-w-[50px] self-center flex flex-row items-center gap-x-3'>
                        <Link href='/'>
                            <IconButton style={{ padding: 0 }}>
                                <Image src={Logo} width={50} quality={100} alt='Logo' />
                            </IconButton>
                        </Link>
                    </div>

                    <div className='hidden md:flex flex-row flex-wrap justify-end gap-x-10 gap-y-2 self-center'>
                        {Links.map((link) => (
                            <React.Fragment key={link.name}>
                                <Link href={link.href} target={/*link.target || */'_self'}>
                                    <div className={Navigation['nav-button']}>
                                        {link.icon}
                                        <p>{link.name}</p>
                                    </div>
                                </Link>
                            </React.Fragment>
                        ))}
                    </div>

                    <div className='flex self-center gap-x-3'>
                        <Link href='/donate' title='Donate' className='self-center'>
                            <div className={Navigation['nav-button']}>
                                <VolunteerActivism />
                            </div>
                        </Link>

                        {user ?
                            <Link href='/me' title={user.globalName || user.username}>
                                <div className='relative w-[40px] h-[40px]'>
                                    <Avatar user={user} />
                                </div>
                            </Link>
                            :
                            <Link href='/login' title='Login'>
                                <div className={Navigation['nav-button']}>
                                    <AccountCircle />
                                </div>
                            </Link>
                        }

                        <div className={Navigation['nav-button'] + ' visible md:hidden'} onClick={() => setSideMenuOpen(true)}>
                            <Menu />
                        </div>
                    </div>
                </div>

            </div>

            <Drawer open={sideMenuOpen} onClose={() => setSideMenuOpen(false)}>
                <div className='relative h-full flex flex-col gap-5' style={{
                    borderRight: '1px solid #db001d',
                    background: '#0a0a0a'
                }}>

                    <div className='absolute w-full h-full blur-[5px]'>
                        <Image src={Honeycomb} alt='honeycomb' fill className='object-cover opacity-40' />
                    </div>

                    <Link className='self-center pt-3' href='/'>
                        <IconButton style={{ padding: 0 }}>
                            <Image src={Logo} width={75} alt='Logo' />
                        </IconButton>
                    </Link>

                    <Divider color='#db001d' />

                    <List>
                        {Links.map((link, index) => (
                            <ListItem key={link.name} disablePadding>
                                <Link href={link.href}>
                                    <ListItemButton onClick={() => setSideMenuOpen(false)}>
                                        <div className='pl-3 pr-10 flex items-center'>
                                            <ListItemIcon>
                                                {link.icon}
                                            </ListItemIcon>
                                            <ListItemText primary={link.name} />
                                        </div>
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        ))}
                    </List>

                </div>
            </Drawer>
        </>
    )
}