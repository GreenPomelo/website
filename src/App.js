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
  const offsetGoal = rangeHandler(1700, 2300, afterScrollTop);
  const offsetPerson = rangeHandler(1040, 1500, afterScrollTop);
  return (
    <div className="App">
      {useMemo(
        () => (
          <Header distanceObj={{ afterScrollTop: offsetHeader, clientWidth }} />
        ),
        [offsetHeader, clientWidth]
      )}
      {useMemo(
        () => (
          <Product
            distanceObj={{ afterScrollTop: offsetProduct, clientWidth }}
          />
        ),
        [offsetProduct, clientWidth]
      )}
      {useMemo(
        () => (
          <Person distanceObj={{ afterScrollTop: offsetPerson }} />
        ),
        [offsetPerson]
      )}
      {useMemo(
        () => (
          <Goal distanceObj={{ afterScrollTop: offsetGoal }} />
        ),
        [offsetGoal]
      )}
      <Footer />
    </div>
  );
}

export default App;
