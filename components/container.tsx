import "./landing.css"

import Image, { StaticImageData } from 'next/image'

import { Typography, Divider } from '@mui/material'



export default function Container({ children, title, subtitle, background, sx }: {
    children?: React.ReactNode,
    title?: string,
    subtitle?: string,
    background?: StaticImageData,
    sx?: {
        maxWidth?: 'max-w-sm' | 'max-w-md' | 'max-w-lg' | 'max-w-xl' | 'max-w-full' | (string & {}),
        bannerHeight?: 'sm' | 'md' | 'lg',
        padding?: string,
        gap?: string | undefined
    }
}) {

    let bannerHeight: string
    switch (sx?.bannerHeight) {
        case 'sm': bannerHeight = 'h-banner-sm md:h-banner-sm-md'; break
        case 'md': bannerHeight = 'h-banner-md md:h-banner-md-md'; break
        case 'lg': bannerHeight = 'h-banner-lg md:h-banner-lg-md'; break
        default: bannerHeight = 'h-banner-md md:h-banner-md-md'; break
    }

    return (
        <div className='h-full w-full'>

            <div className={`relative w-full ${bannerHeight} flex flex-col justify-center items-center`}>
                <Image src={background || '/images/fallback.webp'} alt='Banner' fill className='object-cover object-center blur-[2px]' loading='eager' />

                <div className='max-w-[1000px] mx-10 flex flex-col justify-center gap-5'>
                    <div className='flex flex-col justify-center items-center gap-3' style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        backdropFilter: 'blur(10px)',
                        border: '2px solid #db001d',
                        padding: '15px'
                    }}>
                        <h1 className='container-h1'>{title || 'PAGE TITLE'}</h1>

                        {subtitle ? <>
                            <Divider flexItem color='#db001d' />
                            <h2 className="container-h2 max-w-[400px] md:max-w-[700px]">{subtitle}</h2>
                        </> : null}
                    </div>
                </div>
            </div>


            <div style={{ borderTop: '1px solid #db001d' }}>
                <div className={`m-auto flex flex-col ${sx?.gap ? sx.gap : 'gap-10'} ${sx?.maxWidth || 'max-w-md'}`} style={{ padding: sx?.padding || '2rem 2rem' }}>

                    {children}

                </div>
            </div>

        </div>
    )
}