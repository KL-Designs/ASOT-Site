import client from '@/lib/auth'
import { connection } from 'next/server'
import { redirect } from 'next/navigation'

import { Paper, Divider, Typography, Button } from '@mui/material'
import { Person, Badge, Groups, Hive } from '@mui/icons-material'

import Card from './card'
import Members from './members'



export default async function Page() {

    await connection()

    const member = await client.fetchMe()
    if (!member.hasRoles(['All Staff'])) return redirect('/dashboard')



    return (
        <div className='h-full w-full p-10 pt-[100px]'>
            <div className='m-auto flex flex-col gap-5'>

                <div className='grid grid-cols-1 gap-5'>
                    <Card title='Members' icon={<Person sx={{ fontSize: 50 }} />}>
                        <Members />
                    </Card>
                </div>

                <div className='grid grid-cols-3 gap-5'>
                    <Card title='Roles' icon={<Badge sx={{ fontSize: 50 }} />}>

                    </Card>

                    <Card title='Sections' icon={<Groups sx={{ fontSize: 50 }} />}>

                    </Card>

                    <Card title='Platoons' icon={<Hive sx={{ fontSize: 50 }} />}>

                    </Card>
                </div>

            </div>
        </div>
    )
}