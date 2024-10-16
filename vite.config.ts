import { defineConfig } from "vite";
import soften from "vite-plugin-soften";
import path from 'path'
import dts from 'vite-plugin-dts';
export default defineConfig({
  plugins: [
    dts({
      include: ['src/**/*'],
      copyDtsFiles: true,
    }),
    soften(),
  ],
  build: {
    outDir: 'dist',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'index',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['vite-plugin-soften', 'soften-js'],
    },
  },
})