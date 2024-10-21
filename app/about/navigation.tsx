'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Typography, Button } from '@mui/material'


const Pages = [
    {
        href: '/about',
        title: 'ABOUT US',
        background: '/images/home/training2.png',
    },
    {
        href: '/about/callsigns',
        title: 'CALL SIGNS',
        background: '/images/home/Gopro3.png',
    },
    {
        href: '/about/contact',
        title: 'CONTACT US',
        background: '/images/home/Mike1440.png',
    },
    {
        href: '/about/rules',
        title: 'RULES & EXPECTATIONS',
        background: '/images/home/ADFField1.png',
    },
    {
        href: '/about/faq',
        title: 'FREQUENTLY ASKED QUESTIONS',
        background: '/images/home/training2.png',
    }
]


export function Navigation() {

    const pathname = usePathname()
    const page = Pages.find(page => page.href === pathname)

    return (
        <>
            {Pages.map((p, i) => (
                <Link className='flex-grow' key={i} href={p.href}>
                    <Button fullWidth variant='contained' disabled={page?.href === p.href ? true : false}>{p.title}</Button>
                </Link>
            ))}
        </>
    )
}


export function Banner() {

    const pathname = usePathname()
    const page = Pages.find(page => page.href === pathname)


    return (
        <>
            <div
                className='h-[40vh] md:h-[60vh] w-full bg-cover bg-center absolute'
                style={{
                    zIndex: -1,
                    backgroundImage: `url(${page?.background})`,
                    filter: 'blur(2px)'
                }}
            />

            <div className='h-[40%] md:h-[60%] pt-[80px] flex flex-col justify-center items-center select-none'>

                <div className='max-w-[1000px] mx-10 flex flex-col justify-center gap-5'>
                    <div style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        backdropFilter: 'blur(10px)',
                        border: '2px solid #db001d',
                        padding: '10px'
                    }}>

                        <Typography className='hidden md:flex' variant='h2' align='center' fontWeight={700} fontFamily={'inherit'} letterSpacing={4}>
                            {page?.title}
                        </Typography>

                        <Typography className='flex md:hidden' variant='h4' align='center' fontWeight={700} fontFamily={'inherit'} letterSpacing={4}>
                            {page?.title}
                        </Typography>

                    </div>
                </div>

            </div>
        </>
    )
}