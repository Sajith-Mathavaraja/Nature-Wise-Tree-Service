import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// Custom plugin to inline CSS during build.
// Since the entire Tailwind CSS is only 9.0 kB, inlining it into a <style> tag
// in index.html completely eliminates the "Render-blocking requests" network penalty (190ms saved).
const inlineCSSPlugin = () => {
  return {
    name: 'inline-css',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        if (!ctx || !ctx.bundle) return html;
        let inlineStyles = '';
        for (const [fileName, file] of Object.entries(ctx.bundle)) {
          if (fileName.endsWith('.css')) {
            inlineStyles += `<style>${file.source}</style>`;
            delete ctx.bundle[fileName];
          }
        }
        if (inlineStyles) {
          html = html.replace(/<link[^>]*href="[^"]*\.css"[^>]*>/g, '');
          html = html.replace('</head>', `${inlineStyles}</head>`);
        }
        return html;
      }
    }
  };
};

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    inlineCSSPlugin(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}'],
        runtimeCaching: [
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|webp|avif)$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache-v1',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
            },
          },
          {
            urlPattern: /\/assets\/.+\.(js|css)(\?.*)?$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'static-resources-v1',
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
            },
          },
        ],
        navigateFallback: null,
      },
      manifest: {
        name: 'Nature Wise Tree Service',
        short_name: 'Nature Wise',
        description: 'Certified Arborists & Eco-Friendly Tree Care in WNY',
        theme_color: '#203322',
        background_color: '#F8FBF6',
        display: 'standalone',
        start_url: '/Nature-Wise-Tree-Service/',
        icons: [
          {
            src: 'favicon.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
          },
        ],
      },
    }),
  ],
  base: "/Nature-Wise-Tree-Service/",
  resolve: {
    alias: {
      'react': 'preact/compat',
      'react-dom/test-utils': 'preact/compat/test-utils',
      'react-dom': 'preact/compat',
      'react/jsx-runtime': 'preact/compat/jsx-runtime'
    }
  },
  build: {
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
