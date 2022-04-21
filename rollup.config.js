import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postCSS from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';

const packageJSON = require('./package.json');

export default [

  {
    input: "src/index.ts",
    output: [{
        file: packageJSON.main,
        format: "cjs",
        sourcemap: true
      },
      {
        file: packageJSON.module,
        format: "esm",
        sourcemap: true
      }],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postCSS()
    ]
  }, {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [ dts() ],
    external: [/\.(css|scss)$/]
  }

];
