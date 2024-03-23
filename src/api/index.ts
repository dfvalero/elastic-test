import { DataItem } from './types.ts';

export const getData = async (): Promise<DataItem[]> => {
    const response = await fetch('https://retoolapi.dev/xJfD1o/data');
    return await response.json();
};
