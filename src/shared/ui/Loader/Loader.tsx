import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import style from './Loader.module.scss';

interface ILoaderProps {
    className?: string;
}

export const Loader: FC<ILoaderProps> = ({ className }) => (
    <div className={classNames(style.loaderHeart, {}, [className])}><div /></div>
);
