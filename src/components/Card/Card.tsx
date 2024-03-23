import { ReactNode, useState } from 'react';
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
    const [showPlaceholder, setShowPlaceholder] = useState(false);
    const [showIcon, setShowIcon] = useState(true);

    const handleImageError = () => {
        setShowPlaceholder(true);
    };

    const handleIconError = () => {
        setShowIcon(false);
    };

    return (
        <Box className={rootClassName} p={1} {...rest}>
            <Box className={classes['image-wrapper']}>
                {showPlaceholder && <Box className={classes.placeholder} />}
                {!showPlaceholder && (
                    <img
                        src={image}
                        onError={handleImageError}
                        alt={name}
                        className={classes.image}
                    />
                )}
                {showIcon && (
                    <img src={icon} onError={handleIconError} alt={name} className={classes.icon} />
                )}
            </Box>
            <Box>{children}</Box>
            <Box className={classes.extra}>{extra()}</Box>
        </Box>
    );
};

export default Card;
