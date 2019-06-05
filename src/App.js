import React, { useState, useEffect, useMemo } from 'react';
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
  const rangeHandler = (min, max, raw) => Math.min(max, Math.max(min, raw));
  const offsetHeader = rangeHandler(0, 798, afterScrollTop);
  const offsetProduct = rangeHandler(500, 1075, afterScrollTop);
  const offsetPerson = rangeHandler(622, 1450, afterScrollTop);
  const offsetGoal = rangeHandler(1700, 2470, afterScrollTop);
  return (
    <div className="App">
      {useMemo(
        () => (
          <Header distanceObj={{ afterScrollTop, clientWidth }} />
        ),
        [offsetHeader, clientWidth]
      )}
      {useMemo(
        () => (
          <Product distanceObj={{ afterScrollTop, clientWidth }} />
        ),
        [offsetProduct, clientWidth]
      )}
      {useMemo(
        () => (
          <Person distanceObj={{ afterScrollTop: offsetPerson, clientWidth }} />
        ),
        [offsetPerson, clientWidth]
      )}
      {useMemo(
        () => (
          <Goal distanceObj={{ afterScrollTop, clientWidth }} />
        ),
        [offsetGoal, clientWidth]
      )}
      <Footer />
    </div>
  );
}

export default App;
