import { defineConfig } from 'vite';
import react from 'D:/G Pages Websites/Shiridi sai/eswara vidyalayam/node_modules/@vitejs/plugin-react/dist/index.mjs';
import path from 'path';

const nodeModulesPath = path.resolve('D:/G Pages Websites/Shiridi sai/eswara vidyalayam/node_modules');

export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      react: path.join(nodeModulesPath, 'react'),
      'react-dom': path.join(nodeModulesPath, 'react-dom'),
      'react/jsx-runtime': path.join(nodeModulesPath, 'react/jsx-runtime.js'),
    },
  },
});

