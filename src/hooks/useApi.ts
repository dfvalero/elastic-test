import { useEffect, useState } from 'react';

type Props<T> = {
    queryFn: () => Promise<T>;
};

type State<T> =
    | { data: null; status: 'idle'; error: null }
    | { data: null; status: 'loading'; error: null }
    | { data: T; status: 'success'; error: null }
    | { data: null; status: 'error'; error: Error };

export const useApi = <T>({ queryFn }: Props<T>) => {
    const [state, setState] = useState<State<T>>({ data: null, status: 'idle', error: null });

    useEffect(() => {
        setState({ data: null, status: 'loading', error: null });
        queryFn()
            .then((data) => {
                setState({ data, status: 'success', error: null });
            })
            .catch((error: Error) => {
                setState({ data: null, status: 'error', error });
            });
    }, []);

    return { ...state };
};
