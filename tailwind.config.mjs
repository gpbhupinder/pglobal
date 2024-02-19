/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				merriweather: ['Merriweather', ...defaultTheme.fontFamily.sans],
			  },
			colors: {
				primary: "var(--primary-color)",
				primaryhover: "var(--primary-color-hover)",
				secondary: "var(--secondary-color)",
				secondaryhover: "var(--secondary-color-hover)",
				tertiary: "var(--tertiary-color)",
				lightbg: "var(--light-bg)",
			  },
		},
	},
	plugins: [],
}
