import client from '@/lib/auth'
import { connection } from 'next/server'
import { redirect } from 'next/navigation'

import { Paper, Divider, Typography, Button } from '@mui/material'
import { Person, Badge, Groups, Hive } from '@mui/icons-material'

import MemberList from '@/components/memberList'



export default async function Page() {

    await connection()

    const member = await client.fetchMe()
    if (!member.hasRoles(['All Staff'])) return redirect('/dashboard')



    return (
        <div className='h-full w-full p-10 pt-[100px]'>
            <div className='m-auto flex flex-col gap-5'>

                <Typography variant='h4'>Member Management</Typography>

                <MemberList />

            </div>
        </div>
    )
}