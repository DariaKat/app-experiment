import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    // если не используем ts - нужен babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const babelLoader = {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        // плагин для вытаскивания ключей
                        'i18next-extract',
                        { locales: ['ru', 'en'], keyAsDefaultValue: true },
                    ],
                ],
            },
        },
    };

    // обрабатывать svg - изображения
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    // обработка файлов других типов (png, jpeg и др)
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    // scss - файлы
    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')), // обработка модулей, присенять или нет
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]', // в дев простые названия, в прод сборке идентификатор
                    },
                },
            },
            'sass-loader',
        ],
    };

    return [
        babelLoader,
        // конфигурируем лоудеры, предназначены для обработки файлов выходящие за рамки js (png, css и тд)
        typescriptLoader,
        svgLoader,
        fileLoader,
        scssLoader,
    ];
}
