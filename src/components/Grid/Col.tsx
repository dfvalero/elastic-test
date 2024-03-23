import classes from './Grid.module.scss';
import Box from '../Box/Box.tsx';
import { PropsWithChildren } from 'react';

const Col = ({ children }: PropsWithChildren) => {
    return <Box className={classes.column}>{children}</Box>;
};

export default Col;
