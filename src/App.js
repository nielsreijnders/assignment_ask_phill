import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import './scss/global/global.scss';
import Header from './components/menuBlock/MenuBlock'
// import LoaderBlock from './components/loaderBlock/LoaderBlock'

function App() {
  return (
    <Router>
      {/* <LoaderBlock /> */}
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
