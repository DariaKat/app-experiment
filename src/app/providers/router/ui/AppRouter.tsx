import { FC, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { RouteConfig } from 'shared/config/RouteConfig/routeConfig';
import { LoaderPage } from 'widgets/LoaderPage';

export const AppRouter: FC = () => (
    <Suspense fallback={<LoaderPage />}>
        <Routes>
            {Object.values(RouteConfig).map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={<div className="page-wrapper">{element}</div>}
                />
            ))}
        </Routes>
    </Suspense>
);
