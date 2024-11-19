import { Paper, Divider, Typography, Button } from '@mui/material'
import { Person, Badge, Groups, Hive, Edit } from '@mui/icons-material'



export default function Member({ member }: { member: GuildMember }) {
    return (
        <Paper className='p-5 flex justify-between'>

            <div className='flex flex-col justify-between'>
                <div>
                    <Typography variant='h6'>{member.nick}</Typography>
                    <Typography>{member.user.username}</Typography>
                    <Typography variant='caption'>{member.user.id}</Typography>
                </div>

                <div>
                    <Button variant='contained' startIcon={<Edit />}>Edit Member</Button>
                </div>
            </div>

            <div className='relative'>
                <img alt='Profile Picture' src={`https://cdn.discordapp.com/avatars/${member.user.id}/${member.user.avatar}?size=128`} style={{ borderRadius: '100%' }} />
            </div>

        </Paper>
    )
}