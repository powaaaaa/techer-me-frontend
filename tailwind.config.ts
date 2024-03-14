import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black: {
          DEFAULT: "#212121",
          lighter: "#757575",
        },
        grey: "#F5F5F5",
        beige: "#FEFBF8",
        white: "#FFFFFF",
        red: "#E30000",
      },
      fontSize: {
        middle: "50px",
        big: "80px",
      },
      fontFamily: {
        NotoSansJP: ["var(--font-NotoSansJP)"],
        RampartOne: ["var(--font-RampartOne)"],
      },
      screens: {
        pc: "768px",
      },
    },
  },
  plugins: [],
};
export default config;
