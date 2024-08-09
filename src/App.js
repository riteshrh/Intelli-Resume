import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import GlobalStyles from './GlobalStyle';
import Landing from './Component/Landing/Landing';
import Header from './Component/Header/Header';
import GetStartedSection from './Component/GetStartedSection/GetStarted';
import ReactGA from 'react-ga4';

ReactGA.initialize('G-TNXFW8RLRK');

const TrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
  }, [location]);

  return null;
};

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Landing />
      <GetStartedSection id="get-started-section" />
    </>
  );
}

const AppWrapper = () => (
  <Router>
    <TrackPageView />
    <App />
  </Router>
);

export default AppWrapper;
