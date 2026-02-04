'use client'

import { useState, useEffect } from 'react'

import { Button, Typography } from '@mui/material'
import { AddBox } from '@mui/icons-material'

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

    function fetchList() {
        fetch('/api/operations')
            .then(res => res.json())
            .then(json => {
                if (json.error) return alert(json.error)
                if (json.missions) setMissions(json.missions)
            })
    }

    useEffect(() => {
        fetchList()
    }, [])

    return (
        <div className='flex flex-col gap-5'>
            {missions.map((mission) => {
                return (
                    <div key={mission._id.toString()}>
                        <Typography>{mission.title}</Typography>
                    </div>
                )
            })}
        </div>
    )
}