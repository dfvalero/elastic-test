import { PropsWithChildren } from 'react';
import classes from './Header.module.scss';

type HeaderProps = PropsWithChildren<{ title: string }>;

const Header = ({ title, children }: HeaderProps) => {
    return (
        <header className={classes.root}>
            <h1 className={classes.title}>{title}</h1>
            {children}
        </header>
    );
};

export default Header;
