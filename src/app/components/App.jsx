import React, { PropTypes } from 'react';
import Hero from './hero/Hero';
import Header from './common/Header';

function App({ children }) {
  return (
    <div className="container">
      <Hero />
      <Header />
      {children}
    </div>
  );
}

App.propTypes = { children: PropTypes.object };

export default App;
