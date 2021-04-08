import React, { useState } from 'react';

import Menu from './components/Menu';
import Tariffs from './components/Tariffs';
import Tracking from './components/Tracking';
import About from './components/About';

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
    </>
  );
}

export default App;
