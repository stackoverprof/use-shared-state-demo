import type { Config } from 'tailwindcss';

export default {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: '#FDF5F4',
				foreground: '#da4970',
				theme: {
					white: '#ECEEED',
					pink: {
						DEFAULT: '#da4970',
						'50': '#fcf3f6',
						'100': '#fae9ef',
						'200': '#f7d3df',
						'300': '#F8B9D0',
						'400': '#e87e9d',
						'500': '#da4970',
						'600': '#ca3858',
						'700': '#af2741',
						'800': '#912336',
						'900': '#792231',
						'950': '#490e18',
					},
				},
			},
			fontFamily: {
				amiri: ['var(--font-amiri)'],
				lateef: ['var(--font-lateef)'],
				rufina: ['var(--font-rufina)'],
				pinyon: ['var(--font-pinyon)'],
				berkshire: ['var(--font-berkshire)'],
			},
			keyframes: {
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
			},
			animation: {
				'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
			},
			animationDelay: {
				'500': '0.5s',
				'1000': '1s',
				'1500': '1.5s',
			},
			screens: {
				'-2xl': { raw: '(max-width: 1535px)' },
				'-xl': { raw: '(max-width: 1279px)' },
				'-lg': { raw: '(max-width: 1023px)' },
				'-md': { raw: '(max-width: 767px)' },
				'-sm': { raw: '(max-width: 639px)' },
			},
		},
	},
	plugins: [],
} satisfies Config;
