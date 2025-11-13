'use client'

import { useEffect, useState } from "react"

import { Button, Typography, Divider, Switch } from '@mui/material'
import { ChevronRight } from '@mui/icons-material'


export default function Page() {

    const [qolList, setQolList] = useState<{ id: string, name: string }[]>([])
    const [gfxList, setGfxList] = useState<{ id: string, name: string }[]>([])
    const [zeusList, setZeusList] = useState<{ id: string, name: string }[]>([])

    const [qolAll, setQolAll] = useState(false)

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


    function Mod({ type, details }: { type: 'qol' | 'gfx' | 'zeus', details: { id: string, name: string } }) {
        const [enabled, setEnabled] = useState<boolean | null>(null)

        useEffect(() => {
            fetch(`/optionals/me?type=${type}&id=${details.id}&mode=check`)
                .then(res => res.json())
                .then(json => {
                    if (json.error) return console.error(json.error)
                    if (json.enabled) setEnabled(true)
                    else setEnabled(false)
                })
        }, [])

        useEffect(() => {
            if (enabled === null) return
            if (enabled) fetch(`/optionals/me?type=${type}&id=${details.id}&mode=add&name=${encodeURIComponent(details.name)}`)
                .then(res => res.json())
                .then(json => {
                    if (json.error) return console.error(json.error)
                })

            else fetch(`/optionals/me?type=${type}&id=${details.id}&mode=remove`)
                .then(res => res.json())
                .then(json => {
                    if (json.error) return console.error(json.error)
                })
        }, [enabled])

        return (
            <div className="flex flex-row justify-between items-center" style={{ borderBottom: '1px solid var(--grey)' }}>
                <Typography fontWeight={enabled ? 600 : 400} align='left'>{details.name}</Typography>
                <Switch checked={enabled || false} onChange={(e) => { setEnabled(e.currentTarget.checked); }} />
            </div>
        )
    }


    return (
        <div>
            <div className="mb-5 flex flex-row justify-between">
                <div>
                    <Typography fontWeight={700} fontSize={50} letterSpacing={4} align='left'>CONFIGURE OPTIONAL ADDONS</Typography>
                    <Typography fontWeight={300} fontSize={20} align='left'>Some addons have a big effect on performance.<br />For the best experience, only enable addons you know and use regularly.</Typography>
                </div>

                <div>
                    <Typography fontWeight={300} fontSize={20} letterSpacing={4} align='right'>KNOWN FPS HITS</Typography>
                    <Divider />
                    <Typography fontWeight={200} fontSize={20} letterSpacing={4} align='right'>Athena -</Typography>
                    <Typography fontWeight={200} fontSize={20} letterSpacing={4} align='right'>Blastcore -</Typography>
                    <Typography fontWeight={200} fontSize={20} letterSpacing={4} align='right'>Bloodlust+ -</Typography>
                    <Typography fontWeight={200} fontSize={20} letterSpacing={4} align='right'>Enhanced Missile Smoke -</Typography>
                    <Typography fontWeight={200} fontSize={20} letterSpacing={4} align='right'>Depressed Lighting -</Typography>
                    <Typography fontWeight={200} fontSize={20} letterSpacing={4} align='right'>A3 Thermal Improvement -</Typography>
                </div>
            </div>

            <div className="flex flex-row gap-5 flex-wrap justify-center">
                <div className="rounded-md p-3" style={{ border: '1px solid var(--red)' }}>
                    <div className="flex flex-row justify-between">
                        <Typography fontWeight={700} fontSize={30} align='left'>Quality of Life</Typography>
                        {/* <Switch checked={qolAll} onChange={(e) => setQolAll(e.currentTarget.checked)} /> */}
                    </div>

                    <Divider className="my-3" />

                    <div>
                        {qolList.map(mod => <Mod key={mod.id} type="qol" details={mod} />)}
                    </div>
                </div>

                <div className="rounded-md p-3" style={{ border: '1px solid var(--red)' }}>
                    <div className="flex flex-row justify-between">
                        <Typography fontWeight={700} fontSize={30} align='left'>Graphical Effects</Typography>
                        {/* <Switch checked={false} onChange={(e) => { }} /> */}
                    </div>

                    <Typography fontWeight={400} fontSize={15} align='left'>Some of these addons may <b>significantly</b> effect your performance.</Typography>

                    <Divider className="my-3" />

                    <div>
                        {gfxList.map(mod => <Mod key={mod.id} type="gfx" details={mod} />)}
                    </div>
                </div>

                <div className="rounded-md p-3" style={{ border: '1px solid var(--red)' }}>
                    <div className="flex flex-row justify-between">
                        <Typography fontWeight={700} fontSize={30} align='left'>Zeus</Typography>
                        {/* <Switch checked={false} onChange={(e) => { }} /> */}
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