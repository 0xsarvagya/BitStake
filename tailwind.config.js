module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
        fontFamily: {
            festive: ["Festive", "cursive"],
            inter: ["Inter", "sans-serif"],
            courgette: ["Courgette", "cursive"],

        keyframes: {
                fadeIn: {
                  '0%': { opacity: '0', transform: 'translateY(10px)' },
                  '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                slideIn: {
                  '0%': { opacity: '0', transform: 'translateX(20px)' },
                  '100%': { opacity: '1', transform: 'translateX(0)' }
                }
              },
              animation: {
                fadeIn: 'fadeIn 0.5s ease-out forwards',
                slideIn: 'slideIn 0.5s ease-out forwards'
              },
    plugins: [],
            },
},
};