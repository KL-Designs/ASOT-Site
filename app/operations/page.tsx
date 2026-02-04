import client from '@/lib/discord'
import { connection } from 'next/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'

import { Paper, Divider, Typography, Button } from '@mui/material'
import { AddBox, Tune } from '@mui/icons-material'

import { CreateButton, MissionList } from './list'



export default async function Page() {

    await connection()
    let editAccess = false

    try {
        const me = await client.fetchMe()
        if (await client.hasRoles(me, ['HQ Staff'])) editAccess = true
    } catch { }

    return (
        <div className='h-full w-full p-5'>

            <div className='m-auto max-w-[500px] flex flex-col gap-5'>
                {editAccess ? <CreateButton /> : null}

                <MissionList />
            </div>

            {/* <Paper className='m-auto w-[250px] h-[250px] p-5 flex flex-col justify-center items-center'>
                <AddBox sx={{ fontSize: 100 }} />
                <Typography variant='h2'>New Mission</Typography>
            </Paper> */}
        </div>
    )
}