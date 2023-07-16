import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,html}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
