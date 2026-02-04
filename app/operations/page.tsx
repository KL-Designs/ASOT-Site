import client from '@/lib/discord'
import { connection } from 'next/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'

import { Paper, Divider, Typography, Button } from '@mui/material'
import { AddBox, Tune } from '@mui/icons-material'

import CreateButton from './createButton'



export default async function Page() {

    await connection()

    const me = await client.fetchMe()
    if (!me) return redirect('/login')

    let editAccess = false

    if (await client.hasRoles(me, ['HQ Staff'])) editAccess = true

    return (
        <div className='h-full w-full'>

            <div className='m-auto'>


                {editAccess ? <CreateButton /> : null}
            </div>

            {/* <Paper className='m-auto w-[250px] h-[250px] p-5 flex flex-col justify-center items-center'>
                <AddBox sx={{ fontSize: 100 }} />
                <Typography variant='h2'>New Mission</Typography>
            </Paper> */}
        </div>
    )
}