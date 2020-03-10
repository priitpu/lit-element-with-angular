import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import typescript from '@rollup/plugin-typescript';
export default {
  // If using any exports from a symlinked project, uncomment the following:
  // preserveSymlinks: true,
	input: ['./index.js'],
	output: {
		file: 'build/index.js',
		format: 'es',
		sourcemap: true
	},
	plugins: [
    babel(),
    // typescript(),
    resolve()
  ]
};
