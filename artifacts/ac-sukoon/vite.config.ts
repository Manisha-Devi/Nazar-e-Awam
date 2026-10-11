import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const basePath = process.env.BASE_PATH || '/';
const isReplitArtifact = Boolean(process.env.BASE_PATH);
const devPort = Number(process.env.PORT || 5173);
const previewPort = Number(process.env.PORT || 4173);

export default defineConfig({
  base: basePath,
  plugins: [react()],
  build: {
    outDir: isReplitArtifact ? 'dist/public' : 'dist',
    emptyOutDir: true,
  },
  server: {
    port: devPort,
    strictPort: Boolean(process.env.PORT),
    host: '0.0.0.0',
    allowedHosts: true,
  },
  preview: {
    port: previewPort,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
