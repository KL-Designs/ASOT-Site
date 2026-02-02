import client from '@/lib/discord'
import { connection } from 'next/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'

import { Paper, Divider, Typography, Button } from '@mui/material'
import { AddBox, Tune } from '@mui/icons-material'



export default async function Page() {

    await connection()

    const me = await client.fetchMe()
    if (!me) return redirect('/login')

    return (
        <div className='h-full w-full'>

            <div>
                
            </div>

            {/* <Paper className='w-[250px] h-[250px] p-5 flex flex-col justify-center items-center rounded-lg'>
                <AddBox sx={{ fontSize: 100 }} />
                <Typography variant='h2'>New Mission</Typography>
            </Paper> */}
        </div>
    )
}