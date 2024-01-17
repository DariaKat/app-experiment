import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { NavLink } from 'shared/ui/NavLink';

import style from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = ({ className }) => (
    <div className={classNames(style.navbar, {}, [className])}>
        <div className={style.links}>
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/about">О сайте</NavLink>
        </div>
    </div>
);
