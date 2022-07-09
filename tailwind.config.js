module.exports = {
  prefix: 'tw-',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./container/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        "90": "#25626B",
        "80": "#308497",
        "70": "#3698B0",
        "60": "#3EACCB",
        "50": "#44BDDF",
        "40": "#4BC7E6",
        "30": "#62D1ED",
        "20": "#8BDFF4",
        "10": "#B7ECF9",
        "5": "#E2F7FD",
      },
      secondary: {
        "90": "#252525",
        "80": "#474747",
        "70": "#666666",
        "60": "#7A7A7A",
        "50": "#A4A4A4",
        "40": "#C2C2C2",
        "30": "#E5E5E5",
        "20": "#F1F1F1",
        "10": "#F6F6F6",
        "5": "#FAFAFA",
      },
      black: "#000000",
      white: "#ffffff",
      transparent: "transparent",
      error: "#CE2424",
      success: "#24CE7C",
      warning: "#F3AF00"
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 992px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }

      'xxl': '1400px',
      // => @media (min-width: 1400px) { ... }
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp'),],
}