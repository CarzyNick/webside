/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Oswald", "var(--font-oswald)", "sans-serif"],
        mono: ["JetBrains Mono", "var(--font-jetbrains)", "monospace"],
      },
      colors: {
        steel: "#6f7a83",
        neon: "#6cf0ff",
        ember: "#ff6f61",
      },
      boxShadow: {
        glass: "0 20px 80px rgba(0,0,0,0.45)",
      },
      backgroundImage: {
        noise: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"120\" height=\"120\" viewBox=\"0 0 120 120\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"4\" stitchTiles=\"stitch\"/></filter><rect width=\"120\" height=\"120\" filter=\"url(%23n)\" opacity=\"0.08\"/></svg>')",
      },
    },
  },
  plugins: [],
};
