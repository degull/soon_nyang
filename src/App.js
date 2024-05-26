/* import React from 'react';
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
 */

/* import React from 'react';
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
import { AuthProvider } from './components/Auth/AuthContext';
import ProtectedRoute from './components/Auth/ProtectedRoute';

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/Map/Map" element={<ProtectedRoute />} >
                        <Route path="" element={<Map />} />
                    </Route>
                    <Route path="/Food/Food" element={<ProtectedRoute />} >
                        <Route path="" element={<Food />} />
                    </Route>
                    <Route path="/List/List" element={<ProtectedRoute />} >
                        <Route path="" element={<List />} />
                    </Route>
                    <Route path="/Write/Write" element={<ProtectedRoute />} >
                        <Route path="" element={<Write />} />
                    </Route>
                    <Route path="/Hospital/Hospital" element={<Hospital />} />
                    <Route path="/User/User" element={<User />} />
                    <Route path="/HospitalList/HospitalList" element={<HospitalList />} />
                    <Route path="/cats/:catId" element={<CatDetail />} />
                    <Route path='/SignUp/SignUp' element={<SignUp />} />
                    <Route path='/UserSet/UserSet' element={<ProtectedRoute />} >
                        <Route path="" element={<UserSet />} />
                    </Route>
                    <Route path='/Mypage' element={<ProtectedRoute />} >
                        <Route path="" element={<Mypage />} />
                    </Route>
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default App;
 */
// App.js
/* import React, { useState } from 'react';
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
import Menu from './components/Menu/Menu'; // Menu 컴포넌트 임포트
import ProtectedRoute from './components/Auth/ProtectedRoute';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <Router>
            <Menu isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            <Routes>
                {!isLoggedIn && <Route path="/" element={<User onLogin={handleLogin} />} />}
                <Route path="/Map/*" element={<ProtectedRoute component={Map} isLoggedIn={isLoggedIn} />} />
                <Route path="/Food/*" element={<ProtectedRoute component={Food} isLoggedIn={isLoggedIn} />} />
                <Route path="/List/*" element={<ProtectedRoute component={List} isLoggedIn={isLoggedIn} />} />
                <Route path="/Write/*" element={<ProtectedRoute component={Write} isLoggedIn={isLoggedIn} />} />
                <Route path="/Hospital/*" element={<ProtectedRoute component={Hospital} isLoggedIn={isLoggedIn} />} />
                <Route path="/HospitalList/*" element={<ProtectedRoute component={HospitalList} isLoggedIn={isLoggedIn} />} />
                <Route path="/cats/:catId/*" element={<ProtectedRoute component={CatDetail} isLoggedIn={isLoggedIn} />} />
                <Route path='/SignUp/*' element={<ProtectedRoute component={SignUp} isLoggedIn={isLoggedIn} />} />
                <Route path='/UserSet/*' element={<ProtectedRoute component={UserSet} isLoggedIn={isLoggedIn} />} />
                <Route path='/Mypage/*' element={<ProtectedRoute component={Mypage} isLoggedIn={isLoggedIn} />} />
            </Routes>
        </Router>
    );
};

export default App;
 */

/* 
import React, { useState } from 'react';
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
import Menu from './components/Menu/Menu'; // Menu 컴포넌트 임포트
import ProtectedRoute from './components/Auth/ProtectedRoute';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <Router>
            <Menu isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            <Routes>
                {!isLoggedIn && <Route path="/" element={<User onLogin={handleLogin} />} />}
                <Route path="/Map/*" element={<ProtectedRoute component={Map} isLoggedIn={isLoggedIn} />} />
                <Route path="/Food/*" element={<ProtectedRoute component={Food} isLoggedIn={isLoggedIn} />} />
                <Route path="/List/*" element={<ProtectedRoute component={List} isLoggedIn={isLoggedIn} />} />
                <Route path="/Main/*" element={<ProtectedRoute component={Main} isLoggedIn={isLoggedIn} />} />
                <Route path="/Write/*" element={<ProtectedRoute component={Write} isLoggedIn={isLoggedIn} />} />
                <Route path="/Hospital/*" element={<ProtectedRoute component={Hospital} isLoggedIn={isLoggedIn} />} />
                <Route path="/HospitalList/*" element={<ProtectedRoute component={HospitalList} isLoggedIn={isLoggedIn} />} />
                <Route path="/cats/:catId/*" element={<ProtectedRoute component={CatDetail} isLoggedIn={isLoggedIn} />} />
                <Route path='/SignUp' element={<ProtectedRoute component={SignUp} isLoggedIn={isLoggedIn} />} />
                <Route path='/UserSet/*' element={<ProtectedRoute component={UserSet} isLoggedIn={isLoggedIn} />} />
                <Route path='/Mypage/*' element={<ProtectedRoute component={Mypage} isLoggedIn={isLoggedIn} />} />
            </Routes>
        </Router>
    );
};

export default App;
 */
