module.exports = {
    content: ["./index.html", "./resources/**/*.{vue,js,ts,jsx,tsx}"],

    theme: {
        extend: {
            colors: {
                "main-black": "#191B1D",
                "gray-label": "#6d767e",
                "gray-body": "#3A3D40",
                "gray-placeholder": "#C4D1D9",
                "gray-line": "#DBE4EB",
                "gray-input": "#F0F4F7",
                "gray-bg": "#FAFAFA",
                "red-primary": "#FF6854",
                "purple-secondary": "#7734FC",
                "red-error": "#FF2727",
                "orange-warning": "#F4B740",
                "green-success": "#36AB00",
            },
            fontSize: {
                15: ["15px", "18px"],
                13: ["13px", "15px"],
                12.5: ["12.5px", "15px"],
            },
        },
    },
    plugins: [require("@tailwindcss/line-clamp")],
};
