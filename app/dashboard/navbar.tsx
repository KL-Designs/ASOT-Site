'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { useState } from 'react'

import { Menu } from '@mui/icons-material'
import { Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material'
import { ThemeProvider } from '@mui/material'

import DarkTheme from '@/themes/dark'

import Logo from '@/public/logo.png'



export default function Navbar({ links }: { links: { name: string, href: string, icon: React.ReactNode, authorized: boolean }[] }) {

    const [sideMenuOpen, setSideMenuOpen] = useState(false)


    return (
        <ThemeProvider theme={DarkTheme}>

            <div className='p-5 gap-5 flex md:flex-col justify-between md:justify-start border-r-[0px] md:border-r-[1px] md:border-b-[0px] border-b-[1px]'
                style={{
                    borderColor: '#db001d',
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                }}>

                <div className='min-w-[50px] flex self-center'>
                    <Link href='/'>
                        <IconButton style={{ padding: 0 }}>
                            <Image src={Logo} width={50} alt='Logo' />
                        </IconButton>
                    </Link>
                </div>

                <Divider />

                <div className='hidden md:flex md:flex-col self-center gap-1'>
                    {links.map((link) => {
                        if (!link.authorized) return null
                        return (
                            <React.Fragment key={link.name}>
                                <Link href={link.href} target='_self' >
                                    <Button className='justify-start gap-5' color='inherit' size='large' startIcon={link.icon} fullWidth>{link.name}</Button>
                                </Link>
                            </React.Fragment>
                        )
                    })}
                </div>

                <div className='flex self-center gap-x-5'>
                    <IconButton className='visible md:hidden' onClick={() => setSideMenuOpen(true)}>
                        <Menu />
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
                        {links.map((link, index) => {
                            if (!link.authorized) return null
                            return (
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
                            )
                        })}
                    </List>

                </div>
            </Drawer>
        </ThemeProvider>
    )
}