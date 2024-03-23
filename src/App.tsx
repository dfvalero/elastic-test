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
            <Box display="flex" gap={1}>
                {filtered.map((item) => (
                    <Card
                        key={item.id}
                        name={item.name}
                        image={item.profile_image}
                        icon={item.icon}
                        extra={() => (
                            <Box>
                                <Box>{item.phone}</Box>
                                <Box>{item.email}</Box>
                            </Box>
                        )}
                    >
                        <Box>
                            <strong>{item.name}</strong>
                        </Box>
                        <Box>
                            {item.job} | {item.company_name}
                        </Box>
                    </Card>
                ))}
            </Box>
        </main>
    );
};

export default App;
