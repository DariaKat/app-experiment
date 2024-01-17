import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port, // порт
        open: true, // авто открытие страницы в браузере
        historyApiFallback: true, // индексировать страницу на которой находимся
        hot: true, // обновление кода, без обновления страницы
    };
}
