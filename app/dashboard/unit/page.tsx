'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

import { useState, useEffect } from 'react'

import { Paper, Divider, Typography, Button, ToggleButtonGroup, ToggleButton } from '@mui/material'
import { Person, Badge, Groups, Hive, KeyboardReturn, MilitaryTech, Token, EmojiEvents, CardMembership, Work } from '@mui/icons-material'

import Editor from './editor'



export default function Page() {

    const router = useRouter()

    const [tab, setTab] = useState<'ranks' | 'roles' | 'sections' | 'platoons' | 'certifications' | 'awards'>('ranks')


    useEffect(() => {
        router.replace('/dashboard/unit')
    }, [tab])



    return (
        <div className='h-full flex flex-col gap-5'>

            <Typography variant='h4'>Unit Management</Typography>

            <Divider />

            <ToggleButtonGroup value={tab} fullWidth>
                <ToggleButton value='ranks' onClick={() => setTab('ranks')} title='Ranks'><MilitaryTech /></ToggleButton>
                <ToggleButton value='roles' onClick={() => setTab('roles')} title='Roles'><Work /></ToggleButton>
                <ToggleButton value='sections' onClick={() => setTab('sections')} title='Sections'><Hive /></ToggleButton>
                <ToggleButton value='platoons' onClick={() => setTab('platoons')} title='Platoons'><Token /></ToggleButton>
                <ToggleButton value='certifications' onClick={() => setTab('certifications')} title='Certifications'><CardMembership /></ToggleButton>
                <ToggleButton value='awards' onClick={() => setTab('awards')} title='Awards'><EmojiEvents /></ToggleButton>
            </ToggleButtonGroup>

            <div className={`h-full grid grid-cols-1 lg:grid-cols-2 gap-5`}>
                <Editor tab={tab} />
            </div>

        </div>
    )
}