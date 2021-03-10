import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './page/home';
import './index.less';
import Blog from './page/blog';
import About from './page/about';

declare const BASENAME: string;

function App() {
  return (
    <BrowserRouter basename={BASENAME}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
