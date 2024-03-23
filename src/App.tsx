import { useApi } from './hooks/useApi.ts';
import { getData } from './api';
import Search from './components/Search/Search.tsx';

const App = () => {
    const { data } = useApi({ queryFn: () => getData() });

    console.log(data);

    return (
        <main>
            <header>
                <h1>Contact List</h1>
                <Search />
            </header>
        </main>
    );
};

export default App;
