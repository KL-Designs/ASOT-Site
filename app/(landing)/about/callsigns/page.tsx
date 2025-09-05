import { Metadata } from "next"

import { Typography, Divider } from '@mui/material'

import { ContentWithImage } from '@/components/content'

import Image_0A from '@/public/images/home/callsigns/0A.jpg'
import Image_10 from '@/public/images/home/callsigns/10.jpg'
import Image_11 from '@/public/images/home/callsigns/11.jpg'
import Image_12 from '@/public/images/home/callsigns/12.jpg'
import Image_130 from '@/public/images/home/callsigns/130.jpg'
import Image_13E from '@/public/images/home/callsigns/13E.jpg'
import Image_13G from '@/public/images/home/callsigns/13G.jpg'
import Image_13H1 from '@/public/images/home/callsigns/13H1.jpg'
import Image_13H2 from '@/public/images/home/callsigns/13H2.jpg'
import Image_13M from '@/public/images/home/callsigns/13M.jpg'
import Image_13V from '@/public/images/home/callsigns/13V.jpg'
import Image_GM from '@/public/images/home/callsigns/GM.jpg'
import Image_R from '@/public/images/home/callsigns/R.jpg'


export const metadata: Metadata = {
	title: "Callsigns | Australian Special Operations Taskforce"
}



