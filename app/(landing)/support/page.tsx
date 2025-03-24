import { Metadata } from "next"
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

import { Typography } from '@mui/material'

import Container from "../container"
import { ContentText } from '../content'


import Banner from '@/public/images/home/support.jpg'
import ImgEmergency from '@/public/images/support/tripleZero.jpg'
import ImgLifeline from '@/public/images/support/lifeline.png'
import ImgBeyondBlue from '@/public/images/support/BeyondBlue.png'
import ImgSLV from '@/public/images/support/SLV.png'
import ImgMHWH from '@/public/images/support/MentalHealthWellbeingHub.png'
import ImgNOC from '@/public/images/support/NurseOnCall.png'
import Img13Health from '@/public/images/support/13health.jpg'
import ImgHealthline from '@/public/images/support/healthline.png'
import ImgLifeline2 from '@/public/images/support/lifeline2.png'
import ImgYouthline from '@/public/images/support/youthline.png'


export const metadata: Metadata = {
	title: "Support | Australian Special Operations Taskforce",
}



export default function Page() {
	return (
		<Container title="ASOT SUPPORT" background={Banner} sx={{ bannerHeight: 'md', maxWidth: 'max-w-md', gap: 'gap-16' }}>

			<ContentText title="You're not alone">
				<Typography>ASOT and it’s members understand that everyone, no matter your lifestyle, history or current situation, goes through hard times in life. Mental and physical health is extremely important and although most of us understand that, we can often neglect that fact and find ourselves struggling from time to time. And that is completely fine.</Typography>
				<br />
				<Typography>The first and often most difficult step is to reach out and ask for help. ASOT strives to create an environment where everyone has the opportunity and feels confident enough that they can reach out to ask for help, advice or to simply have someone to talk to.</Typography>
				<br />
				<Typography>This is our plan on how we achieve that.</Typography>
			</ContentText>

			<ContentText title="ASOT Community">
				<Typography>We aim to provide a community where everyone is welcome, comfortable and feels accepted. This includes persons from all walks of life, across multiple countries, all sorts of sexualities, genders, religious beliefs and more.</Typography>
				<br />
				<Typography>Therefore, the community we’ve created for our members is the first step in providing a safe, homely and enjoyable online environment for all to enjoy.</Typography>
			</ContentText>

			<ContentText title="ASOT Chaplains">
				<Typography>ASOT proudly boasts to have been the first Australian ARMA 3 mil sim unit to have dedicated roles for supporting it’s community members.</Typography>
				<br />
				<Typography>Although not professionally trained, ASOT chaplains are bound to strict confidentiality and other rules associated with protecting any members they talk to. They offer all current and ex-ASOT members an ear to talk to, a shoulder to cry on, or simply a outlet to vent to.</Typography>
				<br />
				<Typography>If our chaplains cannot provide the advise or care they believe is suitable or within their comfort zone, then they provide details to professional help available in that member’s area/country.</Typography>
				<br />
				<Typography>The ASOT chaplains can be found listed in the departments tab on the <Link href='/orbat' target="_blank" className="underline">ASOT ORBAT</Link> and can be contacted via direct message any time, any day.</Typography>
			</ContentText>

			<ContentText title="What do I do?">
				<Typography>Self harm and suicide is sometimes a difficult topic to talk about and can be even more difficult when you or someone close to you experiences difficulties.</Typography>
				<br />
				<Typography>If you have someone who confides in you and either hints towards or tells you that they are considering self-harm or suicide, here are some things you can do to help.</Typography>
				<br />
				<Typography className="underline">If you <b>are</b> comfortable discussing it with them;</Typography>
				<Typography>- Listen to them without judgement and encourage them to talk about their situation.</Typography>
				<Typography>- Show empathy for their situation and take them seriously.</Typography>
				<Typography>- Although hard to do online, do not leave them alone until someone can be with them in person or until they have contacted a health professional.</Typography>
				<Typography>- Discuss the ways that you can get them help and if they agree, follow it up regularly.</Typography>
				<br />
				<Typography className="underline">If you <b>are not</b> comfortable discussing it with them;</Typography>
				<Typography>Tell them you are willing and wanting to assist but are unable to provide the required level of assistance they may require/are asking for.</Typography>
				<Typography>If able and with the persons permission, contact someone who may be able to assist by taking over the situation or who can provide details on the next step.</Typography>
				<Typography>Attempt to have the person contact a health professional so they may take over the situation and provide the assistance required.</Typography>
			</ContentText>

			<ContentText title="Who can help?">
				<Typography>There are a large number of resources, hotlines and programs who can provide immediate guidance and help for a multitude of circumstances.</Typography>
				<Typography>If you are struggling with things in your life personally, or you are in contact with someone who may be struggling, then the resources below may be able to assist.</Typography>
			</ContentText>

			<div className="m-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">
				<SupportCard name="000" phone="112 (If you have no reception)" available="24/7" image={ImgEmergency}>
					<Typography align="center">If at any time you require immediate, emergency assistance, we recommend calling triple zero.</Typography>
					<Typography align="center">Even without ambulance cover, it’s free to have an ambulance or police come out to your location to provide care on site.</Typography>
				</SupportCard>

				<SupportCard name="Lifeline Australia" phone="13 11 14" link="https://www.lifeline.org.au" available="24/7" image={ImgLifeline}>
					<Typography align="center">They are a national charity providing all Australian’s experiencing emotional distress with access to 24 hour crisis support and suicide prevention services. They exist so that no person in Australia has to face their darkest moments alone.</Typography>
				</SupportCard>

				<SupportCard name="Beyond Blue" phone="1300 224 636" link="https://www.beyondblue.org.au" available="24/7" image={ImgBeyondBlue}>
					<Typography align="center">Your mental health is important. Some days are better than others and we all need a helping hand from time to time.</Typography>
					<Typography align="center">Wherever you are in your mental health journey, we’ll be here to help.</Typography>
				</SupportCard>

				<SupportCard name="SuicideLine" phone="1300 651 251" link="https://suicideline.org.au" available="24/7" image={ImgSLV}>
					<Typography align="center">Discovering that someone you care about has tried to end their life can be a devastating experience. They will need supporting. Know what to say to someone who has attempted suicide.</Typography>
				</SupportCard>

				<SupportCard name="Mental Health and Wellbeing Hubs" phone="1300 375 330" link="https://www.betterhealth.vic.gov.au" available="9am-10pm weekdays | 9am-5pm weekends" image={ImgMHWH}>
					<Typography align="center">Mental Health & Wellbeing Hubs can help you with a range of different issues, including lowered mood, anxiety, substance use or addiction, or any distress you may have.</Typography>
					<Typography align="center">The Hubs can also support people to address life stressors such as homelessness, financial difficulties and social isolation.</Typography>
				</SupportCard>

				<SupportCard name="NURSE-ON-CALL" phone="1300 60 60 24" link="https://www.health.vic.gov.au" available="24/7" location="Victoria" image={ImgNOC}>
					<Typography align="center">NURSE-ON-CALL puts you directly in touch with a registered nurse for caring, professional health advice around the clock.</Typography>
					<Typography align="center">If you think your situation is an emergency, you should always call 000 or go to an emergency department at a hospital.</Typography>
				</SupportCard>

				<SupportCard name="13 Health" phone="13 43 25 84" link="https://www.qld.gov.au/health" available="24/7" location="Queensland" image={Img13Health}>
					<Typography align="center">13 HEALTH is a confidential phone service that provides health advice to Queenslanders. You can phone and talk to a registered nurse 24 hours a day, 7 days a week for the cost of a local call.</Typography>
				</SupportCard>

				<SupportCard name="Healthline" phone="0800 611 116" link="https://www.healthy.org.nz" available="24/7" location="New Zealand" image={ImgHealthline}>
					<Typography align="center">Healthline is available for trusted health advice on treatment and information about what to do next. Support ranges from nurses, paramedics, advisors, and doctors who can help with prescriptions at any time, 24 hours a day, 7 days a week.</Typography>
					<Typography align="center">You can choose to speak with a Māori clinician if you’re calling between 8am - 8pm. Interpreter services are available and NZ Relay support</Typography>
				</SupportCard>

				<SupportCard name="Lifeline" phone="0508 828 865" link="https://www.lifeline.org.nz" available="24/7" location="New Zealand" image={ImgLifeline2}>
					<Typography align="center">TAUTOKO is operated by trained and experienced social service practitioners who have undergone suicide prevention training.</Typography>
					<Typography align="center">If you think you, or someone you know, may be thinking about suicide, call the Suicide Crisis Helpline for support.</Typography>
				</SupportCard>

				<SupportCard name="youthline" phone="0800 376 633" link="https://www.youthline.co.nz" available="24/7" location="New Zealand" image={ImgYouthline}>
					<Typography align="center">Youthline is an organisation that supports young people throughout Aotearoa New Zealand. Youthline is here to support all young people - this includes young people who are struggling (with their mental health or other issues), as well as young people who want to learn, grow and give back to their community.</Typography>
					<Typography align="center">Youthline offers free helpline service, free face-to-face counselling services, youth mentoring, programmes in schools and communities to help people grow and develop.</Typography>
				</SupportCard>
			</div>

		</Container>
	)
}



function SupportCard({ children, name, phone, link, available, location, image }: { children: React.ReactNode, name: string, phone: string, link?: string, available: string, location?: string, image: StaticImageData }) {
	return (
		<div className="flex flex-col gap-8">

			<div className="relative w-full h-[200px]">
				<Image src={image} alt={name} fill className="object-center object-contain" loading="eager" />
			</div>

			<div>
				<Typography variant="h5" fontWeight={700} align="center">{name}</Typography>
				<Typography align="center">{phone}</Typography>
				{link ? <Typography align="center"><Link className="underline" href={link}>{link}</Link></Typography> : null}
				<Typography className="mt-3" align="center"><u>Available:</u> {available}</Typography>
				{location ? <Typography align="center"><u>Location:</u> {location}</Typography> : null}
			</div>

			<div className="flex flex-col gap-4">
				{children}
			</div>

		</div>
	)
}