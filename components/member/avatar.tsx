'use client'

import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'


import Fallback from '@/public/images/fallback_pfp.png'



export default function Avatar({ member }: { member?: GuildMember }) {

    const [image, setImage] = useState<string | StaticImageData>(member ? `https://cdn.discordapp.com/avatars/${member.user.id}/${member.user.avatar}?size=256` : Fallback)

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