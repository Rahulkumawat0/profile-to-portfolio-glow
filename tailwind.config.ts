import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
				heading: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
				serif: ['Lora', 'Georgia', 'serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				portfolio: {
					dark: '#0A0F1C',
					purple: '#8B5CF6',
					'light-purple': '#A78BFA',
					'soft-purple': '#E5DEFF',
					'navy': '#1E293B',
					'slate': '#334155',
					'gray': '#64748B'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					"0%": {
						opacity: "0",
						transform: "translateY(20px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				'glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(16, 185, 129, 0.4), 0 0 40px rgba(16, 185, 129, 0.2)'
					},
					'50%': { 
						boxShadow: '0 0 30px rgba(16, 185, 129, 0.6), 0 0 60px rgba(16, 185, 129, 0.4)'
					}
				},
				'float': {
					'0%, 100%': { 
						transform: 'translateY(0) rotate(0deg)'
					},
					'33%': { 
						transform: 'translateY(-15px) rotate(2deg)'
					},
					'66%': { 
						transform: 'translateY(-8px) rotate(-2deg)'
					}
				},
				'pulse-soft': {
					'0%, 100%': { 
						opacity: '1',
						transform: 'scale(1)'
					},
					'50%': { 
						opacity: '0.7',
						transform: 'scale(1.1)'
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-200% 0'
					},
					'100%': {
						backgroundPosition: '200% 0'
					}
				},
				'gradient-shift': {
					'0%, 100%': {
						backgroundPosition: '0% 50%'
					},
					'50%': {
						backgroundPosition: '100% 50%'
					}
				},
				'bounce-gentle': {
					'0%, 100%': {
						transform: 'translateY(0)',
					},
					'50%': {
						transform: 'translateY(-12px)',
					}
				},
				'rotate-slow': {
					'0%': {
						transform: 'rotate(0deg)',
					},
					'100%': {
						transform: 'rotate(360deg)',
					}
				},
				'scale-breath': {
					'0%, 100%': {
						transform: 'scale(1)',
					},
					'50%': {
						transform: 'scale(1.05)',
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'glow-pulse': 'glow 4s infinite',
				'float': 'float 10s ease-in-out infinite',
				'pulse-soft': 'pulse-soft 5s infinite',
				'shimmer': 'shimmer 3s linear infinite',
				'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
				'bounce-gentle': 'bounce-gentle 3s infinite',
				'rotate-slow': 'rotate-slow 20s linear infinite',
				'scale-breath': 'scale-breath 4s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'hero-pattern': 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.08\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3Ccircle cx=\'10\' cy=\'10\' r=\'1\'/%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
				'noise-pattern': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.08\'/%3E%3C/svg%3E")',
				'professional-gradient': 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1), rgba(139, 92, 246, 0.05))'
			},
			boxShadow: {
				'glow-sm': '0 0 15px rgba(16, 185, 129, 0.4)',
				'glow-md': '0 0 25px rgba(16, 185, 129, 0.5)',
				'glow-lg': '0 0 35px rgba(16, 185, 129, 0.6)',
				'professional': '0 25px 50px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(16, 185, 129, 0.2)',
				'card-hover': '0 20px 40px rgba(16, 185, 129, 0.2), 0 12px 24px rgba(0, 0, 0, 0.15)',
				'neon-emerald': '0 0 20px rgba(16, 185, 129, 0.6), 0 0 40px rgba(16, 185, 129, 0.4), 0 0 60px rgba(16, 185, 129, 0.2)',
				'neon-cyan': '0 0 20px rgba(6, 182, 212, 0.6), 0 0 40px rgba(6, 182, 212, 0.4), 0 0 60px rgba(6, 182, 212, 0.2)',
				'neon-violet': '0 0 20px rgba(139, 92, 246, 0.6), 0 0 40px rgba(139, 92, 246, 0.4), 0 0 60px rgba(139, 92, 246, 0.2)'
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
