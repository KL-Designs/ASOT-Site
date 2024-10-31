'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { FetchUser } from '@/lib/auth/account'
import { GetGuildMemberRoles, GetGuildMember } from '@/lib/discord/roles'
import ConvertColor from '@/lib/discord/color'

import { ThemeProvider, Paper, Divider, Typography } from '@mui/material'

import Navbar from '../(landing)/navbar'

import UnitTheme from '@/themes/unit'



export default async function Page() {

    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value

    let user: User
    let member: GuildMember
    let roles: GuildRole[]

    try {
        if (!token) throw new Error('No token found')

        user = await FetchUser(token as string)
        if (!user) throw new Error('User not found')

        member = await GetGuildMember(user.discord.id)
        if (!member) throw new Error('Member not found')

        roles = await GetGuildMemberRoles(user.discord.id)
        if (!roles) throw new Error('Roles not found')

        console.log(roles)
    }

    catch (error) {
        console.error('Error fetching user:', error)
        return redirect(`/login`)
    }

    return (
        <ThemeProvider theme={UnitTheme}>

            <Navbar />

            <div className='h-full w-full p-10 pt-[100px]'>
                <div className='flex flex-col justify-center items-center'>

                    <Paper elevation={1} className='p-5 flex flex-col gap-5'>
                        <div className='flex gap-5'>
                            <img src={`https://cdn.discordapp.com/avatars/${user.discord.id}/${user.discord.avatar}?size=128`} style={{ borderRadius: '100%', border: `2px solid ${user.discord.banner_color}` }} />

                            <Divider orientation='vertical' flexItem />

                            <div className='flex flex-col justify-center gap-2'>
                                <p>{member.user.username}{member.nick ? ` - ${member.nick}` : null}</p>
                                <Divider />
                                <p>Joined: {new Date(member.joined_at).toDateString()}</p>
                            </div>
                        </div>

                        <Divider />

                        <div>
                            {roles.map(role => <Typography key={role.id} color={role.color !== 0 ? ConvertColor(role.color) : '#fff'}>{role.name}</Typography>)}
                        </div>
                    </Paper>

                </div>
            </div>
        </ThemeProvider>
    )
}