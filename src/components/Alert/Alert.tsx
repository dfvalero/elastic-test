import { FunctionComponent, SVGProps } from 'react';
import clsx from 'clsx';
import Box, { BoxProps } from '../Box/Box.tsx';
import ErrorIcon from '../../assets/error.svg?react';
import classes from './Alert.module.scss';

type Severity = 'info' | 'error';

export interface AlertProps extends BoxProps {
    severity?: Severity;
}

const IconMap: Record<Severity, FunctionComponent<SVGProps<SVGSVGElement>>> = {
    info: ErrorIcon,
    error: ErrorIcon,
};

const Alert = ({ className, severity = 'info', children, ...rest }: AlertProps) => {
    const rootClassName = clsx(className, classes.root, severity && classes[severity]);
    const Icon = IconMap[severity];

    return (
        <Box display="flex" p={2} gap={1} className={rootClassName} {...rest}>
            <Icon className={classes.icon} />
            <Box className={classes.message}>{children}</Box>
        </Box>
    );
};

export default Alert;
