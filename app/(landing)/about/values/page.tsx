import { Metadata } from "next"

import { Typography, Divider } from '@mui/material'

import Content from '@/components/content'


export const metadata: Metadata = {
	title: "Principles and Values | Australian Special Operations Taskforce"
}



export default function Tab() {
	return (
		<div className="flex flex-col gap-20">

			<div className="flex flex-col gap-4">
				<div className="flex flex-col justify-center">
					<h2 style={{ textAlign: 'center', fontWeight: 500, fontSize: 50 }}>Core Values</h2>
					<i className="text-center">Who we are as a community</i>
				</div>
				<Divider />
				<div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
					<Content title='Community'>
						<Typography>ASOT exists first and foremost as a community. We value connection, camaraderie, and shared experiences both inside and outside Arma 3. Members are encouraged to engage beyond operations, whether that’s playing other games, hanging out in voice, or just being part of the group.</Typography>
					</Content>


					<Content title='Welcoming'>
						<Typography>We actively foster an environment where new and existing members feel welcome, respected, and comfortable being themselves. No one should feel like an outsider, regardless of gaming experience, personal background, or level of familiarity with milsim communities.</Typography>
					</Content>


					<Content title='Respect'>
						<Typography>We treat each other with respect at all times. This includes how we communicate, how we handle disagreements and discipline, and how we represent the unit publicly. Respect underpins trust, cohesion, and long-term community health.</Typography>
					</Content>


					<Content title='Enjoyment'>
						<Typography>At its core, ASOT exists so people can enjoy themselves. While we take our gameplay seriously, we never lose sight of the fact that this is a game and a shared hobby meant to be fun, engaging, and rewarding.</Typography>
					</Content>
				</div>
			</div>

			<div className="flex flex-col gap-4">
				<div className="flex flex-col justify-center">
					<h2 style={{ textAlign: 'center', fontWeight: 500, fontSize: 50 }}>Operating Principles</h2>
					<i className="text-center">How we play, train, and conduct ourselves</i>
				</div>
				<Divider />
				<div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
					<Content title='Professionalism'>
						<Typography>We approach missions, training, and leadership with professionalism. This means clear communication, preparation, accountability, and taking objectives seriously without unnecessary ego or toxicity.</Typography>
					</Content>


					<Content title='Competence'>
						<Typography>We strive to be skilled, capable, and reliable. Members are encouraged to improve their individual skills and teamwork so the unit functions effectively across a wide range of scenarios and roles.</Typography>
					</Content>


					<Content title='Realism with Purpose'>
						<Typography>We use realism to enhance immersion, decision-making, and teamwork, not to create frustration or gatekeeping. Realism exists to support enjoyable, believable gameplay rather than strict simulation for its own sake.</Typography>
					</Content>


					<Content title='Operational Flexibility'>
						<Typography>ASOT embraces a broad scope of operations. We are not limited to special operations forces and actively engage in conventional military roles, varied mission types, and diverse operational environments to keep gameplay fresh and challenging.</Typography>
					</Content>
				</div>
			</div>

		</div>
	)
}