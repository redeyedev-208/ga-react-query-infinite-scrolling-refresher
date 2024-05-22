import InfiniteScroll from 'react-infinite-scroller';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Card, CardContent, Typography } from '@mui/material';

const baseUrl = 'https://swapi-node.vercel.app';
const initialUrl = baseUrl + '/api/species/';
const fetchUrl = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export function InfiniteSpecies() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetching,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ['sw-species'],
    queryFn: ({ pageParam = initialUrl }) => fetchUrl(pageParam),
    getNextPageParam: (lastPage) => {
      return lastPage.next ? baseUrl + lastPage.next : undefined;
    },
  });

  if (isLoading) return <div className='loading'>Loading...</div>;
  if (isError) return <div>Error! {error.toString()}</div>;

  return (
    <>
      {isFetching && <div className='loading'>Loading...</div>}
      <InfiniteScroll
        loadMore={() => {
          // this prevents double calls to the api
          if (!isFetching) fetchNextPage();
        }}
        hasMore={hasNextPage}
      >
        {data.pages.map((pageData) => {
          return pageData.results.map((species) => {
            return (
              <Card
                key={species.fields.name}
                sx={{
                  mb: 2,
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: 3,
                  backgroundColor: 'background.paper',
                  transform: 'scale(1)',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 6,
                  },
                }}
                role='article'
                aria-label={`Species: ${species.fields.name}`}
                tabIndex={0}
              >
                <CardContent>
                  <Typography
                    variant='h6'
                    component='h2'
                  >
                    {species.fields.name}
                  </Typography>
                  <Typography color='textSecondary'>
                    Language: {species.fields.language}
                  </Typography>
                  <Typography color='textSecondary'>
                    Average Lifespan: {species.fields.average_lifespan}
                  </Typography>
                </CardContent>
              </Card>
            );
          });
        })}
      </InfiniteScroll>
    </>
  );
}
