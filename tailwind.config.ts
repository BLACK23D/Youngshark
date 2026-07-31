import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1E1E2E",
        navy: "#071A2F",
        cobalt: "#315BFF",
        teal: "#18CDB1",
        mist: "#F7FAFF",
        peach: "#FFF5EC",
        mint: "#E6F7F4",
        sky: "#EAF2FF",
        rose: "#EC4899",
        violet: "#8B5CF6",
        cyan: "#06B6D4",
      },
      fontFamily: {
        display: ["var(--font-outfit)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        glass:
          "0 24px 70px rgba(122,0,255,.12), 0 10px 30px rgba(255,0,127,.10)",
        float:
          "0 30px 80px rgba(30,30,46,.16), 0 8px 26px rgba(255,126,95,.22)",
      },
      backgroundImage: {
        jewel: "linear-gradient(115deg, #ff4f87 0%, #ff7e5f 45%, #7a00ff 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
