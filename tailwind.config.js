/** @type {import('tailwindcss').Config} */
export const mode = "jit";
export const content = ["./src/**/*.{html,js}"];
export const darkMode = "class";
const plugin = require("tailwindcss/plugin");

// class or media
export const theme = {
  extend: {
    colors: {
      prototurk: "#32445a",
      twitter: "#1da1f2",
    },
    spacing: {
      15: "3.75rem",
    },
  },
};
export const plugins = [
  plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        "calc-h-full": (value) => ({
          height: `calc(100% - ${value})`,
        }),
      },
      { values: theme("spacing") }
    );
  }),
  plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        "calc-w-full": (value) => ({
          width: `calc(100% - ${value})`,
        }),
      },
      { values: theme("spacing") }
    );
  }),
];
