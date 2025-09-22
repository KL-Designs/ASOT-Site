'use client'

import Image from 'next/image'

import { Typography, Button } from '@mui/material'

import { useEffect, useState } from "react"


export default function Page() {

    const [data, setData] = useState<GalleryAPI['years']>([] as GalleryAPI['years'])
    const [year, setYear] = useState('')
    const [operation, setOperation] = useState('')
    const [stage, setStage] = useState('')

    useEffect(() => {
        fetch('/api/gallery')
            .then(res => res.json())
            .then((json: GalleryAPI) => {
                console.log(json)
                setData(json.years)

                const yearI = json.years.length - 1
                const operationI = json.years[yearI].operations.length - 1
                const stageI = json.years[yearI].operations[operationI].stages.length - 1

                setYear(json.years[yearI].year)
                setOperation(json.years[yearI].operations[operationI].operation)
                setStage(json.years[yearI].operations[operationI].stages[stageI].stage)
            })
            .catch(err => {
                console.error('Failed to fetch gallery data:', err)
            })
    }, [])

    return (
        <div className='min-h-[600px] w-full flex flex-row flex-wrap justify-center gap-5'>

            <div className='w-full flex flex-row flex-wrap gap-10 justify-center max-w-[1400px]'>
                <div className='flex flex-col gap-2 flex-grow'>
                    <Typography className='text-[40px]' variant='h1' align='center' fontWeight={700} fontFamily={'inherit'} letterSpacing={4}>
                        YEAR
                    </Typography>

                    {data.map((g) => (
                        <Button key={g.year} fullWidth variant='contained' color={g.year === year ? 'primary' : 'secondary'} onClick={() => setYear(g.year)}>{g.year}</Button>
                    )).reverse()}
                </div>

                <div className='flex flex-col gap-2 flex-grow max-w-[700px] md:max-w-[50%]'>
                    <Typography className='text-[40px]' variant='h1' align='center' fontWeight={700} fontFamily={'inherit'} letterSpacing={4}>
                        OPERATION
                    </Typography>

                    <div className='flex flex-row gap-2 flex-wrap justify-evenly'>
                        {data.find(g => g.year === year)?.operations.slice().sort((a, b) => {
                            const numA = parseInt(a.operation.match(/^\d+/)?.[0] || "0", 10)
                            const numB = parseInt(b.operation.match(/^\d+/)?.[0] || "0", 10)
                            return numA - numB
                        }).map(op => (
                            <Button key={op.operation} className='flex-grow' variant='contained' color={op.operation === operation ? 'primary' : 'secondary'} onClick={() => setOperation(op.operation)}>{op.operation}</Button>
                        ))}
                    </div>
                </div>

                <div className='flex flex-col gap-2 flex-grow'>
                    <Typography className='text-[40px]' variant='h1' align='center' fontWeight={700} fontFamily={'inherit'} letterSpacing={4}>
                        STAGE
                    </Typography>

                    {data.find(g => g.year === year)?.operations.find(op => op.operation === operation)?.stages.map(s => (
                        <Button key={s.stage} fullWidth variant='contained' color={s.stage === stage ? 'primary' : 'secondary'} onClick={() => setStage(s.stage)}>{s.stage}</Button>
                    ))}
                </div>
            </div>


            <div className='w-full flex flex-row flex-wrap gap-4 justify-center'>
                {data.find(g => g.year === year)?.operations.find(op => op.operation === operation)?.stages.find(s => s.stage === stage)?.media.map(img => (
                    <Image key={img} className='h-[200px] w-auto object-contain rounded-sm' src={`/api/gallery/fetch?img=${img}&stage=${stage}&operation=${operation}&year=${year}`} alt={img} width={0} height={200} unoptimized />
                ))}
            </div>

        </div>
    )
}
