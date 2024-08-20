import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server :{
    proxy :{
      '/spardha/events' : 'http://localhost:2005'
    }
  },
  plugins: [react()],
})
