/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        menutxt: '#FF0000',
        txtnormal: '#363447',
        txtwhite: '#FFFFFF',
        txtlight: '#60626C',
        bgdark: '#363447',
        bgdarkalt: '#6c6a7a',
        bglight: '#F2F2F1',
        bgwhite: '#FFFFFF',
        bgborder: '#A3AAB9',
        bgselected: '#FF954F',
        error: '#FF6949',
        warning: '#E5AE5A',
        success: '#81D47F',
        test1: '#BFAE9F',
        test2: '#D9C7B8',
        test3: '#A6775B',
        test4: '#403631',
        test5: '#0D0D0D',
      },

    },
    boxShadow: {
      adtable: '0 0 0 1px var(--nd-bloc-stroke, #a3aab9)',
    },
  },
  plugins: [],
};