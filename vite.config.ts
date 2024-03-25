import { vitePlugin as remix } from '@remix-run/dev'
import { installGlobals } from '@remix-run/node'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import rehypePrettyCode, { Options } from 'rehype-pretty-code'
import path from 'path'

installGlobals()

const options: Options = {
  keepBackground: false,
}

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      rehypePlugins: [[rehypePrettyCode, options]],
    }),
    remix(),
  ],
  resolve: {
    alias: {
      'tailwind.config': path.resolve(__dirname, './tailwind.config'),
    },
  },
  server: {
    host: true,
    port: 3002,
  },
})
