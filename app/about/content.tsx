import Image, { StaticImageData } from 'next/image'

import { Button, IconButton, Typography, Divider } from '@mui/material'



export default function ContentText({ children, title, className }: { children: React.ReactNode, title: string, className?: string }) {
    return (
        <div className={`p-8 w-full bg-[#0e0a0a] flex flex-row justify-center gap-x-14 ${className}`}>
            <div className='w-full flex flex-col gap-y-5 self-center'>
                <Typography variant='h4' fontWeight={500}>{title}</Typography>
                <Divider color='#db001d' />
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}


export function ContentWithImage({ children, title, images, imageSide, imagePos, titlePos }: { children: React.ReactNode, title: string, images: StaticImageData[], imageSide?: 'left' | 'right', imagePos?: 'start' | 'center' | 'end', titlePos?: 'center' | 'left' | 'right' }) {

    const ImageWrapper = () => (
        <div className={`max-w-[600px] self-${imagePos || 'center'} flex flex-col gap-5`}>
            {images.map((image, i) => (
                <Image key={i} className='rounded-lg' src={image} alt={title} />
            ))}
        </div>
    )


    return (
        <div className='p-8 w-full bg-[#0e0a0a] flex md:flex-row flex-col justify-center gap-14'>
            <div className='hidden md:flex'>{imageSide === 'left' || !imageSide ? <ImageWrapper /> : null}</div>

            <div className='max-w-[500px] flex flex-col gap-y-8 self-center'>
                <Typography variant='h4' fontWeight={500} align={titlePos || 'left'}>{title}</Typography>
                <Divider color='#db001d' />
                <div>
                    {children}
                </div>
            </div>

            <div className='visible md:hidden'><ImageWrapper /></div>

            <div className='hidden md:flex'>{imageSide === 'right' ? <ImageWrapper /> : null}</div>
        </div>
    )
}