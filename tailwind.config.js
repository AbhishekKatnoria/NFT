/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1172px",
      },
    },
    extend: {
      fontFamily: {
        bakbak: "var(--font-primary)",
        poppins: "var(--font-secondary)",
        inriasans: "var(--font-third)",
      },
      colors: {
        backgroundBlack: "var(--background-black)",
        background: "var(--background-color)",
        backgroundSec: "var(--background-color-sec)",
        textColor: "var(--primary-text)",
        gradient: "var(--background-linear-gradient)",
        gradientSec: "var(--background-linear-gradient-sec)",
        borderColor: "var(--border-color)",
      },

      fontSize: {
        font6xl: "var(--font-6xl)",
        font5xl: "var(--font-5xl)",
        fontBase: "var(--font-base)",
        fontSm: "var(--font-sm)",
        fontXs: "var(--font-xs)",
      },

      lineHeight: {
        lineHeight6xl: "var(--line-height-6xl)",
        lineHeight5xl: "var(--line-height-5xl)",
        lineHeight4xl: "var(--lineheight-4xl)",
        lineHeightBase: "var(--line-height-base)",
        lineHeightBase2: "var(--line-height-base-2)",
        lineHeightSm: "var(--line-height-sm)",
        lineHeightSm2: "var(--line-height-sm-2)",
        lineHeightSm3: "var(--line-height-sm-3)",
      },

      letterSpacing: {
        ab: "0.02rem",
      },
    },
  },
  plugins: [],
};
