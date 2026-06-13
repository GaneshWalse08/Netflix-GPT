import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react' // <-- Add this import

export default defineConfig({
  plugins: [
    react(), // <-- You must include the react plugin
    tailwindcss(),
  ],
})