/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "grayscale-grayscale-1000": "#000",
        deeppink: {
          "100": "#ff009b",
          "200": "rgba(255, 0, 155, 0.02)",
        },
        "grayscale-grayscale-0": "#fff",
        gray: {
          "100": "#7c7c7c",
          "200": "#342d31",
          "300": "#232323",
          "400": "rgba(255, 255, 255, 0.4)",
        },
        "grayscale-grayscale-900": "#171717",
        lightgoldenrodyellow: "rgba(214, 255, 216, 0.12)",
        pink: {
          "100": "rgba(255, 200, 233, 0.12)",
          "200": "rgba(255, 199, 233, 0.6)",
        },
        "grayscale-grayscale-300": "#e0e0e0",
        thistle: {
          "100": "#ffd6f8",
          "200": "rgba(255, 214, 248, 0.6)",
        },
        "grayscale-grayscale-500": "#9e9e9e",
      },
      spacing: {},
      fontFamily: {
        pretendard: "Pretendard",
        abeezee: "ABeeZee",
      },
      borderRadius: {
        "35xl": "54px",
        "17xl": "36px",
      },
    },
    fontSize: {
      base: "16px",
      smi: "13px",
      "3xl": "22px",
      "9xl": "28px",
      "13xl": "32px",
      "25xl": "44px",
      "7xl": "26px",
      "16xl": "35px",
      "5xl": "24px",
      lgi: "19px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      mq1250: {
        raw: "screen and (max-width: 1250px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
