import { FC, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'features/ThemeSwitcher';

import { LangSwitcher } from 'features/LangSwitcher';
import style from './Sidebar.module.scss';

interface ISidebarProps {
  className?: string;
}

export const Sidebar: FC<ISidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(style.sidebar, { [style.collapsed]: collapsed }, [
                className,
            ])}
        >
            <button type="button" onClick={onToggle}>toggle</button>
            <div className={style.switcher}>
                <ThemeSwitcher />
                <LangSwitcher className={style.switcher_lang} />
            </div>
        </div>
    );
};
