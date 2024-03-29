import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            xs: "335px",
            ...defaultTheme.screens,
        },
        extend: {
            fontFamily: {
                link: ["link", "sans-serif"],
                title: ["title", "sans-serif"],
                title2: ["title2", "sans-serif"],
                title3: ["title3", "sans-serif"],
                content: ["content", "sans-serif"],
            },
        },
    },
    plugins: [],
};
