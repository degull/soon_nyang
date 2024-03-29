import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Main from './components/Main/Main';
import Map from './components/Map/Map';
import Food from './components/Food/Food';
import Hospital from './routes/Hospital/Hospital';
import List from './routes/List/List';
import Write from './routes/Write/Write';
import User from './routes/User/User';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Logo redirectTo="/main" timeout={3000} /> */}

        {/* header 링크 */}
        <Route path="/Map/Map" element={<Map />} />
        <Route path="/Food/Food" element={<Food />} />

        {/* menu 링크 */}
        <Route path="/List/List" element={<List />} />
        <Route path="/Write/Write" element={<Write />} />
        <Route path="/Hospital/Hospital" element={<Hospital />} />
        <Route path="/User/User" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;