/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            config: {
                "color1-bg": "var(--color1-bg)",
                "color1-txt": "var(--color1-txt)",
                "color1-txt1": "var(--color1-txt1)",
                "color2-bg": "var(--color2-bg)",
                "color2-txt": "var(--color2-txt)",
                "color2-txt1": "var(--color2-txt1)",
                "color3-bg": "var(--color3-bg)",
                "color3-txt": "var(--color3-txt)",
                "color3-txt1": "var(--color3-txt1)",

                "header-height": "var(--header-height)",
                "before-header-height": "var(--before-header-height)",
                "headers-height": "var(--headers-height)",
                "heigh-not-headers": "var(--heigh-not-headers)",
                "max-w": "var(--max-w)",
                padding: "var(--padding)",
            },
            fontFamily: {
                link: ["link", "sans-serif"],
                title2: ["title2", "sans-serif"],
            },
        },
    },
    plugins: [],
};
