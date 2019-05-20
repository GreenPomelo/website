import React from 'react';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import Person from './components/Person/Person';
import Goal from './components/Goal/Goal';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Product />
      <Person />
      <Goal />
      <Footer />
    </div>
  );
}

export default App;
