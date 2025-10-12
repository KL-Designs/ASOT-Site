'use client'

import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'


import Fallback from '@/public/images/fallback_pfp.png'



export default function Avatar({ user }: { user?: User }) {

    const [image, setImage] = useState<string | StaticImageData>(user ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}?size=256` : Fallback)

    return (
        <Image
            src={image}
            alt='Profile Picture'
            fill
            className='object-cover'
            style={{ borderRadius: '100%' }}
            onError={(e) => setImage(Fallback)}
        />
    )
}