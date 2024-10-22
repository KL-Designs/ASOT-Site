'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { FetchUser } from '@/lib/auth/account'

import { ThemeProvider, Paper, Divider } from '@mui/material'

import UnitTheme from '@/themes/unit'



export default async function Page() {

    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value

    let user: User

    try {
        if (!token) throw new Error('No token found')

        user = await FetchUser(token as string)
        if (!user) throw new Error('User not found')
    }

    catch (error) {
        console.error('Error fetching user:', error)
        return redirect(`/login`)
    }

    return (
        <ThemeProvider theme={UnitTheme}>
            <div className='h-full w-full p-10 pt-[100px]'>
                <div className='flex flex-col justify-center items-center'>

                    <Paper elevation={1} className='p-5 flex gap-5'>
                        <img src={`https://cdn.discordapp.com/avatars/${user.discord.id}/${user.discord.avatar}`} style={{ borderRadius: '100%', border: `2px solid ${user.discord.banner_color}` }} />

                        <Divider orientation='vertical' flexItem />

                        <div className='flex flex-col justify-between'>
                            <p>Id: {user.discord.id}</p>
                            <p>Username: {user.discord.username}</p>
                            <p>Created: {user.created.toDateString()}</p>

                        </div>
                    </Paper>

                </div>
            </div>
        </ThemeProvider>
    )
}