import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './myTheme';
import Footer from './components/footer';
import Header from './components/header';
import HomeScreen from './screens/homeScreen';
import ProductScreen from './screens/productScreen';

import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <main>
            <Container>
              <Route path='/' component={HomeScreen} exact />
              <Route path='/product/:id' component={ProductScreen} />
            </Container>
          </main>
          <Footer />
        </ThemeProvider>
      </Router>
    </>
  );
};

export default App;
