/** @type {import('tailwindcss').Config} */
import { odsTwPreset } from '@o2pluss/o2pluss-design-system';

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@o2pluss/o2pluss-design-system/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [odsTwPreset],
  plugins: [],
}

