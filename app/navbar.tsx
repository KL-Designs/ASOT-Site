'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { useState } from 'react'

import { Home, School, Group, MilitaryTech, Collections, Handshake, Support, VolunteerActivism, Menu } from '@mui/icons-material'
import { Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material'
import { ThemeProvider } from '@mui/material'

import DarkTheme from '@/themes/dark'

import Logo from '@/public/logo.png'
import Honeycomb from '@/public/designs/Honeycombs.svg'



export default function Navbar() {

    const [sideMenuOpen, setSideMenuOpen] = useState(false)

    const Links = [
        { name: 'Home', href: '/', icon: <Home /> },
        { name: 'About Us', href: '/about', icon: <School />, subLinks: ['/callsigns', '/contact', '/rules', '/faq'] },
        { name: 'ORBAT', href: '/orbat', icon: <Group /> },
        { name: 'MILPACS', href: 'https://www.australianspecialoperationstaskforce.com/milpacs', target: '_self', icon: <MilitaryTech /> },
        { name: 'Gallery', href: 'https://www.australianspecialoperationstaskforce.com/gallery', target: '_self', icon: <Collections /> },
        { name: 'Partners', href: '/partnerships', icon: <Handshake /> },
        { name: 'Support', href: '/support', icon: <Support /> },
    ]



    return (
        <ThemeProvider theme={DarkTheme}>
            <div
                className='relative'
                style={{
                    width: '100%',
                    borderBottom: '1px solid #db001d',
                    // backdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(15, 15, 15, 255)',
                }}
            >

                <div className='absolute w-full h-full'>
                    <Image src={Honeycomb} alt='honeycomb' fill className='object-cover opacity-10' />
                </div>

                <div className='flex flex-row justify-between gap-10 p-[15px] px-[30px]'>
                    <div className='min-w-[50px] self-center flex flex-row items-center gap-x-3'>
                        <Link href='/'>
                            <IconButton style={{ padding: 0 }}>
                                <Image src={Logo} width={50} alt='Logo' />
                            </IconButton>
                        </Link>
                    </div>

                    <div className='hidden md:flex flex-row flex-wrap justify-end gap-x-10 gap-y-1 self-center'>
                        {Links.map((link) => (
                            <React.Fragment key={link.name}>
                                <Link href={link.href} target={link.target || '_self'} >
                                    <Button color='inherit' startIcon={link.icon}>{link.name}</Button>
                                </Link>
                            </React.Fragment>
                        ))}
                    </div>

                    <div className='flex self-center gap-x-5'>
                        <Link href='/donate' title='Donate'>
                            <IconButton>
                                <VolunteerActivism />
                            </IconButton>
                        </Link>

                        <IconButton className='visible md:hidden' onClick={() => setSideMenuOpen(true)}>
                            <Menu />
                        </IconButton>
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
        </ThemeProvider>
    )
}