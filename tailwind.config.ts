import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        background2: "var(--background2)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        text1: "var(--text1)",
        text2: "var(--text2)",
        border: "var(--border)",
        cursorColor: "var(--cursor-color)",
        cursorColorT: "var(--cursor-color-t)",
        shadow: "var(--shadow)",
      },
      fontSize: {},
    },
  },
  plugins: [],
} satisfies Config;
