import client from '@/lib/discord'
import { connection } from 'next/server'
import { redirect } from 'next/navigation'

import ConvertColor from '@/lib/discord/color'

import { Paper, Divider, Typography } from '@mui/material'

import Avatar from '@/components/member/avatar'



export default async function Page() {

    await connection()

    const me = await client.fetchMe()
    if (!me) return redirect('/login')

    return (
        <div className='h-full w-full p-10 pt-[100px]'>
            <div className='flex flex-col justify-center items-center'>

                <Paper elevation={1} className='p-5 flex flex-col gap-5'>
                    <div className='flex gap-5'>
                        <div className='relative h-[100px] w-[100px]'>
                            <Avatar user={me} />
                        </div>

                        <Divider orientation='vertical' flexItem />

                        <div className='flex flex-col justify-center gap-2'>
                            <p>{me.username}{me.guild.nickname ? ` - ${me.guild.nickname}` : null}</p>
                            <Divider />
                            <p>Joined: {new Date(me.guild.joinedTimestamp).toDateString()}</p>
                        </div>
                    </div>

                    <Divider />

                    <div>
                        {me.roles.map(role => <Typography key={role.id} color={role.color !== 0 ? ConvertColor(role.color) : '#fff'}>{role.name}</Typography>)}
                    </div>
                </Paper>

            </div>
        </div>
    )
}