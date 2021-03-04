import React, { useContext } from 'react';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import AppContext from 'context/AppContext';
import useGetThumbnail from 'hooks/useGetThumbnail';
import useStyles from './styles';

const Item = ({ video }) => {
  const thumb = useGetThumbnail(video.sources[0], video.thumb);
  const classes = useStyles();
  const {
    state: { selected },
    selectVideo,
  } = useContext(AppContext);

  const handleSelect = () => {
    selectVideo(video);
  };

  return (
    <Card
      className={classNames({
        [classes.root]: true,
        [classes.over]: selected.id === video.id,
      })}
      elevation={0}
      onClick={handleSelect}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt={video.title}
          height="200"
          image={thumb}
          title={video.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {video.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {video.subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Item;
