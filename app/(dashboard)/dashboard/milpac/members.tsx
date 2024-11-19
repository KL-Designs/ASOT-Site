'use client'

import { useEffect, useState } from 'react'



export default function Members() {

    const [members, setMembers] = useState<User[]>([])


    useEffect(() => {

        fetch('/api/unit/members')
            .then(res => res.json())
            .then(data => setMembers(data))


    }, [])


    function Member({ member }: { member: User }) {
        return (
            <div>
                <h1>{member.discord.username}</h1>
            </div>
        )
    }


    return (
        <div className='flex flex-col gap-4'>
            {members.map(member => (
                <Member key={member._id.toString()} member={member} />
            ))}
        </div>
    )
}