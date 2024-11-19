import client from '@/lib/auth'
import { connection } from 'next/server'
import { redirect } from 'next/navigation'

import ConvertColor from '@/lib/discord/color'

import { Paper, Divider, Typography } from '@mui/material'



export default async function Page() {

    await connection()

    const member = await client.fetchMe()
    if (!member) return redirect('/login')


    return (
        <div className='h-full w-full p-10 pt-[100px]'>
            <div className='flex flex-col justify-center items-center'>

                <Paper elevation={1} className='p-5 flex flex-col gap-5'>
                    <div className='flex gap-5'>
                        <img alt='Profile Picture' src={`https://cdn.discordapp.com/avatars/${member.discord.user.id}/${member.discord.user.avatar}?size=128`} style={{ borderRadius: '100%', border: `2px solid ${member.discord.user.banner_color}` }} />

                        <Divider orientation='vertical' flexItem />

                        <div className='flex flex-col justify-center gap-2'>
                            <p>{member.discord.user.username}{member.discord.nick ? ` - ${member.discord.nick}` : null}</p>
                            <Divider />
                            <p>Joined: {new Date(member.discord.joined_at).toDateString()}</p>
                        </div>
                    </div>

                    <Divider />

                    <div>
                        {member.roles.map(role => <Typography key={role.id} color={role.color !== 0 ? ConvertColor(role.color) : '#fff'}>{role.name}</Typography>)}
                    </div>
                </Paper>

            </div>
        </div>
    )
}