import { Paper, Divider, Typography, Button } from '@mui/material'
import { Person, MilitaryTech, Collections } from '@mui/icons-material'



export default function Card({ children, title, icon }: { children?: React.ReactNode, title: string, icon: React.ReactNode }) {

    return (
        <Paper elevation={1} className='p-5 flex flex-col items-center justify-center'>
            {icon}
            <Typography variant='h5' className='mt-1'>{title}</Typography>

            <Divider className='w-full my-4' />

            <Paper elevation={2}>
                {children}
            </Paper>
        </Paper>
    )
}