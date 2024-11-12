import Image, { StaticImageData } from 'next/image'

import { Button, IconButton, Typography, Divider } from '@mui/material'



export function ContentText({ children, className, title, titlePos }: { children: React.ReactNode, className?: string, title: string, titlePos?: 'center' | 'left' | 'right' }) {
    return (
        <div className={`p-8 w-full bg-[#0e0a0a] flex flex-row justify-center gap-x-14 ${className}`}>
            <div className='w-full flex flex-col gap-y-5'>
                <Typography variant='h4' fontWeight={500} align={titlePos || 'left'}>{title}</Typography>
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
        <div className={`self-${imagePos || 'center'} flex flex-col gap-5`}>
            {images.map((image, i) => (
                <Image key={i} className='rounded-lg' src={image} alt={title} />
            ))}
        </div>
    )


    return (
        <div className='p-8 w-full grid grid-cols-1 md:grid-cols-2 gap-14 bg-[#0e0a0a]'>
            <div className={`hidden self-center ${imageSide === 'left' || !imageSide ? 'md:block' : 'md:hidden'}`}>
                <ImageWrapper />
            </div>

            <div className='flex flex-col gap-y-8 self-center'>
                <Typography variant='h4' fontWeight={500} align={titlePos || 'left'}>{title}</Typography>
                <Divider color='#db001d' />
                <div>
                    {children}
                </div>
            </div>

            <div className={`self-center ${imageSide === 'right' ? 'md:block' : 'md:hidden'}`}>
                <ImageWrapper />
            </div>
        </div>
    )
}

export default ContentText