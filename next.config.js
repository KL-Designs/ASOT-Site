/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.discordapp.com',
				pathname: '/avatars/**/**',
			}
		]
	},

	async redirects() {
		return [
			{
				source: '/:path*',
				has: [
					{
						type: 'host',
						value: 'asotmilsim.net',
					}
				],
				destination: `${process.env.NEXT_PUBLIC_BASEURL}/:path*`,
				permanent: true,
			},
			{
				source: '/:path*',
				has: [
					{
						type: 'host',
						value: 'asotmilsim.com',
					}
				],
				destination: `${process.env.NEXT_PUBLIC_BASEURL}/:path*`,
				permanent: true,
			},
			{
				source: '/:path*',
				has: [
					{
						type: 'host',
						value: 'www.asotmilsim.com',
					}
				],
				destination: `${process.env.NEXT_PUBLIC_BASEURL}/:path*`,
				permanent: true,
			},

			{
				source: '/:path*',
				has: [
					{
						type: 'header',
						key: 'x-forwarded-proto',
						value: 'http',
					}
				],
				destination: `${process.env.NEXT_PUBLIC_BASEURL}/:path*`,
				permanent: true,
			},
		];
	}
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);