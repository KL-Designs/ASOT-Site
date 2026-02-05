'use client'

import { useState, useEffect, ChangeEvent, FocusEvent, Dispatch, SetStateAction } from 'react'
import { TextField, Button } from '@mui/material'

import dayjs, { Dayjs } from "dayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"


export default function Page() {

    const [aTitle, setATitle] = useState<boolean>(false)
    const [title, setTitle] = useState<string>('')

    const [aDate, setADate] = useState<boolean>(false)
    const [date, setDate] = useState<Dayjs | null>(null)

    const [aLoreDate, setALoreDate] = useState<boolean>(false)
    const [loreDate, setLoreDate] = useState<Dayjs | null>(null)

    useEffect(() => {
        const interval = setInterval(() => {
            const searchParams = new URLSearchParams(window.location.search)

            fetch(`/api/operations?id=${searchParams.get('op')}`)
                .then(res => res.json())
                .then(json => {
                    if (json.error) return alert(json.error)
                    const mission: Operation = json.mission

                    if (!aTitle) setTitle(mission.title)
                    if (!aDate) setDate(dayjs(mission.date))
                    if (!aLoreDate) setLoreDate(dayjs(mission.loreDate))
                })
        }, 1000)

        return () => clearInterval(interval)
    }, [
        title, aTitle,
        date, aDate,
        loreDate, aLoreDate
    ])

    return (
        <div className='p-5'>
            <div className='m-auto w-[800px] flex flex-col gap-3'>

                <TitleField value={title} setValue={setTitle} aValue={aTitle} setAValue={setATitle} />

                <div className='flex gap-3'>
                    <DateField value={date} setValue={setDate} aValue={aDate} setAValue={setADate} />
                    <LoreDateField value={loreDate} setValue={setLoreDate} aValue={aLoreDate} setAValue={setALoreDate} />
                </div>


            </div>
        </div>
    )
}


function TitleField(
    {
        value,
        setValue,
        aValue,
        setAValue
    }: {
        value: string,
        setValue: Dispatch<SetStateAction<string>>,
        aValue: boolean,
        setAValue: Dispatch<SetStateAction<boolean>>
    }) {

    function update(e: any) {
        const searchParams = new URLSearchParams(window.location.search)

        setValue(e.currentTarget.value)

        fetch(`/api/operations/update?id=${searchParams.get('op')}&title=${value}`)
            .then(res => res.json())
            .then(json => {
                if (json.error) return alert(json.error)
            })
    }

    return (
        <TextField
            fullWidth
            value={value}
            label='Operation Name'
            onChange={update}
            onFocus={() => setAValue(true)}
            onBlur={(e) => { update(e); setAValue(false) }}
        />
    )
}


function DateField({
    value,
    setValue,
    aValue,
    setAValue
}: {
    value: dayjs.Dayjs | null,
    setValue: Dispatch<SetStateAction<dayjs.Dayjs | null>>,
    aValue: boolean,
    setAValue: Dispatch<SetStateAction<boolean>>
}) {

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search)

        if (!value) return

        fetch(`/api/operations/update?id=${searchParams.get('op')}&date=${value}`)
            .then(res => res.json())
            .then(json => {
                if (json.error) return alert(json.error)
            })
    }, [aValue])

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
                className='w-full'
                label="Operation date & time"
                value={value}
                format="DD/MM/YYYY HH:mm"
                onChange={(newValue) => setValue(newValue)}
                onOpen={() => setAValue(true)}
                onClose={() => setAValue(false)}
                slotProps={{
                    textField: {
                        onFocus: () => setAValue(true),
                        onBlur: (e: any) => setAValue(false)
                    }
                }}
            />
        </LocalizationProvider>
    )
}


function LoreDateField({
    value,
    setValue,
    aValue,
    setAValue
}: {
    value: dayjs.Dayjs | null,
    setValue: Dispatch<SetStateAction<dayjs.Dayjs | null>>,
    aValue: boolean,
    setAValue: Dispatch<SetStateAction<boolean>>
}) {

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search)

        if (!value) return

        fetch(`/api/operations/update?id=${searchParams.get('op')}&loreDate=${value}`)
            .then(res => res.json())
            .then(json => {
                if (json.error) return alert(json.error)
            })
    }, [aValue])

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
                className='w-full'
                label="In-game date & time"
                value={value}
                format="DD/MM/YYYY HH:mm"
                onChange={(newValue) => setValue(newValue)}
                onOpen={() => setAValue(true)}
                onClose={() => setAValue(false)}
                slotProps={{
                    textField: {
                        onFocus: () => setAValue(true),
                        onBlur: (e: any) => setAValue(false)
                    }
                }}
            />
        </LocalizationProvider>
    )
}