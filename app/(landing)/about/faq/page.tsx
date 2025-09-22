import { Metadata } from "next"

import { Typography } from '@mui/material'

import Content from '@/components/content'


export const metadata: Metadata = {
	title: "FAQ | Australian Special Operations Taskforce"
}



export default function Tab() {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 gap-16'>

			<Content title='Is there an age requirement to join ASOT?'>
				<Typography>You must be 17+ in order to join our group or be vouched for by a current member. We will consider mature younger players.</Typography>
			</Content>


			<Content title='Are there player location restrictions?'>
				<Typography>If you are from Australia or New Zealand, there will be no issues for you. If you are not in these countries, please let us know alongside your SteamID64 and we can advise you if joining is a possibility.</Typography>
			</Content>


			<Content title='Do I need a microphone to join ASOT?'>
				<Typography>Yes. All members require a working microphone.</Typography>
			</Content>


			<Content title='I am already part of another ARMA 3 modern MILSIM community, can I still join?'>
				<Typography>Being a member of other MILSIM/REALISM groups similar or different to ASOT regardless of times of play are not permitted. If you are, or wish to get involved in a RP community or other group, you are welcome to do so. For example, this would include groups that play on separate nights AND also use a significantly varied play style, such as a Star Wars or fantasy community.</Typography>
				<br />
				<Typography>Please confirm with our staff if your alternate group conflicts.</Typography>
			</Content>


			<Content title='Do you force first person?'>
				<Typography>Yes.</Typography>
			</Content>


			<Content title='Do I need a paid version of ARMA 3 to join ASOT?'>
				<Typography>Yes. You must have a legitimate copy of ARMA 3 as our servers use Battleye anti-cheat software. If it is discovered you are using an illegal copy or using cheats of any kind, you will be banned from the community immediately.</Typography>
			</Content>


			<Content title='Do I need ARMA 3 DLC to play?'>
				<Typography>Although encouraged, you will not require them to join our servers. Although, you will not be able to use certain vehicles and equipment without getting the annoying watermark appear on your screen. We recommend picking them up when they go on sale.</Typography>
			</Content>


			<Content title='What mods do you use?'>
				<Typography>We currently have 1 mod list that we use for our missions and on our training server.</Typography>
				<br />
				<Typography>Main Modlist:</Typography>
				<Typography><a className='underline break-words' href='https://steamcommunity.com/sharedfiles/filedetails/?id=2461898157' target='_blank'>https://steamcommunity.com/sharedfiles/filedetails/?id=2461898157</a></Typography>
				<br />
				<Typography>Any other mission mod lists will be posted in the discord noticeboard channel.</Typography>
			</Content>


			<Content title='Do you ever do PvP events against other groups or in house?'>
				<Typography>Occasionally PvP events are hosted in house but our main focus is PvE. These events are optional for members and will generally not interfere with our weekend night missions.</Typography>
			</Content>


			<Content title='Does it cost money to play?'>
				<Typography>No, however, running the community does carry some costs that are mostly paid for by LTGEN Thomas and his head staff. Any donations are truly appreciated and will significantly help with covering those bills each month. All donations only go towards the community costs, no personal profits are kept, ever!</Typography>
			</Content>


			<Content title='How often do you play?'>
				<Typography>Our main operations are run weekly on Saturdays and Sundays which are the one we ask members to commit to.</Typography>
				<br />
				<Typography>Once you become a member, you will be given the opportunity to join 1 Platoon, 2 Platoon or 3 Platoon.</Typography>
				<br />
				<Typography>- 1 Platoon conducts missions on Saturday</Typography>
				<Typography>- 2 Platoon conducts missions on Sunday</Typography>
				<Typography>- 3 Platoon (support assets) support both Saturday and Sunday</Typography>
				<br />
				<Typography>We also run mid-week missions and trainings but these are optional.</Typography>
				<br />
				<Typography>New recruits are only required to complete Basic Combat Training Stage 1 (BCT1) to participate in operations. Training sessions are held regularly, and upon completing Stage 2 (BCT2), recruits will be promoted to the rank of Private.</Typography>
			</Content>


			<Content title='How many members do you have?'>
				<Typography>To see our current strength and manning, please refer to the ORBAT tab located at the top of the page.</Typography>
			</Content>


			<Content title='Do you allow non-members to join in operations?'>
				<Typography>Unfortunately not. Generally we do not allow members of the public or from other communities to join in our operations. If you are a representative of another community or smaller group, please speak to a member of HQ about attending.</Typography>
			</Content>


			<Content title='Do you do joint operations with other units?'>
				<Typography>Generally not but there have been instances where we have conducted joint operations with other MILSIM groups.</Typography>
				<Typography>If you wish to conduct a joint operation with our community and you are a representative of a community, please approach a member of ASOT Staff or HQ about this in our Discord.</Typography>
			</Content>

		</div>
	)
}