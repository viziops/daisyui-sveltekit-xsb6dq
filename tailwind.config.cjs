module.exports = {
  content: ['./src/routes/**/*.{svelte,js,ts}'],
  plugins: [require('daisyui')],
  // daisyUI config (optional)
  daisyui: {
    themes: ['cupcake', 'dark', 'cmyk'],
  },
};
