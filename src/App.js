/* import React from 'react';
import Logo from './Logo/Logo';

export default function App() {
  return (
    <>
      <Logo redirectTo="/main" timeout={3000} />
    </>
  );
}
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Main from './components/Main/Main';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Logo redirectTo="/main" timeout={3000} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;