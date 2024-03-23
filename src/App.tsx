import { useState } from 'react';
import { useApi } from './hooks/useApi.ts';
import { getData } from './api';
import Search from './components/Search/Search.tsx';
import Box from './components/Box/Box.tsx';
import Card from './components/Card/Card.tsx';
import Alert from './components/Alert/Alert.tsx';
import { Col, Row } from './components/Grid';
import Header from './components/Header/Header.tsx';

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
            <Header title="Contact List">
                <Search
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                />
            </Header>
            <Box p={2}>
                <Row>
                    {filtered.map((item) => (
                        <Col key={item.id}>
                            <Card
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
                        </Col>
                    ))}
                </Row>
            </Box>
        </main>
    );
};

export default App;
