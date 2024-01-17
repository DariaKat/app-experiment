import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins({
    paths,
    isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            // упрощает создание файлов HTML для обслуживания пакетов веб-пакетов, подключает скрипты
            template: paths.html, // использовать как шаблон
        }),
        new webpack.ProgressPlugin(), // процент/время сборки
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }), // для каждого js свой css
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }), // передача глобавльных переменных
        new webpack.HotModuleReplacementPlugin(), // обновление кода, без обновления страницы
    ];
}
