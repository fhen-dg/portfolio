import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        neutral: {
          50: "#FDFDFD",
          100: "#F8F8F8",
          200: "#F3F3F3",
          300: "#EEEEEE",
          400: "#DBDBDB",
          500: "#A8A8A8",
          600: "#7B7B7B",
          700: "#5C5C5C",
          800: "#383838",
          900: "#222222",
          white: "#FFFFFF",
          black: "#000000",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          base: "#E50041",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".header1": {
          fontSize: "64px",
          lineHeight: "150%",
          fontWeight: "700",
        },
        ".header3": {
          fontSize: "44px",
          lineHeight: "150%",
          fontWeight: "700",
        },
        ".title1": {
          fontSize: "40px",
          lineHeight: "150%",
          fontWeight: "700",
        },
        ".title2": {
          fontSize: "32px",
          lineHeight: "175%",
          fontWeight: "700",
        },
        ".title3": {
          fontSize: "28px",
          lineHeight: "175%",
          fontWeight: "700",
        },
        ".title4": {
          fontSize: "24px",
          lineHeight: "150%",
          fontWeight: "700",
        },
        ".title5": {
          fontSize: "20px",
          lineHeight: "150%",
          fontWeight: "700",
        },
        ".supporting1": {
          fontSize: "32px",
          lineHeight: "175%",
        },
        ".supporting1-medium": {
          fontSize: "32px",
          lineHeight: "175%",
          fontWeight: "500",
        },
        ".supporting2": {
          fontSize: "24px",
          lineHeight: "175%",
        },
        ".supporting2-medium": {
          fontSize: "24px",
          lineHeight: "175%",
          fontWeight: "500",
        },
        ".body1": {
          fontSize: "18px",
          lineHeight: "175%",
        },
        ".body1-bold": {
          fontSize: "18px",
          lineHeight: "175%",
          fontWeight: "700",
        },
        ".body2": {
          fontSize: "16px",
          lineHeight: "175%",
        },
        ".body3": {
          fontSize: "14px",
          lineHeight: "175%",
        },
        ".body3-bold": {
          fontSize: "14px",
          lineHeight: "175%",
          fontWeight: "700",
        },
      });
    }),
  ],
};

export default config;
