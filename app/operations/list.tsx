'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

import { Button, Paper, Typography } from '@mui/material'
import { AddBox, ArrowForwardIos, Edit } from '@mui/icons-material'

export function CreateButton() {
    const [active, setActive] = useState<boolean>(false)

    function createMission() {
        setActive(true)

        fetch('/api/operations/new')
            .then(res => res.json())
            .then(json => {
                if (json.error) return alert(json.error)
                alert('New Mission Created!')
                setActive(false)
            })
            .catch(err => {
                alert(err)
                setActive(false)
            })
    }

    return (
        <>
            <Button variant='contained' disabled={active} onClick={createMission}><AddBox /> New Mission</Button>
        </>
    )
}

export function MissionList() {

    const [missions, setMissions] = useState<Operation[]>([])
    const [hasAccess, setHasAccess] = useState<boolean>(false)


    useEffect(() => {
        fetch(encodeURI(`/api/me/roles?has=HQ Staff`))
            .then(res => res.json())
            .then(json => {
                if (json.error) return alert(json.error)
                setHasAccess(json.access)
            })

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
        <div className='flex flex-col gap-2'>
            {missions.map((mission) => {
                return (
                    <Paper key={mission._id.toString()} elevation={1} className='flex justify-between rounded-r-xl'>
                        <div className='p-4'>
                            <Typography variant='h5'>{mission.title}</Typography>
                            <Typography variant='caption' className='opacity-75' sx={{ textTransform: 'uppercase' }}>{new Date(mission.date).toDateString()}</Typography>
                        </div>

                        <div className='flex'>
                            {hasAccess ? (
                                <div className='h-full w-[50px] bg-blue-500 cursor-pointer hover:w-[100px] transition-[width] duration-300 ease-out'>
                                    <Link className='h-full w-full flex flex-col justify-center items-center' href={`/operations/edit?op=${mission._id.toString()}`}>
                                        <Edit />
                                    </Link>
                                </div>
                            ) : null}

                            <div className='h-full w-[50px] bg-red-500 rounded-r-xl cursor-pointer hover:w-[100px] transition-[width] duration-300 ease-out'>
                                <Link className='h-full w-full flex flex-col justify-center items-center' href={`/operations/${mission._id.toString()}`}>
                                    <ArrowForwardIos />
                                </Link>
                            </div>
                        </div>
                    </Paper>
                )
            })}
        </div>
    )
}