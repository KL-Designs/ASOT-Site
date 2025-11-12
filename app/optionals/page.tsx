'use client'

import { useEffect, useState } from "react"

import { Button, Typography, Divider, Switch } from '@mui/material'


export default function Page() {

    const [qolList, setQolList] = useState<{ id: string, name: string }[]>([])
    const [gfxList, setGfxList] = useState<{ id: string, name: string }[]>([])
    const [zeusList, setZeusList] = useState<{ id: string, name: string }[]>([])

    useEffect(() => {
        fetch('/optionals/fetch?type=qol')
            .then(res => res.json())
            .then(json => {
                if (json.error) return console.error(json.error)
                setQolList(json)
            })

        fetch('/optionals/fetch?type=gfx')
            .then(res => res.json())
            .then(json => {
                if (json.error) return console.error(json.error)
                setGfxList(json)
            })

        fetch('/optionals/fetch?type=zeus')
            .then(res => res.json())
            .then(json => {
                if (json.error) return console.error(json.error)
                setZeusList(json)
            })
    }, [])

    return (
        <div>
            <Typography className="mb-5" fontWeight={700} fontSize={50} letterSpacing={4} align='center'>CONFIGURE OPTIONAL ADDONS</Typography>

            <div className="flex flex-row gap-5 flex-wrap justify-center">
                <div className="rounded-md p-3" style={{ border: '1px solid var(--red)' }}>
                    <div className="flex flex-row justify-between">
                        <Typography fontWeight={700} fontSize={30} align='left'>Quality of Life</Typography>
                        <Switch checked={false} onChange={(e) => { }} />
                    </div>

                    <Divider className="my-3" />

                    <div>
                        {qolList.map(mod => <Mod key={mod.id} type="qol" details={mod} />)}
                    </div>
                </div>

                <div className="rounded-md p-3" style={{ border: '1px solid var(--red)' }}>
                    <div className="flex flex-row justify-between">
                        <Typography fontWeight={700} fontSize={30} align='left'>Graphical Effects</Typography>
                        <Switch checked={false} onChange={(e) => { }} />
                    </div>

                    <Typography fontWeight={400} fontSize={15} align='left'>These addons may <b>significantly</b> effect your performance.</Typography>

                    <Divider className="my-3" />

                    <div>
                        {gfxList.map(mod => <Mod key={mod.id} type="gfx" details={mod} />)}
                    </div>
                </div>

                <div className="rounded-md p-3" style={{ border: '1px solid var(--red)' }}>
                    <div className="flex flex-row justify-between">
                        <Typography fontWeight={700} fontSize={30} align='left'>Zeus</Typography>
                        <Switch checked={false} onChange={(e) => { }} />
                    </div>

                    <Divider className="my-3" />

                    <div>
                        {zeusList.map(mod => <Mod key={mod.id} type="zeus" details={mod} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}


function Mod({ type, details }: { type: 'qol' | 'gfx' | 'zeus', details: { id: string, name: string } }) {

    const [enabled, setEnabled] = useState<boolean | null>(null)

    useEffect(() => {
        fetch(`/optionals/me?type=${type}&id=${details.id}`)
            .then(res => res.json())
            .then(json => {
                if (json.error) return console.error(json.error)
                if (json.enabled) setEnabled(true)
                else setEnabled(false)
            })
    }, [])

    return (
        <div className="flex flex-row justify-between items-center" style={{ borderBottom: '1px solid var(--grey)' }}>
            <Typography fontWeight={enabled ? 600 : 400} align='left'>{details.name}</Typography>
            <Switch checked={enabled || false} onChange={(e) => setEnabled(e.currentTarget.checked)} />
        </div>
    )
}