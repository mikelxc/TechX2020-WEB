import React from 'react';
import { makeStyles } from '@bit/mui-org.material-ui.styles';
import Card from '@bit/mui-org.material-ui.card';
import CardActionArea from '@bit/mui-org.material-ui.card-action-area';
import CardActions from '@bit/mui-org.material-ui.card-actions';
import CardContent from '@bit/mui-org.material-ui.card-content';
import CardMedia from '@bit/mui-org.material-ui.card-media';
import Button from '@bit/mui-org.material-ui.button';
import Typography from '@bit/mui-org.material-ui.typography';


const useStyles = makeStyles({
card: {
    maxWidth: 345,
},
});

export default function Item({item}) {
const classes = useStyles();

return (
    <Card className={classes.card}>
    <CardActionArea>
        <CardMedia
          component="img"
          alt="Image for the course"
          height="140"
          image={`http://localhost:1337${item.image[0].url}`}
          title="Image for the course"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.classname}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            It starts at {item.startdate} and ends at {item.enddate}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share {item.classname}
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
    </CardActions>
    </Card>
  );
}