import Container from '@/components/container'

import Banner from '@/public/images/home/snowwalk1.png'



export default function Page({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<Container title='GALLERY' background={Banner} sx={{ bannerHeight: 'sm', maxWidth: '100%', padding: '0px' }}>
			<div className='py-5 m-auto px-10'>

				{children}

			</div>
		</Container>
	)
}