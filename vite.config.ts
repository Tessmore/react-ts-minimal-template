import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    base: "/react-ts-minimal-template/",
    plugins: [react()],
    build: {
        sourcemap: true
    }
});
