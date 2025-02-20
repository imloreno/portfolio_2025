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
        text3: "var(--text3)",
        border: "var(--border)",
        cursorColor: "var(--cursor-color)",
        cursorColorT: "var(--cursor-color-t)",
        cursorColorT2: "var(--cursor-color-t-2)",
        shadow: "var(--shadow)",
      },
      fontSize: {
        // size1: "clamp(1.2rem, 1.5vw, 1.5rem)",
        // size2: "clamp(1rem, 1.2vw, 1.2rem)",
        // size3: "clamp(0.8rem, 1vw, 1rem)",
      },
    },
  },
  plugins: [],
} satisfies Config;