/* 
import React, { useState } from 'react';
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
import Menu from './components/Menu/Menu';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import { AuthProvider } from './components/Auth/AuthContext'; // AuthProvider 임포트

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <AuthProvider>
            <Router>
                <Menu isLoggedIn={isLoggedIn} onLogout={handleLogout} />
                <Routes>
                    {!isLoggedIn && <Route path="/" element={<User onLogin={handleLogin} />} />}
                    <Route path="/Map/*" element={<ProtectedRoute component={Map} isLoggedIn={isLoggedIn} />} />
                    <Route path="/Food/*" element={<ProtectedRoute component={Food} isLoggedIn={isLoggedIn} />} />
                    <Route path="/List/*" element={<ProtectedRoute component={List} isLoggedIn={isLoggedIn} />} />
                    <Route path="/Main/*" element={<ProtectedRoute component={Main} isLoggedIn={isLoggedIn} />} />
                    <Route path="/Write/*" element={<ProtectedRoute component={Write} isLoggedIn={isLoggedIn} />} />
                    <Route path="/Hospital/*" element={<ProtectedRoute component={Hospital} isLoggedIn={isLoggedIn} />} />
                    <Route path="/HospitalList/*" element={<ProtectedRoute component={HospitalList} isLoggedIn={isLoggedIn} />} />
                    <Route path="/cats/:catId/*" element={<ProtectedRoute component={CatDetail} isLoggedIn={isLoggedIn} />} />
                    <Route path='/SignUp' element={<SignUp />} />
                    <Route path='/UserSet/*' element={<ProtectedRoute component={UserSet} isLoggedIn={isLoggedIn} />} />
                    <Route path='/Mypage/*' element={<ProtectedRoute component={Mypage} isLoggedIn={isLoggedIn} />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
 */

/* import React, { useState } from 'react';
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

import Menu from './components/Menu/Menu';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import { AuthProvider } from './components/Auth/AuthContext';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <AuthProvider>
            <Router>
                <Menu isLoggedIn={isLoggedIn} onLogout={handleLogout} />
                <Routes>
                    {!isLoggedIn && <Route path="/" element={<User onLogin={handleLogin} />} />}
                    <Route path="/Map/*" element={<ProtectedRoute component={Map} isLoggedIn={isLoggedIn} />} />
                    <Route path="/Food/*" element={<ProtectedRoute component={Food} isLoggedIn={isLoggedIn} />} />
                    <Route path="/List/*" element={<ProtectedRoute component={List} isLoggedIn={isLoggedIn} />} />
                    <Route path="/Main/*" element={<ProtectedRoute component={Main} isLoggedIn={isLoggedIn} />} />
                    <Route path="/Write/*" element={<ProtectedRoute component={Write} isLoggedIn={isLoggedIn} />} />
                    <Route path="/Hospital/*" element={<ProtectedRoute component={Hospital} isLoggedIn={isLoggedIn} />} />
                    <Route path="/HospitalList/*" element={<ProtectedRoute component={HospitalList} isLoggedIn={isLoggedIn} />} />
                    <Route path="/cats/:catId/*" element={<ProtectedRoute component={CatDetail} isLoggedIn={isLoggedIn} />} />
                    <Route path='/SignUp' element={<SignUp onLogin={handleLogin} />} /> 
                    <Route path='/UserSet' element={<UserSet onLogin={handleLogin} />} />
                    <Route path='/Mypage/*' element={<ProtectedRoute component={Mypage} isLoggedIn={isLoggedIn} />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App; */


import React, { useState } from 'react';
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

import Menu from './components/Menu/Menu';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import { AuthProvider } from './components/Auth/AuthContext';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('token'); // 로그아웃 시 토큰 제거
        window.location.href = '/'; // 로그인 페이지로 리디렉션
    };

    return (
        <AuthProvider>
            <Router>
                <Menu isLoggedIn={isLoggedIn} onLogout={handleLogout} />
                <Routes>
                    <Route path="/" element={<User onLogin={handleLogin} />} />
                    <Route path="/Map/*" element={<ProtectedRoute element={<Map />} isLoggedIn={isLoggedIn} />} />
                    <Route path="/Food/*" element={<ProtectedRoute element={<Food />} isLoggedIn={isLoggedIn} />} />
                    <Route path="/List/*" element={<ProtectedRoute element={<List />} isLoggedIn={isLoggedIn} />} />
                    <Route path="/Main/*" element={<ProtectedRoute element={<Main />} isLoggedIn={isLoggedIn} />} />
                    <Route path="/Write/*" element={<ProtectedRoute element={<Write />} isLoggedIn={isLoggedIn} />} />
                    <Route path="/Hospital/*" element={<ProtectedRoute element={<Hospital />} isLoggedIn={isLoggedIn} />} />
                    <Route path="/HospitalList/*" element={<ProtectedRoute element={<HospitalList />} isLoggedIn={isLoggedIn} />} />
                    <Route path="/cats/:catId/*" element={<ProtectedRoute element={<CatDetail />} isLoggedIn={isLoggedIn} />} />
                    <Route path="/SignUp" element={<SignUp onLogin={handleLogin} />} /> {/* SignUp에 onLogin 전달 */}
                    <Route path="/UserSet" element={<UserSet onLogin={handleLogin} />} />
                    <Route path="/Mypage/*" element={<ProtectedRoute element={<Mypage />} isLoggedIn={isLoggedIn} />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
