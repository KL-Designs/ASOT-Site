'use client'

import { useSearchParams } from 'next/navigation'

import { useState, useEffect } from 'react'

import { Paper, Divider, Typography, Button } from '@mui/material'
import { Person, Badge, Groups, Hive } from '@mui/icons-material'

import MemberList from '@/components/member/list'
import Avatar from '@/components/member/avatar'



export default function Page() {

    const searchParams = useSearchParams()
    const selectedMember = searchParams.get('member')

    const [member, setMember] = useState<User | null>(null)


    // useEffect(() => {
    //     if (selectedMember) {
    //         fetch(`/api/unit/members?member=${selectedMember}`)
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (data.length === 0) setMember(null)
    //                 else setMember(data[0])
    //             })
    //     }
    // }, [selectedMember])



    return (
        <div className='h-full flex flex-col gap-5 p-10 pt-[100px]'>

            <Typography variant='h4'>Member Management</Typography>

            <div className='h-full flex gap-5'>
                <div className='h-full w-[500px] flex flex-col gap-5'>
                    <MemberList />
                </div>

                <Divider orientation='vertical' flexItem />

                <div className='flex flex-col gap-5 flex-grow'>
                    <div className='flex gap-5'>
                        <div className='relative h-[100px] w-[100px]'>
                            <Avatar key={member?._id} member={member?.discord} />
                        </div>

                        <Divider orientation='vertical' flexItem />

                        <div>
                            <Typography variant='h4'>{member?.discord.nick || member?.discord.user.username || 'Select a Member'}</Typography>
                            <Typography variant='subtitle1'>{member?._id || 'Discord ID'}</Typography>
                            <Typography variant='subtitle1'>{member?.discord.user.username || 'Discord Username'}</Typography>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-5 flex-grow'>
                        <Paper elevation={1} className='p-5'>
                            <Typography variant='h4'>Rank</Typography>
                        </Paper>

                        <Paper elevation={1} className='p-5'>
                            <Typography variant='h4'>Section</Typography>
                        </Paper>

                        <Paper elevation={1} className='p-5'>
                            <Typography variant='h4'>Role</Typography>
                        </Paper>

                        <Paper elevation={1} className='p-5'>
                            <Typography variant='h4'>Rank</Typography>
                        </Paper>
                    </div>

                    <div>
                        <Paper elevation={1} className='p-5'>
                            <Typography variant='h4'>Logs</Typography>
                        </Paper>
                    </div>
                </div>
            </div>

        </div>
    )
}