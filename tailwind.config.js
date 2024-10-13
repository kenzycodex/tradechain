/** @type {import('tailwindcss').Config} */
module.exports = {
  // Keep your existing content paths
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  // Add dark mode configuration (to switch between dark/light modes)
  darkMode: 'class',  // Enable dark mode with class-based switching

  // Extend theme settings, keeping your existing ones and adding new ones
  theme: {
    extend: {
      // Keep your existing font settings
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        nacelle: ["var(--font-nacelle)", "sans-serif"],
      },

      // Keep your existing font size settings
      fontSize: {
        xs: ["0.8125rem", { lineHeight: "1.5384" }],
        sm: ["0.875rem", { lineHeight: "1.5715" }],
        base: [
          "0.9375rem",
          { lineHeight: "1.5333", letterSpacing: "-0.0125em" },
        ],
        lg: ["1.125rem", { lineHeight: "1.5", letterSpacing: "-0.0125em" }],
        xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "-0.0125em" }],
        "2xl": ["1.5rem", { lineHeight: "1.415", letterSpacing: "-0.0268em" }],
        "3xl": [
          "1.75rem",
          { lineHeight: "1.3571", letterSpacing: "-0.0268em" },
        ],
        "4xl": ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.0268em" }],
        "5xl": ["3.5rem", { lineHeight: "1", letterSpacing: "-0.0268em" }],
        "6xl": ["4rem", { lineHeight: "1", letterSpacing: "-0.0268em" }],
        "7xl": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.0268em" }],
      },

      // Add the new theme settings for light/dark mode and colors
      colors: {
        // Light mode colors (preserving your defaults)
        primary: '#1f2937',  // Dark background for light mode
        secondary: '#f3f4f6',  // Light background sections
        accent: '#10b981',  // Accent buttons and highlights
        darkText: '#111827',  // Dark text for light mode
        lightText: '#f9fafb',  // Light text for light mode

        // Dark mode colors
        darkBackground: '#1a202c',  // Dark mode background
        darkAccent: '#38b2ac',  // Accent color for dark mode
        darkPrimary: '#2d3748',  // Dark mode primary background
        darkSecondary: '#4a5568',  // Dark mode secondary background
        darkTextColor: '#e2e8f0',  // Text color in dark mode
        darkGray: '#718096',  // Dark gray for secondary text
      },

      // Add custom animations if needed
      animation: {
        shine: "shine 5s ease-in-out 500ms infinite",
        gradient: "gradient 5s infinite linear",
      },
      keyframes: {
        shine: {
          "0%": { top: "0", transform: "scaleY(5)", opacity: "0" },
          "10%": { opacity: ".8" },
          "20%": { top: "100%", transform: "scaleY(10)", opacity: "0" },
          "100%": { top: "100%", transform: "scaleY(1)", opacity: "0" },
        },
        gradient: {
          to: { "background-position": "200% center" },
        },
      },

      // Add spacing, breakpoints, or anything additional from my config
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },

      // Responsive breakpoints (if needed)
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },

  // Keep your existing plugins
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
