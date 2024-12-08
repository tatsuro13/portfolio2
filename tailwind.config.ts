import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container:{
		center:true,
		padding:'15px',
		screens:{
			sm:'640px',
			md:'768px',
			lg:'1024px',
			xl:'1280px'
		}
	},
	fontFamily: {
		primary: 'var(--font-hind)',
	},
  	extend: {
  		colors: {
  			primary: '#1c1c22',
  			secondary: '#f8f8f8',
  			accent: {
				DEFAULT:'#00ff99',
				hover:'#00e187'
			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
