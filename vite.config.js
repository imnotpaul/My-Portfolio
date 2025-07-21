import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: 'dist/stats.html',
      open: true, // opens browser after build to show graph
    }),
  ],
  build: {
    chunkSizeWarningLimit: 600, // optional: avoid warning unless chunk is over 600kb
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react';
            if (id.includes('framer-motion')) return 'motion';
            if (id.includes('lucide-react')) return 'icons';
            return 'vendor'; // fallback for other node_modules
          }
        },
      },
    },
  },
});
