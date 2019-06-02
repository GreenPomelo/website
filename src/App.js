import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import Person from './components/Person/Person';
import Goal from './components/Goal/Goal';
import Footer from './components/Footer/Footer';

function App() {
  const [afterScrollTop, setAfterScrollTop] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setAfterScrollTop(document.documentElement.scrollTop);
      setClientWidth(document.body.clientWidth);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  });
  return (
    <div className="App">
      <Header distanceObj={{ afterScrollTop, clientWidth }} />
      <Product distanceObj={{ afterScrollTop, clientWidth }} />
      <Person />
      <Goal />
      <Footer />
    </div>
  );
}

export default App;
