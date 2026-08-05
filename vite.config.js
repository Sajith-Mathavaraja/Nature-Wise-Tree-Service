import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Removed inlineCSSPlugin — it was injecting all CSS into the JS bundle,
// causing Lighthouse "Reduce unused JavaScript" warning (89kB → ~35kB savings reported).
// Native Vite CSS extraction produces a separate .css file that:
//  1. Loads in parallel with JS (no render-blocking penalty)
//  2. Contains zero unused bytes (only what is actually used)
//  3. Gets its own 1-year cache entry on Netlify

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/Nature-Wise-Tree-Service/",
  build: {
    rollupOptions: {
      output: {
        // Split React + React Router into a separate cached vendor chunk.
        // Rolldown (Vite 6) requires manualChunks as a function, not an object.
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('node_modules/react-router')) {
            return 'react-vendor';
          }
        }
      }
    },
    // Exclude lazy-loaded sub-page chunks from modulePreload hints.
    // Without this, Vite adds <link rel="modulepreload"> for all lazy chunks,
    // making Lighthouse count them as critical network dependencies.
    modulePreload: {
      resolveDependencies: (filename, deps) => {
        return deps.filter(dep =>
          !dep.includes('PrivacyPolicy') &&
          !dep.includes('Terms')
        );
      }
    }
  }
})
