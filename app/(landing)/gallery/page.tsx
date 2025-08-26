'use client'

import Image from 'next/image'

import { Typography, Button } from '@mui/material'

import { useEffect, useState } from "react"



export default function Page() {

	const [data, setData] = useState<GalleryAPI['years']>([] as GalleryAPI['years'])

	useEffect(() => {
        fetch('/api/gallery')
            .then(res => res.json())
            .then((json: GalleryAPI) => {
                console.log(json)
                setData(json.years)
            })
            .catch(err => {
                console.error('Failed to fetch gallery data:', err)
            })
	}, [])

	return (
		<>
            <p>{data.map(year => `Year: ${year.year}`)}</p>
        </>
	)
}
