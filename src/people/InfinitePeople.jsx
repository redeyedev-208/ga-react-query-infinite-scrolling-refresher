import InfiniteScroll from 'react-infinite-scroller';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Card, CardContent, Typography } from '@mui/material';

const baseUrl = 'https://swapi-node.vercel.app';
const initialUrl = baseUrl + '/api/people/';
const fetchUrl = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export function InfinitePeople() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ['sw-people'],
    queryFn: ({ pageParam = initialUrl }) => fetchUrl(pageParam),
    getNextPageParam: (lastPage) => {
      return lastPage.next ? baseUrl + lastPage.next : undefined;
    },
  });

  if (isLoading) {
    return <div className='loading'>Loading...</div>;
  }

  if (isError) {
    return <div>Error! {error.toString()}</div>;
  }

  return (
    <>
      {isFetching && <div className='loading'>Loading...</div>}
      <InfiniteScroll
        loadMore={() => {
          if (!isFetching) {
            fetchNextPage();
          }
        }}
        hasMore={hasNextPage}
      >
        {data.pages.map((pageData) => {
          return pageData.results.map((person) => {
            return (
              <Card
                key={person.fields.name}
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
                aria-label={`People: ${person.fields.name}`}
                tabIndex={0}
              >
                <CardContent>
                  <Typography
                    variant='h6'
                    component='h2'
                  >
                    {person.fields.name}
                  </Typography>
                  <Typography color='textSecondary'>
                    Hair Color: {person.fields.hair_color}
                  </Typography>
                  <Typography color='textSecondary'>
                    Eye Color: {person.fields.eye_color}
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
