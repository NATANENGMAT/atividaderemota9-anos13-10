const esbuild=require('esbuild');const fs=require('fs');
fs.mkdirSync('dist',{recursive:true});
esbuild.buildSync({entryPoints:['main.tsx'],bundle:true,outfile:'dist/assets/main.js',minify:true,jsx:'automatic',target:['es2020'],nodePaths:process.env.BUILD_NODE_PATH?[process.env.BUILD_NODE_PATH]:[],loader:{'.css':'css'}});
fs.copyFileSync('index.html','dist/index.html');
console.log('Static GitHub Pages build complete.');
