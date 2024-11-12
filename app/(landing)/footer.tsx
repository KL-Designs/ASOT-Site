import { Typography, Divider } from '@mui/material'



export default function Footer() {
    return (
        <div className='p-8 px-10 w-full bg-[#131313] flex flex-col justify-center gap-y-2'
            style={{
                borderTop: '2px solid #db001d'
            }}>
            <Typography className='text-[20px]' variant='h3' align='center' fontWeight={600}>DISCLAIMER</Typography>
            <Divider />
            <Typography variant='body1' align='center'>ARMA 2™ ARMA 3™ and Bohemia Interactive™ are trademarks of Bohemia Interactive. Australian Special Operations Taskforce is an ArmA 3 online gaming community. We are not, in any way, affiliated, associated, authorized, endorsed by or officially connected with the Australian Defense Force or the Australian Government.</Typography>
        </div>
    )
}