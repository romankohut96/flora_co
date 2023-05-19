/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        ['xlg']: '1150px',
      },
      fontFamily: {
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
      },
      borderRadius: { lg: '10px' },
      colors: {
        ['black-opacity-20']: '#00000033',
        primary: '#2B8CE5',
        ['primary-100']: '#217AFF1A',
        secondary: '#FAFAFA1A',
        ['secondary-100']: '#FFFFFF4D',
        ['black-100']: '#101313',
        ['white-100']: '#FFFFFF1A',
        grey: '#2D3232',
        ['grey-100']: '#AAAAAA',
      },
      height: {
        ['11.5']: '46.74px',
      },
      width: {
        ['30']: '120px',
        ['38']: '152px',
        ['39']: '156.5px',
        ['65']: '260px',
        ['82']: '328px',
        ['90']: '360px',
      },
      maxWidth: {
        ['max-w-2xl']: '680px',
      },
      fontSize: {
        '3xl': [
          '32px',
          {
            lineHeight: '38px',
            fontWeight: '500',
          },
        ],
      },
      padding: {
        ['10.5']: '42px',
        ['15']: '60px',
        ['28.5']: '114px',
      },
      margin: {
        ['18']: '72px',
        ['25']: '100px',
      },
    },
  },
  plugins: [],
}
