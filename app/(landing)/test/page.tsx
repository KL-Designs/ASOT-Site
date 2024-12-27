'use client'
import { Button } from '@mui/material'
import Link from 'next/link'
import './test.css'



export default function page() {
    return (
        <div className="mt-[100px]">
            <p className='testp'>hello</p>
            <Link href='https://www.youtube.com/watch?v=shEKWK4gZOA'><Button variant='contained' className='m-5'>hello button</Button></Link>
        </div>
    )
}