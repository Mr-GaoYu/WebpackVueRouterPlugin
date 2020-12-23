import { WebpackVueRouterOptions } from './types';
import { hook } from './utils/webpack';
import { Compiler } from 'webpack'
import { join, relative } from 'path';
import glob from 'glob';

export default class WebpackVueRouterPlugin {
    private options: any;

    constructor(options: WebpackVueRouterOptions) {

    }

    apply(compiler: Compiler) {
        console.log(glob
            .sync(`**/?(${['*.tsx'].join('|')})`, {
                cwd: '.',
                ignore: ['**/node_modules/**'],
            }))
    }
}