import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.jsx"],
            ssr: 'resources/js/ssr.jsx',
            refresh: true,
        }),
        react(),
    ],
    /*build: {
      chunkSizeWarningLimit: 200,
      rollupOptions: {
          output:{
              manualChunks(id) {
                console.log('chunk', id, "\n");
                if (id.includes('ComponentBlocks')) {
                  return id.toString().split('ComponentBlocks/')[1].toString();
                }
                /* if (id.includes('node_modules')) {
                    return id.toString().split('node_modules/')[1].split('/')[0].toString();
                } */
          /* }
          }
      }
  }*/
});
