import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

export function Person({ name, hairColor, eyeColor }) {
  return (
    <div
      tabIndex={0}
      role='article'
      aria-label={`Person: ${name}`}
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
              Hair: {hairColor}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body2'
              component='span'
            >
              Eyes: {eyeColor}
            </Typography>
          </ListItem>
        </List>
      </List>
    </div>
  );
}
