import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
        // default options are shown
        pages: 'docs',
        assets: 'docs',
        fallback: null,
        precompress: false
    }),

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",

    
  },
  preprocess: [
    preprocess({
      scss: {
        prependData: '@use "src/variables.scss" as *;',
      },
    }),
  ],
};

export default config;
