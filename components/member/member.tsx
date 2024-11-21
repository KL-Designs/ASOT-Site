'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { useState } from 'react'

import { Paper, Divider, Typography, Button } from '@mui/material'
import { Person, Badge, Groups, Hive, Edit } from '@mui/icons-material'

import Avatar from './avatar'



export default function Member({ member }: { member: GuildMember }) {

    const [hover, setHover] = useState<boolean>(false)

    const searchParams = useSearchParams()
    const selectedMember = searchParams.get('member')


    return (
        <Link href={`?member=${member.user.id}`}>
            <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <Paper elevation={hover ? 3 : 1} className='px-5 py-2 flex justify-between cursor-pointer' style={{border: selectedMember === member.user.id ? '1px solid #db001d' : 'initial'}}>

                    <div className='flex flex-col justify-between'>
                        <div>
                            <Typography variant='h6'>{member.nick}</Typography>
                            <Typography variant='caption'>{member.user.username}</Typography>
                        </div>
                    </div>

                    <div className='relative h-[50px] w-[50px]'>
                        <Avatar member={member} />
                    </div>

                </Paper>
            </div>
        </Link>
    )
}