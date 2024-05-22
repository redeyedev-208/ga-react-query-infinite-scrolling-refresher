// import './App.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { InfinitePeople } from './people/InfinitePeople';
import { InfiniteSpecies } from './species/InfiniteSpecies';
import { Container, Box, Typography, Card, CardContent } from '@mui/material';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Box
          display='flex'
          flexDirection='column'
          alignItems='stretch' // Ensure children take full width
          justifyContent='center'
          minHeight='100vh'
          width='100%' // Ensure Box takes full width
        >
          <Card
            sx={{
              position: 'sticky',
              top: 0,
              zIndex: 1000, // Ensure it stays on top
              mb: 2,
            }}
          >
            <CardContent>
              <Typography
                variant='h1'
                component='h1'
                gutterBottom
                textAlign='center' // Center the text
              >
                Star Wars Scrolling
              </Typography>
            </CardContent>
          </Card>
          <InfinitePeople />
          <InfiniteSpecies />
        </Box>
      </Container>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
