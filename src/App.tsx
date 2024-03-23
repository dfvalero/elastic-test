import { useApi } from './hooks/useApi.ts';
import { getData } from './api';
import Search from './components/Search/Search.tsx';
import Box from './components/Box/Box.tsx';
import Card from './components/Card/Card.tsx';
import { useState } from 'react';
import Alert from './components/Alert/Alert.tsx';

const App = () => {
    const { data, status } = useApi({ queryFn: () => getData() });
    const [searchQuery, setSearchQuery] = useState('');

    if (status === 'idle' || status === 'loading') {
        return (
            <Box p={2}>
                <Alert severity="info">Loading</Alert>
            </Box>
        );
    }

    if (status === 'error')
        return (
            <Box p={2}>
                <Alert severity="error">Data not found</Alert>
            </Box>
        );

    const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    return (
        <main>
            <Box display="flex">
                <h1>Contact List</h1>
                <Search
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                />
            </Box>
            <section>
                {filtered.map((item) => (
                    <Card key={item.id} {...item} />
                ))}
            </section>
        </main>
    );
};

export default App;
