import { DataItem } from './types.ts';
import data from '../data.json';

export const getData = async (): Promise<DataItem[]> => {
    return data;
    const response = await fetch('https://retoolapi.dev/xJfD1o/data');
    return await response.json();
};
