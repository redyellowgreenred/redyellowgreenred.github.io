import { defineConfig } from 'astro/config';
export default defineConfig({ site: 'https://redyellowgreenred.github.io', srcDir:'./garden', outDir:'./dist', publicDir:'./public', output:'static', redirects:{'/questions/':'/'} });
