/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: '/:path*',
				has: [
					{
						type: 'host',
						value: 'asotmilsim.net',
					},
					{
						type: 'host',
						value: 'asotmilsim.com',
					},
					{
						type: 'host',
						value: 'www.asotmilsim.net',
					},
					{
						type: 'host',
						value: 'www.asotmilsim.com',
					},
				],
				destination: 'https://www.asotmilsim.com/:path*',
				permanent: true,
			},
			{
				source: '/:path*',
				has: [
					{
						type: 'header',
						key: 'x-forwarded-proto',
						value: 'http',
					},
				],
				destination: 'https://www.asotmilsim.com/:path*',
				permanent: true,
			},
		];
	}
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);