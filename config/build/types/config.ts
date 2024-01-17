export type BuildMode = 'production' | 'development';// сборка

export interface BuildPath { // путь
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface BuildEnv { // переменные окружения
    mode: BuildMode;
    port: number;
}

export interface BuildOptions { // опции перед сборкой
    mode: BuildMode;
    paths: BuildPath;
    isDev: boolean;
    port: number;
}
