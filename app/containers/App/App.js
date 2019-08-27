/**
 * The App
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import ListingPage from 'containers/ListingPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './style.scss';

const App = () => (
  <div className="wrapper">
    <Helmet
      titleTemplate="%s - HomeAway"
      defaultTitle="HomeAway"
    >
      <meta name="description" content="HomeAway-Book your vacation rentals" />
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/listing/:location" component={ListingPage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>
);

export default App;
