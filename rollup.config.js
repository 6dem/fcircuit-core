import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs'
        },
        {
            file: 'dist/index.mjs',
            format: 'esm'
        }
    ],
    plugins: [
        resolve(),
        commonjs(),
        babel({
            presets: ['@babel/preset-env'],
            babelHelpers: 'bundled'
        })
    ]
}
