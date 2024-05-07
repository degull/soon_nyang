import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Main from './components/Main/Main';
import Map from './components/Map/Map';
import Food from './components/Food/Food';
import Hospital from './routes/Hospital/Hospital';
import List from './routes/List/List';
import Write from './routes/Write/Write';
import User from './routes/User/User';

import SignUp from './components/SignUp/SignUp';


import CatDetail from './components/Catlist/CatDetail';
import HospitalList from './components/HospitalList/HospitalList';


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

        {/* 병원정보 */}
        <Route path="/HospitalList/HospitalList" element={<HospitalList />} />

        {/* 고양이 상세페이지 */}
      
        <Route path="/cats/:catId" element={<CatDetail />} />


        {/* 회원가입 */}
        <Route path='/SignUp/SignUp' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;