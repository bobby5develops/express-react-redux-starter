import React, { PropTypes } from 'react';
import scroll from './common/yarboroughScroll';
import Hero from './hero/Hero';
import Header from './common/Header';

const App = ({ children }) => {
    return (
        <div className="container">
            <Hero>{children}</Hero>
            <Header />
			{children}
        </div>
	);
};


App.propTypes = { children: PropTypes.object };

export default App;
