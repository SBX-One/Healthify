/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                Figtree: ['Figtree', 'sans-serif'],
            },

            colors: {
                primary: '#fff',
                secondary: '#213170',
                trinary: '#C5E5FF',
                text: '#171717',
            },

            borderRadius: {
                xxl: '40px',
            },
            backgroundImage: {
                Pharmacy: "url('../../assets/Rectangle 70.webp')",
                Clinic: "url('../../assets/Rectangle 71.webp')",
                Disease: "url('../../assets/Rectangle 75.webp')",
                Drugs: "url('../../assets/Rectangle 74.webp')",
                Clinic2: "url('../../assets/Rectangle 73.webp')",
                Jinx: "url('../../assets/Rectangle 76.webp')",
                Dyven: "url('../../assets/Rectangle 77.webp')",
                vaelclinic: "url('../../assets/vaelrino.webp')",
            },
        },
    },
    plugins: [],
};
