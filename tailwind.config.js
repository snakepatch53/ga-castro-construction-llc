/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                link: ["link", "sans-serif"],
                title2: ["title2", "sans-serif"],
            },
        },
    },
    plugins: [],
};
