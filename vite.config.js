import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
// This is a Vite configuration file for a React project with Tailwind CSS support.

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    strictPort: true, // Optional: ensures Vite fails if port 3002 is in use
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "./src"), // Allows using '@' as an alias for the 'src' directory
    },
  }
})
// This configuration sets up a Vite project with React support and specifies the server port.
