import fs from 'fs'
import Db from '@/lib/mongo'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import { Typography, Button, Divider } from '@mui/material'
import { VolunteerActivism } from '@mui/icons-material'

import Card from './card'



export default async function Page() {

	const members = await Db.milpacs.find({}).toArray()
	
	// const sections = fs.readdirSync('./milpacs')
	// sections.forEach(s => {
	// 	fs.readdirSync(`./milpacs/${s}`).forEach(m => {
	// 		const c: Milpac = JSON.parse(fs.readFileSync(`./milpacs/${s}/${m}`, 'utf8'))
	// 		c['section'] = s
	// 		members.push(c)
	// 	})
	// })

	return (
		<div className='flex flex-col gap-20'>
			<div className='flex flex-col gap-5'>
				<Typography sx={{ textTransform: 'uppercase' }} className='text-[40px]' variant='h2' align='center' fontWeight={700} fontFamily={'inherit'} letterSpacing={4}>
					India Company Headquarters
				</Typography>

				<div className='flex justify-center gap-5'>
					<Card milpac={members.find(m => m._id === '224086573560365057')} />
				</div>

				<div className='flex justify-center gap-5'>
					<Card milpac={members.find(m => m._id === '325502946781691916')} />
				</div>

				<div className='flex justify-center gap-5'>
					<Card milpac={members.find(m => m._id === '166798494424760320')} />
					<Card milpac={members.find(m => m._id === '1344770342006034595')} />
					<Card milpac={members.find(m => m._id === '256691919969714176')} />
				</div>
			</div>


			<Divider />


			<div className='flex flex-col gap-5'>
				<Typography sx={{ textTransform: 'uppercase' }} className='text-[40px]' variant='h2' align='center' fontWeight={700} fontFamily={'inherit'} letterSpacing={4}>
					1st Platoon Headquarters
				</Typography>

				<div className='flex flex-wrap justify-center gap-5'>
					{members.map(m => m.section === '1-1' ? <Card key={m._id} milpac={m} /> : null)}
				</div>
			</div>

			<div className='flex flex-col gap-5'>
				<Typography sx={{ textTransform: 'uppercase' }} className='text-[40px]' variant='h2' align='center' fontWeight={700} fontFamily={'inherit'} letterSpacing={4}>
					1-1 Alpha
				</Typography>

				<div className='flex flex-wrap justify-center gap-5'>
					{members.map(m => m.section === '1-1-1' ? <Card key={m._id} milpac={m} /> : null)}
				</div>
			</div>

			<div className='flex flex-col gap-5'>
				<Typography sx={{ textTransform: 'uppercase' }} className='text-[40px]' variant='h2' align='center' fontWeight={700} fontFamily={'inherit'} letterSpacing={4}>
					1-1 Bravo
				</Typography>

				<div className='flex flex-wrap justify-center gap-5'>
					{members.map(m => m.section === '1-1-2' ? <Card key={m._id} milpac={m} /> : null)}
				</div>
			</div>

			<div className='flex flex-col gap-5'>
				<Typography sx={{ textTransform: 'uppercase' }} className='text-[40px]' variant='h2' align='center' fontWeight={700} fontFamily={'inherit'} letterSpacing={4}>
					1-1 Charlie
				</Typography>

				<div className='flex flex-wrap justify-center gap-5'>
					{members.map(m => m.section === '1-1-3' ? <Card key={m._id} milpac={m} /> : null)}
				</div>
			</div>


			<Divider />


			<div className='flex flex-col gap-5'>
				<Typography sx={{ textTransform: 'uppercase' }} className='text-[40px]' variant='h2' align='center' fontWeight={700} fontFamily={'inherit'} letterSpacing={4}>
					2nd Platoon Headquarters
				</Typography>

				<div className='flex flex-wrap justify-center gap-5'>
					{members.map(m => m.section === '1-2' ? <Card key={m._id} milpac={m} /> : null)}
				</div>
			</div>

			<div className='flex flex-col gap-5'>
				<Typography sx={{ textTransform: 'uppercase' }} className='text-[40px]' variant='h2' align='center' fontWeight={700} fontFamily={'inherit'} letterSpacing={4}>
					1-2 Alpha
				</Typography>

				<div className='flex flex-wrap justify-center gap-5'>
					{members.map(m => m.section === '1-2-1' ? <Card key={m._id} milpac={m} /> : null)}
				</div>
			</div>

			<div className='flex flex-col gap-5'>
				<Typography sx={{ textTransform: 'uppercase' }} className='text-[40px]' variant='h2' align='center' fontWeight={700} fontFamily={'inherit'} letterSpacing={4}>
					1-2 Bravo
				</Typography>

				<div className='flex flex-wrap justify-center gap-5'>
					{members.map(m => m.section === '1-2-2' ? <Card key={m._id} milpac={m} /> : null)}
				</div>
			</div>

			<div className='flex flex-col gap-5'>
				<Typography sx={{ textTransform: 'uppercase' }} className='text-[40px]' variant='h2' align='center' fontWeight={700} fontFamily={'inherit'} letterSpacing={4}>
					1-2 Charlie
				</Typography>

				<div className='flex flex-wrap justify-center gap-5'>
					{members.map(m => m.section === '1-2-3' ? <Card key={m._id} milpac={m} /> : null)}
				</div>
			</div>
		</div>
	)
}