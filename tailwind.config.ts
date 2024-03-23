import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				darkGray: '#292B32',
				lightGray: '#F7F7F8',
				mediumGray: '#DFDFDF',
				extraLightGray: '#818A97',
				customWhite: '#F7F7F8',
			},
		},
	},
	plugins: [],
};
export default config;
