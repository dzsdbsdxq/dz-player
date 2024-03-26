// rollup.config.js
import typescript from 'rollup-plugin-typescript2';
import ejs from 'rollup-plugin-ejs';
import scss from 'rollup-plugin-scss';
import json from '@rollup/plugin-json';
import svg from 'rollup-plugin-svg-import';
import alias from '@rollup/plugin-alias';
import terser from '@rollup/plugin-terser';
import fs from 'fs';
const pkg = JSON.parse(fs.readFileSync("./package.json",'utf8'));

const outDir = pkg.outDir;

const pkgName = (pkg.name + '').replace(/-\D/g,function (match) {
    return match.charAt(1).toUpperCase();
});
const banner =
    `/*!
 * ${pkgName} ${pkg.version}
 * Author: ShoujieLi
 * Description: A Tiny Video Player for html5.
 * E-Mail: lishoujie08@gmail.com
 * Copyright 2024-${(new Date).getFullYear()} ShoujieLi. All Rights Reserved
 * Licensed under MIT (https://rem.mit-license.org/)
 */
`;

function getCompiler(opt) {
    opt = opt || {
        tsconfigOverride: {compilerOptions: {module: 'ES2015'}}
    };
    return typescript(opt);
}
function capitalizeFirstLetter(string) {  
    return string.charAt(0).toUpperCase() + string.slice(1);  
}  

export default {
    input: 'src/index.ts',
    output:[ 
        {
            file: `${outDir}/index.js`,
            format: 'cjs',
            banner: banner,
        },
        {
            file: `${outDir}/index.esm.js`,
            format: 'es',
            banner: banner,
        },
        {
            file: `${outDir}/index.umd.min.js`,
            format: 'umd',
            globals: {
                'hls.js': 'Hls',
            },
            name: capitalizeFirstLetter(pkgName),
            banner: banner,
            plugins:[
                terser()
            ]
        },
    ],
    external: ['hls.js'], // 不被打包到库中，沿用外部依赖
    plugins: [
        alias({ entries: [{ find: '@', replacement: 'src' }] }),
        svg({
            stringify: true, // process SVG to DOM Node or String. Default: false
        }),
        json(),
        scss({
            fileName: 'bundle.css',
            insert: true, // 将 CSS 插入到 HTML 中
        }),
        ejs({
            inlineStyles: true, // 编译 scss 插入行间样式，默认为 false
            exclude: ['**/index.html'], // optional, undefined by default
            compilerOptions: { 
                client: true,
                rmWhitespace:true 
            }, // optional, any options supported by ejs compiler
        }),
        // nodeResolve({
        //     main: true,
        //     extensions: ['.ts']
        // }),
        // commonjs({
        //     include: 'node_modules/**',
        // }),
        getCompiler({
            tsconfigOverride: { compilerOptions : { declaration: true, module: 'ES2015' } },
            useTsconfigDeclarationDir: true
        })
    ]
};