export default function Tab() {
	return (
		<>
			<ContentWithImage title='0A' images={[Image_0A]} imageSide='left' imagePos='center' titlePos='center'>
				<Typography>India 0A is the commanding officer and unit owner callsign that oversees management and operation of the entire unit.</Typography>
				<br />
				<Typography>The responsibilities are;</Typography>
				<br />
				<Typography>- Overall command of all assets and call signs in game.</Typography>
				<Typography>- Admin related to the community. (Mods, documentation and development)</Typography>
				<Typography>- Management of all group departments and staff.</Typography>
				<Typography>- Oversees all staff and unit management.</Typography>
				<br />
				<Typography>If not operating on the ground as a HQ element, 0A assists call signs by filling empty staff slots for missions, helping out Zeus’s when required and then simply filling empty spots in other call signs.</Typography>
				<br />
				<Typography>0A is comprised of the commanding officer.</Typography>
			</ContentWithImage>

			<Divider />

			<ContentWithImage title='1-0' images={[Image_10]} imageSide='right' imagePos='center' titlePos='center'>
				<Typography>India 1-0 is the lead call sign and HQ of the group that manages all other call signs both in and out of game.</Typography>
				<br />
				<Typography>They are responsible for;</Typography>
				<br />
				<Typography>- Majority of command of all assets and call signs in game.</Typography>
				<Typography>- Admin related to the community. (Mods, documentation and development)</Typography>
				<Typography>- Management of all group departments and staff.</Typography>
				<br />
				<Typography>If not operating on the ground as a HQ element, 1-0 assists call signs by filling empty staff slots for missions, helping out Zeus’s when required and then simply filling empty spots in other call signs.</Typography>
				<br />
				<Typography>1-0 is comprised of a 4 man team which includes the company XO, ADJ, RSM and CSM.</Typography>
			</ContentWithImage>

			<Divider />

			<ContentWithImage title='1-0 Zulu / Game Masters' images={[Image_GM]} imageSide='left' imagePos='center' titlePos='center'>
				<Typography>Game masters are our Zeus team who provide a capability that is critical to the running and experience of our missions.</Typography>
				<br />
				<Typography>They are responsible for;</Typography>
				<br />
				<Typography>- Control and placement of enemy, civilian and independent forces for the duration of the mission.</Typography>
				<Typography>- Setting up of objectives and events relating to the missions story line.</Typography>
				<Typography>- Ensuring members experience a well-balanced, active and enjoyable mission.</Typography>
				<br />
				<Typography>Game Masters is a team comprised of 6 permanent members and a pool of part time members.</Typography>
			</ContentWithImage>

			<Divider />

			<ContentWithImage title='1-1' images={[Image_11]} imageSide='right' imagePos='center' titlePos='center'>
				<Typography id='1-1'>India 1-1 is one of our infantry platoons which are the main fighting force of the unit.</Typography>
				<br />
				<Typography>They are responsible for;</Typography>
				<br />
				<Typography>- Providing the main fighting capability to the task force.</Typography>
				<Typography>- Utilising a variety weapons, vehicles and equipment to provide a diverse capability to the unit.</Typography>
				<br />
				<Typography>1-1 is a platoon comprising of 3 x 8 man sections and a 4 man platoon headquarters.</Typography>
			</ContentWithImage>

			<Divider />

			<ContentWithImage title='1-2' images={[Image_12]} imageSide='left' imagePos='center' titlePos='center'>
				<Typography id='1-2'>India 1-2 is one of our infantry platoons which are the main fighting force of the unit.</Typography>
				<br />
				<Typography>They are responsible for;</Typography>
				<br />
				<Typography>- Providing the main fighting capability to the task force.</Typography>
				<Typography>- Utilising a variety weapons, vehicles and equipment to provide a diverse capability to the unit.</Typography>
				<br />
				<Typography>1-2 is a platoon comprising of 3 x 8 man sections and a 4 man platoon headquarters.</Typography>
			</ContentWithImage>

			<Divider />

			<ContentWithImage title='1-3-0' images={[Image_130]} imageSide='right' imagePos='center' titlePos='center'>
				<Typography id='1-3'>India 1-3-0 is the HQ element of the 1-3 support platoon.</Typography>
				<br />
				<Typography>They are responsible for;</Typography>
				<br />
				<Typography>- Command of all assets in 1-3 both in and out of game.</Typography>
				<Typography>- Admin related to 1-3 platoon.</Typography>
				{/* <Typography>- Reinforcing 1-3 support positions when required.</Typography> */}
				<br />
				<Typography>If not operating on the ground as a HQ element, 1-3 HQ assists call signs by filling empty 1-3 slots for missions, helping out Zeus’s when required and then simply filling empty slots in other call signs.</Typography>
				<br />
				<Typography>1-3-0 is comprised of a 5 man section which includes the Group Captain, Troop Commander, Battery Commander, Sapper Sergeant and a Medical Sergeant.</Typography>
			</ContentWithImage>

			<Divider />

			<ContentWithImage title='1-3 Echo' images={[Image_13E]} imageSide='left' imagePos='center' titlePos='center'>
				<Typography>1-3 Echo is our combat engineers asset that provides the task force with a wide variety of capabilities.</Typography>
				<br />
				<Typography>They are responsible for;</Typography>
				<br />
				<Typography>- Providing explosive detection, disposal and demolitions.</Typography>
				<Typography>- Providing CBRN protection equipment and decontamination for personnel, assets and vehicles.</Typography>
				<Typography>- Constructing FOB’s, defences and other required structures.</Typography>
				<Typography>- Providing ground based logistical support.</Typography>
				<Typography>- Managing and providing transport for prisoners, high value targets and VIP’s.</Typography>
				<br />
				<Typography>Echo is comprised of 2x 5 man sections.</Typography>
			</ContentWithImage>

			<Divider />

			<ContentWithImage title='1-3 Golf' images={[Image_13G]} imageSide='right' imagePos='center' titlePos='center'>
				<Typography>1-3 Golf is our direct fires support weapons (DFSW) asset that primarily provides indirect fires capability. Golf is also able to provide direct fires if required.</Typography>
				<br />
				<Typography>They are responsible for;</Typography>
				<br />
				<Typography>- Supporting ground forces with the use of indirect fires including mortars, fixed and mobile artillery.</Typography>
				<Typography>- Providing an increased anti-tank and anti-air capability with the use of mobile launchers.</Typography>
				<Typography>- Supporting ground forces with the use of direct fires including HMG, MMG and GMG static weaponry.</Typography>
				<br />
				<Typography>Golf is comprised of a 6 man section.</Typography>
			</ContentWithImage>

			<Divider />

			<ContentWithImage title='1-3 Hotel' images={[Image_13H1, Image_13H2]} imageSide='left' imagePos='center' titlePos='center'>
				<Typography>1-3 Hotel is our rotary air support asset that provides the task force with a variety of logistical and close air support capability.</Typography>
				<br />
				<Typography>They are responsible for;</Typography>
				<br />
				<Typography>- Providing air lift capability of personnel and vehicles into the area of operations.</Typography>
				<Typography>- Providing an air logistical capability by conducting supply drops.</Typography>
				<Typography>- Providing battlefield commentary to the CO via observation.</Typography>
				<Typography>- Providing close air support to ground units.</Typography>
				<br />
				<Typography>Hotel is comprised of 2x 6 man sections.</Typography>
			</ContentWithImage>

			<Divider />

			<ContentWithImage title='1-3 Mike' images={[Image_13M]} imageSide='right' imagePos='center' titlePos='center'>
				<Typography>1-3 Mike is our medical emergency response team (MERT) who provide rapid and increased medical support to mass casualty incidents and other medical situations.</Typography>
				<br />
				<Typography>They are responsible for;</Typography>
				<br />
				<Typography>- Providing all call signs with a rapid responding and effective medical team when a call sign cannot manage it independently.</Typography>
				<Typography>- Providing resupply of medical equipment and supplies to call signs.</Typography>
				<Typography>- Conducting handling and backloading of severely wounded and/or deceased members, civilians, HVT’s and VIP’s.</Typography>
				<br />
				<Typography>Mike is comprised of 2x 4 man sections.</Typography>
			</ContentWithImage>

			<Divider />

			<ContentWithImage title='1-3 Victor' images={[Image_13V]} imageSide='left' imagePos='center' titlePos='center'>
				<Typography>Victor 1-3 is the cavalry and armoured support call sign for the company.</Typography>
				<br />
				<Typography>They are responsible for;</Typography>
				<br />
				<Typography>- Providing heavy firepower to call signs and increasing the company’s anti-vehicle capability.</Typography>
				<Typography>- Providing reconnaissance capability to headquarters and other call signs.</Typography>
				<Typography>- Providing armoured transport capability to dismounted units.</Typography>
				<br />
				<Typography>The Victor call sign usually operates in a mounted role utilising APC’s, tanks, IFV’s and other vehicles. Although, the Victor crews are able to dismount and operate as one or multiple teams when required.</Typography>
				<br/>
				<Typography>Victor is comprised of 4x 3 man crews.</Typography>
			</ContentWithImage>

			<Divider />

			<ContentWithImage title='Reservists' images={[Image_R]} imageSide='right' imagePos='center' titlePos='center'>
				<Typography>Reservists are our members who are awaiting a position to open in another call sign or who cannot commit to the expected attendance requirements.</Typography>
				<br />
				<Typography>They are responsible for;</Typography>
				<br />
				<Typography>- Filling in positions where members may be away for a Sunday mission.</Typography>
				<Typography>- Providing the ability to bolster call signs strengths when required for particular missions. Eg: Increasing a sections strength to 10 men.</Typography>
				<Typography>- Allowing members to maintain a lower attendance rate due to real life commitments or events whilst still being able to be apart of the community.</Typography>
				<br />
				<Typography>We have a flexible number of reservist slots.</Typography>
			</ContentWithImage>
		</>
	)
}