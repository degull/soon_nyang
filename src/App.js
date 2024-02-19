import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Main from './components/Main/Main';
import Map from './components/Map/Map';
import Food from './components/Food/Food';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Logo redirectTo="/main" timeout={3000} /> */}

        {/* header 링크 */}
        <Route path="/Map/Map" element={<Map />} />
        <Route path="/Food/Food" element={<Food />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;