import fs from 'fs'

import { connection } from 'next/server'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import client from "@/lib/discord"
import Avatar from '@/components/member/avatar'
import Banner from '@/components/member/banner'

import { Typography, Button, Divider } from '@mui/material'



export default async function Card({ milpac }: { milpac?: Milpac }) {

    if (!milpac) return null

    await connection()
    const member = await client.fetchMember(milpac._id).catch(e => console.error(e))
    if (!member) return null


    return (
        <div className='flex flex-col justify-center items-center p-5 gap-5 w-[300px] rounded-md' style={{ border: `1px solid ${member.hexAccentColor || '#db001d'}` }}>
            <div className='relative h-[100px] w-[100px]'>
                <Avatar user={member} />
            </div>

            <div className='flex flex-col gap-2'>
                <Typography sx={{ textTransform: 'uppercase', display: 'inline-block' }} className='text-[20px]' align='center' variant='h3' fontWeight={700} fontFamily={'inherit'} letterSpacing={4}>
                    {member.guild.nickname.replace(/\s*\[[^\]]*\]/g, '').trim() || member.globalName}
                </Typography>

                <Divider />

                <Typography sx={{ textTransform: 'uppercase', display: 'inline-block' }} className='text-[12px]' align='center' variant='h4' fontWeight={500} fontFamily={'inherit'} letterSpacing={4}>
                    {milpac.title}
                </Typography>
            </div>
        </div>
    )
}