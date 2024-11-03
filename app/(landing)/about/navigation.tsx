'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { Typography, Button, Divider } from '@mui/material'


const Pages: { href: string, title: string, background: string, subtitle?: string }[] = [
    {
        href: '/about',
        title: 'ABOUT US',
        background: '/images/home/training2.png',
    },
    {
        href: '/about/callsigns',
        title: 'CALL SIGNS',
        subtitle: 'Here you can see the current call signs we have and some basic information on how they are utilised in missions.',
        background: '/images/home/Gopro3.png',
    },
    {
        href: '/about/contact',
        title: 'CONTACT US',
        subtitle: 'If you have any questions, queries, want to join or simply want to say hello, you can contact us any way you like. The best way is generally through our Discord but we are also active in all our media outlets.',
        background: '/images/home/Mike1440.png',
    },
    {
        href: '/about/rules',
        title: 'RULES & EXPECTATIONS',
        subtitle: 'These are some of the more basic rules and expectations we have for all members within the community. A more in depth version will be provided upon recruitment.',
        background: '/images/home/ADFField1.png',
    },
    {
        href: '/about/faq',
        title: 'FREQUENTLY ASKED QUESTIONS',
        subtitle: 'Here are some commonly asked questions that may help answer some our your queries. If you cannot find the answer to your questions, please feel free to contact us to seek clarification.',
        background: '/images/home/SPEAR_OVERCAST_Final.png',
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
        <div className='relative w-full h-[40vh] md:h-[60vh] flex flex-col justify-center items-center'>
            <Image src={page?.background || '/images/fallback.webp'} alt='Banner' fill className='object-cover object-center blur-[2px]' loading='eager' />

            <div className='max-w-[1000px] mt-[70px] mx-10 flex flex-col justify-center gap-5'>
                <div className='flex flex-col justify-center items-center gap-3' style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid #db001d',
                    padding: '15px'
                }}>

                    <Typography className='text-[34px] md:text-[60px]' variant='h1' align='center' fontWeight={700} fontFamily={'inherit'} letterSpacing={4}>
                        {page?.title}
                    </Typography>

                    {page?.subtitle ? <>
                        <Divider flexItem color='#db001d' />

                        <Typography className='max-w-[400px] text-[12px] md:max-w-[700px] md:text-[15px]' variant='h5' align='center' fontWeight={700} fontFamily={'inherit'} letterSpacing={1}>
                            {page?.subtitle}
                        </Typography>
                    </> : null}

                </div>
            </div>
        </div>
    )
}