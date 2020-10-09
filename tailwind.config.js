
const mode = process.env.NODE_ENV || 'development';
const production =  mode === 'production';
module.exports = {
  future: { // for tailwind 2.0 compat
    purgeLayersByDefault: true, 
    removeDeprecatedGapUtilities: true,
  },
  plugins: [
    require('@tailwindcss/ui'),
  ],
  purge: {
    content: [
      "./src/**/*.svelte",
      // may also want to include base index.html
    ], 
    enabled: production // disable purge in dev
  },
};