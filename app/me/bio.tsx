'use client'

import { useState, useEffect } from "react"
import { Button, TextField } from "@mui/material"
import { UploadFile } from "@mui/icons-material"

import Image from 'next/image'



export function Bio() {

    const [id, setId] = useState<string | null>(null)
    const [bio, setBio] = useState<string | null>(null)

    useEffect(() => {
        fetch('/api/me')
            .then(res => res.json())
            .then(json => {
                if (json.error) return console.error(json.error)
                const user = json as User
                setId(user.id)
                setBio(user.bio?.content || '')
            })
    }, [])

    useEffect(() => {
        if (bio === null) return

        fetch('/api/me', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: bio
            })
        })
    }, [bio])


    const upload = async (file: File) => {
        const formData = new FormData()
        formData.append("file", file)

        fetch("/api/uploads/bio", {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(json => {
                if (json.error) alert(json.error)
                window.location.reload()
            })
    }


    return (
        <div className="flex gap-5">
            <TextField fullWidth multiline rows={6} placeholder='Type your bio here...' value={bio || ''} onChange={(e) => setBio(e.currentTarget.value)} />

            <div className="hidden sm:flex flex-col justify-between gap-3">
                <div className="relative w-full h-full min-w-[175px]">
                    <Image src={`/api/uploads/bio?id=${id}&time=${new Date().getTime()}`} alt="User Bio Image" fill className="object-contain" />
                </div>
                <Button variant="contained" component="label">
                    <UploadFile /> Upload JPG
                    <input
                        type="file"
                        hidden
                        onChange={(e) => {
                            const file = e.target.files?.[0]
                            if (file) upload(file)
                        }}
                    />
                </Button>

            </div>
        </div>
    )
}


export function BioInfo() {

    const [name, setName] = useState<string | null>(null)
    const [rank, setRank] = useState<string | null>(null)
    const [callsign, setCallsign] = useState<string | null>(null)

    useEffect(() => {
        fetch('/api/me')
            .then(res => res.json())
            .then(json => {
                if (json.error) return console.error(json.error)
                const user = json as User
                setName(user.bio?.name || '')
                setRank(user.bio?.rank || '')
                setCallsign(user.bio?.callsign || '')
            })
    }, [])

    useEffect(() => {
        if (name === null || rank === null) return

        fetch('/api/me', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                rank,
                callsign
            })
        })
    }, [name, rank, callsign])


    return (
        <div className='flex flex-col gap-2'>
            <TextField placeholder='Name' variant='standard' value={name || ''} onChange={(e) => setName(e.currentTarget.value)} />
            <TextField placeholder='Rank' variant='standard' value={rank || ''} onChange={(e) => setRank(e.currentTarget.value)} />
            <TextField placeholder='Callsign' variant='standard' value={callsign || ''} onChange={(e) => setCallsign(e.currentTarget.value)} />
        </div>
    )
}