'use client'

import { Button } from '@mui/material'
import { AddBox } from '@mui/icons-material'

export default function Comp() {

    function createMission() {
        fetch('/operations/new')
            .then(res => res.json())
            .then(json => {
                if (json.error) return alert(json.error)
                alert (json.id)
            })
    }

    return (
        <>
            <Button variant='contained' onClick={createMission}><AddBox /> New Mission</Button>
        </>
    )
}