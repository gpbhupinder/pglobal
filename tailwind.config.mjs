/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "var(--primary-color)",
				primaryhover: "var(--primary-color-hover)",
				secondary: "var(--secondary-color)",
				secondaryhover: "var(--secondary-color-hover)",
				tertiary: "var(--tertiary-color)",
			  },
		},
	},
	plugins: [],
}
