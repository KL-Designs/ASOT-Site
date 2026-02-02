import client from '@/lib/discord'
import { connection } from 'next/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'

import ConvertColor from '@/lib/discord/color'

import { Paper, Divider, Typography, Button } from '@mui/material'
import { Api, Tune } from '@mui/icons-material'

import Avatar from '@/components/member/avatar'



export default async function Page() {

    await connection()

    const me = await client.fetchMe()
    if (!me) return redirect('/login')

    return (
        <div className='h-full w-full p-10 flex flex-col justify-center'>
            <div className='flex flex-wrap justify-center items-center gap-5 max-w-[1000px] m-auto'>
                
                <Paper elevation={1} className='p-5 flex flex-col justify-between gap-5 w-full min-h-[250px] max-h-[250px] overflow-y-scroll'>
                    <div className='flex gap-5'>
                        <div className='relative h-[100px] min-w-[100px]'>
                            <Avatar user={me} />
                        </div>

                        <Divider orientation='vertical' flexItem />

                        <div className='flex flex-col justify-center gap-2 flex-grow'>
                            <p>{me.username}{me.guild.nickname ? ` - ${me.guild.nickname}` : null}</p>
                            <Divider />
                            <p>Joined: {new Date(me.guild.joinedTimestamp).toDateString()}</p>
                        </div>
                    </div>

                    <Divider />

                    {/* <div>
                        <Link href='/optionals'><Button fullWidth variant='contained'>📝 Configure Optionals</Button></Link>
                    </div> */}

                    <div className='flex-grow'>
                        {me.roles.map(role => <Typography key={role.id} color={role.color !== 0 ? ConvertColor(role.color) : '#fff'}>{role.name}</Typography>)}
                    </div>
                </Paper>

                <Link href={'/operations'} className='flex-grow w-max'>
                    <Paper elevation={1} className='p-5 gap-3 flex flex-col justify-center items-center h-[250px] cursor-pointer hover:bg-red-500 transition-colors duration-200 ease-in-out'>
                        <Api sx={{ fontSize: 100 }} />
                        <Typography variant='h2' fontWeight={600} letterSpacing={2} textAlign={'center'}>OPERATIONS</Typography>
                    </Paper>
                </Link>

                <Link href={'/optionals'} className='flex-grow w-max'>
                    <Paper elevation={1} className='p-5 gap-3 flex flex-col justify-center items-center h-[250px] cursor-pointer hover:bg-blue-600 transition-colors duration-200 ease-in-out'>
                        <Tune sx={{ fontSize: 100 }} />
                        <Typography variant='h2' fontWeight={600} letterSpacing={2} textAlign={'center'}>CONFIGURE<br/>OPTIONALS</Typography>
                    </Paper>
                </Link>
            </div>
        </div>
    )
}