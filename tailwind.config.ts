import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-archivo)", "system-ui", "sans-serif"],
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      screens: {
        "1100": { max: "1100px" },
        smallPhone: { max: "420px" },
      },
      colors: {
        background: "var(--bg)",
        foreground: "var(--text)",
      },
      scrollbarWidth: {
        "extra-thin": "2px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
