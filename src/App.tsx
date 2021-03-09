import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './page/home';
import './index.less';
import Blog from './page/blog';
import About from './page/about';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
