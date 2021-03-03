import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import useGetThumbnail from 'hooks/useGetThumbnail';
import useStyles from './styles';

const Item = ({ title, subtitle, sources, thumbPath }) => {
  const thumb = useGetThumbnail(sources[0], thumbPath);
  const classes = useStyles();
  return (
    <Card className={classes.root} elevation={0}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={thumb}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Item;
