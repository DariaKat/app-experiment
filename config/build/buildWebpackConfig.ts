import webpack from 'webpack';

import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolve } from './buildResolve';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(
    options: BuildOptions,
): webpack.Configuration {
    const { mode, paths, isDev } = options;

    // возвращает конфигурацию
    return {
        mode, // какая сборка (разработка или продакшен)
        entry: paths.entry, // стартовая точка приложения (__dirname - папка в которой находимся, через запятую указываем участки пути)
        output: {
            // куда и как будет происходить сборка
            filename: '[name].[contenthash].js', // главный файл сборки, [name].js - шаблон, который кешируется, вариант обойти добавить [contenthash], где будет генерится символы
            path: paths.build, // куда полетит сборка
            clean: true, // подчищать старые файлы
        },
        devtool: isDev ? 'inline-source-map' : undefined, // где в коде произошла ошибка
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolve(options),
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
