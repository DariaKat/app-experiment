import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader';

import style from './LoaderPage.module.scss';

interface ILoaderPageProps {
    className?: string;
}

export const LoaderPage: FC<ILoaderPageProps> = ({ className }) => (
    <div className={classNames(style.loaderPage, {}, [className])}>
        <Loader />
    </div>
);
