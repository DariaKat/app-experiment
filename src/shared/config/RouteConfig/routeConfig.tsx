import { RouteProps } from 'react-router-dom';

import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoute {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found',
}

// конфигурация роутинга

export const RoutePath: Record<AppRoute, string> = {
    [AppRoute.MAIN]: '/',
    [AppRoute.ABOUT]: '/about',
    [AppRoute.NOT_FOUND]: '*', // если нет страницы, должен быть в конце
};

export const RouteConfig: Record<AppRoute, RouteProps> = {
    [AppRoute.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoute.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoute.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
