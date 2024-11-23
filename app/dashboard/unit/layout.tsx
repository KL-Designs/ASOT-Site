import client from '@/lib/discord'
import { connection } from 'next/server'
import { redirect } from 'next/navigation'

import { Paper, Divider, Typography, Button } from '@mui/material'
import { Person, Badge, Groups, Hive } from '@mui/icons-material'

import MemberList from '@/components/member/list'



export default async function PageLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    await connection()

    const member = await client.fetchMe()
    if (!member.hasRoles(['J4-Administration'])) return redirect('/dashboard')

    return (children)
}