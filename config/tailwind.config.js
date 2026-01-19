/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        grain:
          'url(\'data:image/svg+xml,%3Csvg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)" opacity="0.05"/%3E%3C/svg%3E\')',
      },
      colors: {
        "dark-bg": "#121212",
        "dark-surface": "#1a1a1a",
        "dark-card": "#1f1f1f",
        "dark-hover": "#2a2a2a",
        "dark-border": "#2e2e2e",
        "dark-text": "#e5e5e5",
        "dark-text-secondary": "#b3b3b3",
        "accent-blue": "#60a5fa",
        "accent-cyan": "#22d3ee",
        "accent-yellow": "#fbbf24",
        "accent-green": "#4ade80",
      },
    },
  },
  plugins: [],
};
