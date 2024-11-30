import Image from "next/image"

import { Logo } from "../util"
import { TextField, Paper, Typography, Divider } from "@mui/material"



export default async function Editor({ id }: { id: string }) {
    return (
        <div className='h-full flex flex-col gap-5'>

            <Paper elevation={0} className="p-5 flex flex-col gap-5">
                <Typography variant='h4'>Rank Display</Typography>

                <Divider />

                <div className="flex gap-5">
                    <Paper elevation={1} className="w-fit h-fit rounded-md">
                        <div className="relative m-3 w-[80px] h-[80px]">
                            <Logo src='ranks/PTE.png' />
                        </div>
                    </Paper>

                    <Paper elevation={1} className="p-3 flex flex-grow rounded-md gap-3 items-center">
                        <TextField label='Abbreviation' placeholder="PTE" variant='outlined' />
                        <TextField label='Name' placeholder="Private" variant='outlined' fullWidth />
                    </Paper>
                </div>
            </Paper>

            <Paper elevation={0} className="p-5 flex flex-col gap-5 flex-grow">
                <Typography variant='h4'>Billet Editor</Typography>

                <Divider />

                <div className="flex gap-5">
                    <Paper elevation={1} className="w-fit h-fit rounded-md">
                        <div className="relative m-3 w-[80px] h-[80px]">
                            <Logo src='ranks/PTE.png' />
                        </div>
                    </Paper>

                    <Paper elevation={1} className="p-3 flex flex-grow rounded-md gap-3 items-center">
                        <TextField label='Abbreviation' placeholder="PTE" variant='outlined' />
                        <TextField label='Name' placeholder="Private" variant='outlined' fullWidth />
                    </Paper>
                </div>
            </Paper>

        </div>
    )
}