'use client'

import { useState, useEffect, ChangeEvent, FocusEvent } from 'react'
import { TextField, Button } from '@mui/material'


export default function Page() {



    return (
        <div className='p-5'>
            <div className='m-auto w-[500px] flex flex-col'>
                <TitleField />
            </div>
        </div>
    )
}


export function TitleField() {
    const [aTitle, setATitle] = useState<boolean>(false)
    const [title, setTitle] = useState<string>('')

    useEffect(() => {
        const interval = setInterval(() => {
            const searchParams = new URLSearchParams(window.location.search)

            fetch(`/api/operations?id=${searchParams.get('op')}`)
                .then(res => res.json())
                .then(json => {
                    if (json.error) return alert(json.error)
                    const mission: Operation = json.mission

                    if (!aTitle) setTitle(mission.title), console.log('Updated', aTitle)
                })
        }, 1000)

        return () => clearInterval(interval)
    }, [aTitle, title])

    function update(e: any) {
        const searchParams = new URLSearchParams(window.location.search)

        setTitle(e.currentTarget.value)

        fetch(`/api/operations/update?id=${searchParams.get('op')}&title=${title}`)
            .then(res => res.json())
            .then(json => {
                if (json.error) return alert(json.error)
            })
    }

    return (
        <TextField value={title} label='Operation Name' onChange={update} onFocus={() => setATitle(true)} onBlur={(e) => { update(e); setATitle(false) }} />
    )
}