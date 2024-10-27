/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./gatsby-browser.tsx`,
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
      },
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
      fontWeight: {
        thin: "100",
        light: "300",
        regular: "400",
        bold: "700",
      },
      fontSize: {
        "4.5xl": "2.75rem",
      },
      colors: {
        primary: "#2F60AC",
        "primary-lighter": "#4b79bd",
        black: "#2D2D2D",
        warning: "#FF2A2A",
        "dark-gray": "#4C4C4C",
        "mid-gray": {
          1: "#818589",
          2: "#A0A0A0",
          3: "#C3C3C3",
        },
        "light-gray": {
          1: "#D8D8D8",
          2: "#E7E7E7",
          3: "#EBEBEB",
        },
      },
      boxShadow: {
        sm: "0px 1px 2px 0px rgba(0, 0, 0, 0.08)",
        md: "0px 4px 4px 0px rgba(0, 0, 0, 0.10)",
        lg: "0px 0px 12px 0px rgba(29, 112, 183, 0.2)",
        "md-top": "0px -9px 14px -3px rgba(0,0,0,0.09)",
        "md-bottom": "0px 4px 10px 0px rgba(0, 0, 0, 0.1)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        dialogOverlayShow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        dialogContentShow: {
          from: {
            opacity: "0",
            transform: "translate(-50%, -48%) scale(0.96)",
          },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        dialogOverlayShow:
          "dialogOverlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        dialogContentShow:
          "dialogContentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        pulseFast: "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;",
      },
      backgroundImage: {
        search: "url('/search.svg')",
      },
      spacing: {
        "pdf-header": "4rem",
        "pdf-user-info": "12rem",
        "pdf-footer": "6rem",
      },
    },
  },
  plugins: [],
};
