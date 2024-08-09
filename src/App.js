import React from 'react';
import GlobalStyles from './GlobalStyle';
import Landing from './Component/Landing/Landing';
import Header from './Component/Header/Header';
import GetStartedSection from './Component/GetStartedSection/GetStarted';

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

export default App;