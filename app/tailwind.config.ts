import type { Config } from "tailwindcss";
import daisyui from "daisyui";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [daisyui],
  // daisyUI config (optional - here are the default values)
  daisyui: {

    themes: [
      {
        mytheme: {
          primary: "#fda4af",
          "primary-content": "#160a0b",
          secondary: "#fbcfe8",
          "secondary-content": "#151013",
          accent: "#d8b4fe",
          "accent-content": "#110c16",
          neutral: "#ffe4e6",
          "neutral-content": "#161213",
          "base-100": "#6b7280",
          "base-200": "#5c626e",
          "base-300": "#4e535d",
          "base-content": "#e0e1e4",
          info: "#3b82f6",
          "info-content": "#010615",
          success: "#84cc16",
          "success-content": "#060f00",
          warning: "#f59e0b",
          "warning-content": "#150900",
          error: "#dc2626",
          "error-content": "#ffd9d4",
        },
      }, "dark", "light"
    ],
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
export default config;
