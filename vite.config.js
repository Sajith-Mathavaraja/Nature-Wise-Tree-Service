import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Custom plugin to inline CSS during production build to eliminate render-blocking CSS requests
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
          // Remove link tags referencing external CSS and append inlined styles before </head>
          html = html.replace(/<link[^>]*href="[^"]*\.css"[^>]*>/g, '');
          html = html.replace('</head>', `${inlineStyles}</head>`);
        }
        return html;
      }
    }
  };
};

export default defineConfig({
  plugins: [react(), tailwindcss(), inlineCSSPlugin()],
  base: "/Nature-Wise-Tree-Service/",
})
