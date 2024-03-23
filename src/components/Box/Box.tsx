import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import clsx from 'clsx';
import classes from './Box.module.scss';

export interface BoxProps extends ComponentPropsWithoutRef<'div'> {
    p?: 0 | 1 | 2 | 3 | 4;
    m?: 0 | 1 | 2 | 3 | 4;
    gap?: 0 | 1 | 2 | 3 | 4;
    display?: 'block' | 'flex';
    justifyContent?: 'start' | 'end' | 'space-between';
}

const Box = ({
    className,
    p,
    m,
    gap,
    display,
    justifyContent,
    ...rest
}: PropsWithChildren<BoxProps>) => {
    const rootClassName = clsx(
        className,
        p && classes[`padding-${p}`],
        m && classes[`margin-${p}`],
        gap && classes[`gap-${gap}`],
        display && classes[`display-${display}`],
        justifyContent && classes[`justify-${justifyContent}`],
    );

    return <div className={rootClassName} {...rest} />;
};

export default Box;
