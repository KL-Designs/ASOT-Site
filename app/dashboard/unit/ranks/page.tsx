'use client'

import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"

import { Logo } from "../util"
import { TextField, Paper, Typography, Divider, Button } from "@mui/material"

import Editor from './editor'



export default async function Page() {

    const searchParams = useSearchParams()
    const id = searchParams.get('id')

    if (id) return <Editor id={id} />



    return (
        <div className='h-full flex flex-col gap-5'>

            <Paper elevation={0} className="p-5 flex-grow">

                <Link href='?id=create'>
                    <Button variant='contained' color='primary'>Create Rank</Button>
                </Link>

            </Paper>

        </div>
    )
}