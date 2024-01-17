import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';

import style from './NavLink.module.scss';

export enum NavLinkTheme {
  PRIMARY = 'primary',
  SACONDARY = 'sacondary',
}

interface INavLinkProps extends LinkProps {
  className?: string;
  theme?: NavLinkTheme;
}

export const NavLink: FC<INavLinkProps> = (props) => {
    const {
        className,
        children,
        theme = NavLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            {...otherProps}
            className={classNames(style.navlink, {}, [className, style[theme]])}
        >
            {children}
        </Link>
    );
};
