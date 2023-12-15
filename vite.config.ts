import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from "vite-plugin-svgr";
import postcssNesting from 'postcss-nesting';
import postcssModules from 'postcss-modules';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/resume",
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@assets": "/src/assets",
    },
  },
  css: {
    modules: {
      generateScopedName: (name, filename) => {
        const regExp = /(\/)(\w+)(\.module.css)/
        const componentName = filename.match(regExp)[2]
        return `${componentName}__${name}`
      }
    }
  }
})
