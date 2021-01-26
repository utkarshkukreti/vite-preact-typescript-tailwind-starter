import preactRefresh from '@prefresh/vite'
import { defineConfig } from 'vite'
import { minifyHtml } from 'vite-plugin-html'

export default defineConfig({
  esbuild: {
    jsxFactory: 'Preact.h',
    jsxFragment: 'Preact.Fragment',
  },
  plugins: [preactRefresh(), minifyHtml()],
})
