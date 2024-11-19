'use client'

import type { IClient } from '@/lib/auth'

import { useEffect, useState } from 'react'

import { Typography, Button, TextField } from '@mui/material'

import Member from '@/components/member'



export default function Members() {

    const [search, setSearch] = useState<string>('')
    const [members, setMembers] = useState<IClient['members']>([])


    useEffect(() => {
        fetchMembers()
    }, [])

    useEffect(() => {
        fetchMembers(search)
    }, [search])



    function fetchMembers(search?: string) {
        fetch(`/api/unit/members?search=${search}`)
            .then(res => res.json())
            .then(data => setMembers(data))
    }



    return (
        <div className='flex flex-col gap-5'>
            <TextField label='Search' variant='standard' onChange={(e) => setSearch(e.currentTarget.value)} />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {members.map((member, i) => <Member key={i} member={member.discord} />)}
            </div>
        </div>
    )
}