import React from 'react';
import useStyles from './styles';
import { Typography, Grid } from '@material-ui/core';
import products from '../../products';
import ProductCard from '../../components/productCard';

const HomeScreen = () => {
  const classes = useStyles();
  return (
    <>
      <Typography color='textSecondary' variant='h2'>
        Latest Products
      </Typography>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

      {}
    </>
  );
};

export default HomeScreen;
