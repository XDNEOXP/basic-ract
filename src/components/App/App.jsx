import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Layout from '../Layout/Layout';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Blog from '../Blog/Blog';
import ThemeContext from '../../contexts/ThemeContext';
import theme from '../../configs/theme';
import Products from '../Products/Products';
import PRODUCTS from './PRODUCTS.json';
import '../Button/Button.css';
import SingleProduct from '../SingleProduct/SingleProduct';

function App() {
  const [activeTheme, setActiveTheme] = useState('green');
  return (
    <ThemeContext.Provider value={{
      theme: theme[activeTheme],
      setActiveTheme,
    }}
    >
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/">
                <Products data={PRODUCTS} />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/blog">
                <Blog />
              </Route>
              <Route path="/product/:id">
                <SingleProduct />
              </Route>
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
