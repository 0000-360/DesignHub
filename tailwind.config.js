/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    // Safelist dynamic classes used in Services.jsx
    safelist: [
        {
            pattern: /(bg|text|border)-(orange|blue|pink|yellow|green)-(100|400|500|600)/,
            variants: ['hover', 'group-hover'],
        },
    ],
    theme: {
        extend: {
            colors: {
                // Professional Brand Colors (from logo)
                primary: {
                    DEFAULT: '#FF6B35', // Primary Orange
                    light: '#FFE5DC',   // Soft Orange
                    dark: '#E55A2A',    // Deep Orange
                },
                // Neutrals
                black: {
                    DEFAULT: '#0A0A0A', // Deep Black
                    light: '#2D2D2D',   // Charcoal
                },
                white: {
                    DEFAULT: '#FFFFFF', // Pure White
                    warm: '#F5F3F0',    // Warm Gray background
                },
                // Supporting Colors
                navy: {
                    DEFAULT: '#1A2332', // Deep Navy (footer)
                },
                sage: {
                    DEFAULT: '#8BA888', // Sage Green (accents only)
                },
                // Grays for text
                gray: {
                    50: '#FAFAFA',
                    100: '#F5F5F5',
                    200: '#E5E5E5',
                    300: '#D4D4D4',
                    400: '#A3A3A3',
                    500: '#737373',
                    600: '#525252',
                    700: '#404040',
                    800: '#262626',
                    900: '#171717',
                },
            },
            fontFamily: {
                display: ['Space Grotesk', 'system-ui', 'sans-serif'], // Headings
                sans: ['Inter', 'system-ui', 'sans-serif'],             // Body
                mono: ['JetBrains Mono', 'monospace'],                  // Numbers/Accents
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'slide-down': 'slideDown 0.6s ease-out',
                'slide-left': 'slideLeft 0.6s ease-out',
                'slide-right': 'slideRight 0.6s ease-out',
                'scale-in': 'scaleIn 0.5s ease-out',
                'float': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 8s ease-in-out infinite',
                'rotate-slow': 'rotateSlow 20s linear infinite',
                'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(40px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-40px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideLeft: {
                    '0%': { transform: 'translateX(40px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                slideRight: {
                    '0%': { transform: 'translateX(-40px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.9)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '50%': { transform: 'translateY(-20px) rotate(5deg)' },
                },
                rotateSlow: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                pulseGlow: {
                    '0%, 100%': { opacity: '1', transform: 'scale(1)' },
                    '50%': { opacity: '0.8', transform: 'scale(1.05)' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'dot-pattern': 'radial-gradient(circle, #00000008 1px, transparent 1px)',
                'grain': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
            },
            backgroundSize: {
                'dot-size': '24px 24px',
            },
            boxShadow: {
                'glow-orange': '0 0 20px rgba(255, 107, 53, 0.3)',
                'glow-blue': '0 0 20px rgba(0, 78, 137, 0.3)',
                'glow-pink': '0 0 20px rgba(255, 0, 110, 0.3)',
                'glow-yellow': '0 0 20px rgba(255, 190, 11, 0.3)',
                'glow-green': '0 0 20px rgba(6, 255, 165, 0.3)',
            },
        },
    },
    plugins: [],
}
