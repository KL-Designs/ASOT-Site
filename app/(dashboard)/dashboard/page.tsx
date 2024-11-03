import { Member } from '@/lib/auth'
import { connection } from 'next/server'
import { redirect } from 'next/navigation'

import Link from 'next/link'

import { Paper, Divider, Typography, Button } from '@mui/material'
import { Person, MilitaryTech, Collections } from '@mui/icons-material'



export default async function Page() {

    await connection()

    const auth = new Member()
    const roles = await auth.fetchRoles()
    if (!roles) return redirect('/login')

    return (
        <div className='h-full w-full p-10 pt-[100px]'>
            <div className='m-auto max-w-[500px] flex flex-col justify-center gap-5'>

                <Link href='/account'><Button variant='contained' fullWidth startIcon={<Person />}>My Account</Button></Link>
                <Link className={auth.hasRoles(['J5 - Milpac Staff', 'Dedi Admin']) ? 'visible' : 'hidden'} href='/dashboard/milpac'><Button variant='contained' fullWidth startIcon={<MilitaryTech />}>MILPAC Admin</Button></Link>
                <Link className={auth.hasRoles(['J5-Media', 'Dedi Admin']) ? 'visible' : 'hidden'} href='/dashboard/gallery'><Button variant='contained' fullWidth startIcon={<Collections />}>Gallery Manager</Button></Link>

            </div>
        </div>
    )
}