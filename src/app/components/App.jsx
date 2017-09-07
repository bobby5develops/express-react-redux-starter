import React, { PropTypes } from 'react';
import Header from './common/Header';
import Menu from './common/Menu';

function App({ children }) {
  return (
    <div className="container">
      <Menu />
      <Header />
      {children}
    </div>
  );
}

App.propTypes = { children: PropTypes.object };

export default App;
