'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Typography, Divider } from '@mui/material'



export default function TimeZones() {
    interface LocalTime {
        label: string
        time: string
    }

    const [localStandardTimes, setLocalStandardTimes] = useState<LocalTime[]>([])
    const [localDaylightTimes, setLocalDaylightTimes] = useState<LocalTime[]>([])

    const standardTimes = [
        { label: 'Staff load in', time: '17:45', timezone: 'Australia/Sydney' }, // AEST
        { label: 'Staff briefing', time: '17:50', timezone: 'Australia/Sydney' },
        { label: 'All members load in', time: '18:00', timezone: 'Australia/Sydney' },
        { label: 'Step off', time: '18:10', timezone: 'Australia/Sydney' },
        { label: 'Mission end', time: '20:30', timezone: 'Australia/Sydney' },
    ]

    const daylightTimes = [
        { label: 'Staff load in', time: '18:15', timezone: 'Australia/Sydney' }, // AEDT
        { label: 'Staff briefing', time: '18:20', timezone: 'Australia/Sydney' },
        { label: 'All members load in', time: '18:30', timezone: 'Australia/Sydney' },
        { label: 'Step off', time: '18:40', timezone: 'Australia/Sydney' },
        { label: 'Mission end', time: '21:00', timezone: 'Australia/Sydney' },
    ]

    function convertToLocal(times: { label: string; time: string; timezone: string }[]) {
        const userTZ = Intl.DateTimeFormat().resolvedOptions().timeZone

        return times.map(({ label, time, timezone }) => {
            const [hours, minutes] = time.split(':').map(Number)

            // Treat input as Sydney time
            const sydneyDate = new Date(
                new Date().toLocaleString('en-US', { timeZone: 'Australia/Sydney' })
            )
            sydneyDate.setHours(hours, minutes, 0, 0)

            // Convert to user's timezone and include their timezone abbreviation
            const localTimeString = sydneyDate.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
                timeZone: userTZ,
                timeZoneName: 'short', // <-- adds user's TZ abbreviation
            })

            return { label, time: localTimeString }
        })
    }




    useEffect(() => {
        setLocalStandardTimes(convertToLocal(standardTimes))
        setLocalDaylightTimes(convertToLocal(daylightTimes))
    }, [])

    return (
        <>
            <Typography>Our primary missions are run every Saturday and Sunday.</Typography>
            <br />
            <Typography>1 Platoon conducts missions on Saturday nights.</Typography>
            <Typography>2 Platoon conducts missions on Sunday nights.</Typography>
            <Typography>3 Platoon(Support Platoon) supports both Saturday and Sunday night missions.</Typography>
            <br />
            <Typography className='underline'>When Daylight savings is not observed (AEST: first Sunday in April – first Sunday in October):</Typography>
            {localStandardTimes.map(({ label, time }, idx) => (
                <Typography key={idx}>
                    <b>{label}:</b>{' '}
                    <span style={{ backgroundColor: 'var(--grey)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>
                        {time}
                    </span>
                </Typography>
            ))}
            <br />
            <Typography className='underline'>When Daylight savings is observed (AEDT: first Sunday in October – first Sunday in April):</Typography>
            {localDaylightTimes.map(({ label, time }, idx) => (
                <Typography key={idx}>
                    <b>{label}:</b>{' '}
                    <span style={{ backgroundColor: 'var(--grey)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>
                        {time}
                    </span>
                </Typography>
            ))}
            <br />
            <Typography>We also run missions and trainings throughout the week but these are optional.</Typography>
        </>
    )
}