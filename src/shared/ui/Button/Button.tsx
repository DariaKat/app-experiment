import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import style from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<IButtonProps> = (props) => {
    const {
        className, theme, children, ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(style.btn, { [style[theme]]: true }, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
