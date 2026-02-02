import client from '@/lib/discord'
import { connection } from 'next/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'

import { Paper, Divider, Typography, Button } from '@mui/material'
import { AddBox, Tune, Api } from '@mui/icons-material'



export default async function Page() {

    return (
        <div className='h-full w-full p-5'>
            <div className='m-auto max-w-[1300px] flex flex-col gap-5'>

                <div className='flex justify-between items-center gap-3'>
                    <Api sx={{ fontSize: 50 }} />
                    <Typography
                        variant='h1' fontWeight={600} letterSpacing={5} textAlign={'center'}
                        sx={{ fontSize: { xs: 20, sm: 30, md: 50 } }}
                    >
                        OPERATION TRINITY I
                    </Typography>
                    <Typography className='flex flex-col gap-1' variant='h5' fontWeight={600} fontSize={15} letterSpacing={3} textAlign={'right'}>
                        1-0 HQ
                        <Divider />
                        07 1400 FEB 26
                    </Typography>
                </div>

                <Divider />

            </div>
        </div>
    )
}