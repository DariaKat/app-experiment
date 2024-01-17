import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolve(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'], // не указывать расширение файла
        preferAbsolute: true, // абсолютные пути
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {},
    };
}
