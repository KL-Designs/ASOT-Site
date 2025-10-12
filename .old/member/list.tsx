'use client'

import { useEffect, useState } from 'react'

import { Typography, Button, TextField } from '@mui/material'

import Member from './member'



export default function Members() {

    const [search, setSearch] = useState<string>('')
    const [members, setMembers] = useState<User[]>([])

    

    useEffect(() => {
        fetchMembers(search)
    }, [search])



    function fetchMembers(search?: string) {
        fetch(`/api/unit/members?search=${search}`)
            .then(res => res.json())
            .then(data => {
                if (data.error) return console.error(data.error)
                setMembers(data)
            })
    }



    return (
        <div className='flex flex-col flex-grow gap-5'>
            <TextField label='Search' variant='standard' autoComplete='off' onChange={(e) => setSearch(e.currentTarget.value)} />

            <div className='flex flex-col flex-grow overflow-hidden'>
                <div className='relative flex-grow overflow-auto'>
                    <div className='absolute w-full flex flex-col gap-3 pr-5'>
                        {members.map((member, i) => <Member key={member._id} member={member.discord} />)}
                    </div>
                </div>
            </div>

        </div>
    )
}