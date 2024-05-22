import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

export function Species({ name, language, averageLifespan }) {
  return (
    <div
      tabIndex={0}
      role='article'
      aria-label={`Species: ${name}`}
    >
      <List
        component='div'
        disablePadding
      >
        <ListItem>
          <Typography
            variant='h6'
            component='span'
          >
            {name}
          </Typography>
        </ListItem>
        <List
          component='div'
          disablePadding
        >
          <ListItem>
            <Typography
              variant='body2'
              component='span'
            >
              Language: {language}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body2'
              component='span'
            >
              Average Lifespan: {averageLifespan}
            </Typography>
          </ListItem>
        </List>
      </List>
    </div>
  );
}
