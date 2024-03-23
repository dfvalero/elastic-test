import classes from './Search.module.scss';
import SearchIcon from '../../assets/search.svg?react';
import { ComponentPropsWithoutRef } from 'react';

export interface SearchProps extends ComponentPropsWithoutRef<'input'> {}

const Search = (props: SearchProps) => {
    return (
        <div className={classes.root}>
            <input placeholder="search..." className={classes.input} {...props} />
            <SearchIcon className={classes.icon} />
        </div>
    );
};

export default Search;
