import React, { useState } from 'react';

import Menu from './components/Menu';
import Tariffs from './components/Tariffs';
import Tracking from './components/Tracking';
import About from './components/About';
import SpecialOrders from './components/SpecialOrders';

const App = () => {
  const [currentPage, setCurrentPage] = useState('tracking');

  return (
    <>
      <Menu
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      {currentPage === "tracking" && <Tracking />}
      {currentPage === "tariffs" && <Tariffs />}
      {currentPage === "about" && <About />}
      {currentPage === "special_orders" && <SpecialOrders />}
    </>
  );
}

export default App;
