import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    federation({
      name: 'core', // name of the fed group
      filename: 'coreEntry.js', // default file name
      // Modules to expose
      exposes: {
        './Button': './src/components/Button/Button.jsx',
        './Input': './src/components/Input/Input.jsx',
      },
      shared: ['react', 'react-dom'], // libs/deps to be shared
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  build: {
    target: 'esnext',
  },
})
