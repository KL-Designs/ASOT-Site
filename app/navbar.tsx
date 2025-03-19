'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { useState } from 'react'

import * as Icon from '@mui/icons-material'
import { Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material'
import { ThemeProvider } from '@mui/material'

import DarkTheme from '@/themes/dark'

import Logo from '@/public/logo.png'



export default function Navbar() {

    const [sideMenuOpen, setSideMenuOpen] = useState(false)

    const Links = [
        { name: 'Home', href: '/', icon: <Icon.Home /> },
        { name: 'About Us', href: '/about', icon: <Icon.School />, subLinks: ['/callsigns', '/contact', '/rules', '/faq'] },
        { name: 'ORBAT', href: '/orbat', icon: <Icon.Group /> },
        { name: 'MILPACS', href: 'https://www.australianspecialoperationstaskforce.com/milpacs', target: '_self', icon: <Icon.MilitaryTech /> },
        { name: 'Gallery', href: 'https://www.australianspecialoperationstaskforce.com/gallery', target: '_self', icon: <Icon.Collections /> },
        { name: 'Partners', href: '/partnerships', icon: <Icon.Handshake /> },
        { name: 'Support', href: '/support', icon: <Icon.Support /> },
    ]



    return (
        <ThemeProvider theme={DarkTheme}>
            <div
                className='z-50 py-3 px-10 flex flex-row justify-between gap-10'
                style={{
                    width: '100%',
                    // height: '80px',
                    position: 'fixed',
                    borderBottom: '1px solid #db001d',
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                }}
            >

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
                            <Icon.VolunteerActivism />
                        </IconButton>
                    </Link>

                    {/* <Link href='/dashboard' title='Dashboard'>
                        <IconButton>
                            <Icon.AccountCircle />
                        </IconButton>
                    </Link> */}

                    <IconButton className='visible md:hidden' onClick={() => setSideMenuOpen(true)}>
                        <Icon.Menu />
                    </IconButton>
                </div>

            </div>

            <Drawer open={sideMenuOpen} onClose={() => setSideMenuOpen(false)}>
                <div className='h-full pt-3 flex flex-col gap-5' style={{ backgroundColor: '#0a0a0a', borderRight: '1px solid #db001d' }}>

                    <Link className='self-center' href='/'>
                        <IconButton style={{ padding: 0 }}>
                            <Image src={Logo} width={50} alt='Logo' />
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