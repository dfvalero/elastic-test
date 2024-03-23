import { PropsWithChildren } from 'react';
import Box from '../Box/Box.tsx';
import classes from './Grid.module.scss';

const Row = ({ children }: PropsWithChildren) => {
    return <Box className={classes.row}>{children}</Box>;
};

export default Row;
