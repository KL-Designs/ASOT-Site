'use client'

import { useState, useEffect } from 'react'

import { Button, Paper, Typography } from '@mui/material'
import { AddBox, ArrowForwardIos, Edit } from '@mui/icons-material'

export function CreateButton() {
    function createMission() {
        fetch('/api/operations/new')
            .then(res => res.json())
            .then(json => {
                if (json.error) return alert(json.error)
                alert(json.id)
            })
    }

    return (
        <>
            <Button variant='contained' onClick={createMission}><AddBox /> New Mission</Button>
        </>
    )
}

export function MissionList() {

    const [missions, setMissions] = useState<Operation[]>([])

    useEffect(() => {
        const interval = setInterval(() => {
            fetch('/api/operations')
                .then(res => res.json())
                .then(json => {
                    if (json.error) return alert(json.error)
                    if (json.missions) setMissions(json.missions)
                })
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className='flex flex-col gap-1'>
            {missions.map((mission) => {
                return (
                    <Paper key={mission._id.toString()} elevation={1} className='flex justify-between rounded-r-xl'>
                        <div className='p-4'>
                            <Typography variant='h5'>{mission.title}</Typography>
                            <Typography variant='caption' className='opacity-75' sx={{ textTransform: 'uppercase' }}>{new Date(mission.date).toDateString()}</Typography>
                        </div>

                        <div className='flex'>
                            <div className='h-full w-[50px] bg-blue-500 flex flex-col justify-center items-center cursor-pointer hover:w-[100px] transition-[width] duration-300 ease-out'>
                                <Edit />
                            </div>
                            <div className='h-full w-[50px] bg-red-500 rounded-r-xl flex flex-col justify-center items-center cursor-pointer hover:w-[100px] transition-[width] duration-300 ease-out'>
                                <ArrowForwardIos />
                            </div>
                        </div>
                    </Paper>
                )
            })}
        </div>
    )
}