import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
import UserSet from './components/UserSet/UserSet';
import Mypage from './components/Mypage/Mypage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Map/Map" element={<Map />} />
        <Route path="/Food/Food" element={<Food />} />
        <Route path="/List/List" element={<List />} />
        <Route path="/Write/Write" element={<Write />} />
        <Route path="/Hospital/Hospital" element={<Hospital />} />
        <Route path="/User/User" element={<User />} />
        <Route path="/HospitalList/HospitalList" element={<HospitalList />} />
        <Route path="/cats/:catId" element={<CatDetail />} />
        <Route path='/SignUp/SignUp' element={<SignUp />} />
        <Route path='/UserSet/UserSet' element={<UserSet />} />
        <Route path='/Mypage' element={<Mypage />} />
      </Routes>
    </Router>
  );
};

export default App;
