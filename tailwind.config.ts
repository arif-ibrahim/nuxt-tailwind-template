import type { Config } from 'tailwindcss'

export default {
  content: [  ],
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {
    extend: {
      // Enable the hover variant
      extend: {
        backgroundColor: ['hover'],
        textColor: ['hover'],
        // Add other variants as needed
      },
    },
  },
} satisfies Config

