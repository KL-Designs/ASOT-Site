'use client'

import { useEffect, useState } from "react"


export default function MemberCount() {

    const [count, setCount] = useState<number | null>(null)

    useEffect(() => {
        fetch('/api/membercount')
            .then(res => res.json())
            .then(data => setCount(data.count))
    })


    return (
        <>{count || '---'}</>
    )
}