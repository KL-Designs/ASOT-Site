'use client'

import Link from 'next/link'
import Image from 'next/image'

import { useState } from 'react'

import * as Icon from '@mui/icons-material'
import { Button, IconButton, Typography, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material'
import { ThemeProvider } from '@mui/material'

import DarkTheme from '@/themes/dark'

import Logo from '@/public/logo.png'



export default function Navbar() {

    const [sideMenuOpen, setSideMenuOpen] = useState(false)

    const Links = [
        { name: 'Home', href: '/', icon: <Icon.Home /> },
        { name: 'About Us', href: '/about', icon: <Icon.School /> },
        { name: 'ORBAT', href: '/orbat', icon: <Icon.Group /> },
        { name: 'MILPACS', href: '/milpacs', icon: <Icon.MilitaryTech /> },
        { name: 'Gallery', href: '/gallery', icon: <Icon.Collections /> },
    ]



    return (
        <ThemeProvider theme={DarkTheme}>
            <div
                className='z-50 py-3 px-10 flex flex-row justify-between'
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
                    {/* <Typography variant='h5' fontWeight={800} letterSpacing={3}>ASOT</Typography> */}
                </div>

                <div className='hidden sm:flex flex-row flex-wrap justify-end gap-x-10 self-center'>
                    {Links.map((link) => (
                        <Link href={link.href} key={link.name}>
                            <Button color='inherit' startIcon={link.icon}>{link.name}</Button>
                        </Link>
                    ))}
                </div>

                <div className='flex self-center gap-x-5'>
                    <Link href='https://www.paypal.com/donate?token=K6QBGrif2tPtO278lLAx8GQeZkhHzjSUdbZqAav6ZOe6fgbxksYoR501L7NhpbOfzta9GmBCWoXbc8_G' target='_blank' title='Donate'>
                        <IconButton>
                            <Icon.VolunteerActivism />
                        </IconButton>
                    </Link>

                    <Link href='/account' title='Account'>
                        <IconButton>
                            <Icon.AccountCircle />
                        </IconButton>
                    </Link>

                    <IconButton className='visible sm:hidden' onClick={() => setSideMenuOpen(true)}>
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