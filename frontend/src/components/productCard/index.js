import React from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Divider,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import useStyles from './styles';
import Rating from '../rating';

const ProductCard = (props) => {
  const { product } = props;
  const classes = useStyles();
  const history = useHistory();

  const handleRedirect = () => {
    history.push(`/product/${product._id}`);
  };
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleRedirect}>
        <CardMedia
          className={classes.media}
          image={product.image}
          title='Contemplative Reptile'
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant='h5' component='h2'>
            {product.name}
          </Typography>
          <Typography variant='caption' color='textSecondary' component='p'>
            {`${product.description.slice(0, 60)}...`}
          </Typography>

          <Typography
            variant='body2'
            component='p'
            className={classes.productPrice}
          >
            Price:{' '}
            <Typography variant='body1' color='primary'>
              {' '}
              {`${product.price} EGP`}
            </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
      <Divider></Divider>
      <CardActions className={classes.actions}>
        <Button size='medium' color='primary'>
          <Rating
            value={product.rating}
            text={` ${product.numReviews} reviews`}
          />
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
