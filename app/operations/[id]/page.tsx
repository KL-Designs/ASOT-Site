import { Metadata } from "next"
import Db from '@/lib/mongo'
import dayjs from "dayjs"

import client from '@/lib/discord'
import { connection } from 'next/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'

import { Paper, Divider, Typography, Button } from '@mui/material'
import { AddBox, Tune, Api } from '@mui/icons-material'
import { ObjectId } from "mongodb"


export default async function Page({ params }: { params: { id: string } }) {
    const resolvedParams = await params
    await connection()

    const operation = await Db.operations.findOne({_id: new ObjectId(resolvedParams.id)})

    return (
        <div className='h-full w-full p-5'>
            <div className='m-auto max-w-[1400px] flex flex-col gap-5'>

                <div className='flex justify-between items-center gap-3'>
                    <Api sx={{ fontSize: 50 }} />
                    <Typography
                        variant='h1' fontWeight={600} letterSpacing={5} textAlign={'center'}
                        sx={{ fontSize: { xs: 20, sm: 30, md: 50 } }}
                    >
                        {operation?.title.toUpperCase()}
                    </Typography>
                    <Typography className='flex flex-col gap-1' variant='h5' fontWeight={600} fontSize={15} letterSpacing={3} textAlign={'right'}>
                        {operation?.department}
                        <Divider />
                        {dayjs(operation?.loreDate).format('DD HHmm MMM YY').toUpperCase()}
                    </Typography>
                </div>

                <Divider />

            </div>
        </div>
    )
}