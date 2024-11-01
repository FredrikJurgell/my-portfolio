export const darkMode = 'class';
export const content = ["./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {},
};
export const variants = {
  extend: {
    width: ["responsive", "hover", "focus"],
    gridColumn: ["responsive", "hover", "focus"], // Ensure grid column utilities work on hover
  },
};
export const plugins = [];
