import React from 'react';
import useStyles from './styles';
import { Grid, Typography, Divider, Button } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import products from '../../products';
import Rating from '../../components/rating';

const ProductScreen = () => {
  const classes = useStyles();
  const { id } = useParams();
  const product = products.find((product) => product._id === id);

  return (
    <>
      <Grid container className={classes.productBox}>
        <Grid item xs={12} sm={6}>
          <div className={classes.imageBox}>
            <img src={product.image} />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.productContent}>
            <div className={classes.productDetails}>
              <Typography variant='h4'>{product.name}</Typography>
              <Divider />
              <Typography variant='body2'>{product.description}</Typography>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </div>
            <div className={classes.productActions}>
              <div className={classes.priceInfo}>
                <Typography variant='body1'>Price: {product.price}</Typography>
              </div>
              <div className={classes.addToCart}>
                <Button
                  variant='outlined'
                  className={classes.button}
                  endIcon={<i className='fas fa-shopping-cart'></i>}
                >
                  Add To Cart
                </Button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductScreen;
