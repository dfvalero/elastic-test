import { ReactNode } from 'react';
import Box, { BoxProps } from '../Box/Box.tsx';
import classes from './Card.module.scss';
import clsx from 'clsx';

export interface CardProps extends BoxProps {
    name: string;
    image: string;
    icon: string;
    extra: () => ReactNode;
}

const Card = ({ name, image, icon, children, extra, className, ...rest }: CardProps) => {
    const rootClassName = clsx(className, classes.root);

    return (
        <Box className={rootClassName} p={1} {...rest}>
            <Box className={classes['image-wrapper']}>
                <img src={image} alt={name} className={classes.image} />
                <img src={icon} alt={name} className={classes.icon} />
            </Box>
            <Box>{children}</Box>
            <Box className={classes.extra}>{extra()}</Box>
        </Box>
    );
};

export default Card;
