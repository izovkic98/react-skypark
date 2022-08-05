import './App.css';
import { NavigationBar } from './components/NavigationBar';
import { ErrorPage } from './error/ErrorPage';
import { HomePage } from './home/HomePage';
import { LoginPage } from './login/LoginPage';
import { RegisterPage } from './register/RegisterPage';
import { ProfilePage } from './profile/ProfilePage';
import { AdminPage } from './admin/AdminPage';
import { UnauthorizedPage } from './unauthorized/UnauthorizedPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/home' element={<HomePage/>}></Route>
            <Route path='/login' element={<LoginPage/>}></Route>
            <Route path='/register' element={<RegisterPage/>}></Route>
            <Route path='/profile' element={<ProfilePage/>}></Route>
            <Route path='/admin' element={<AdminPage/>}></Route>
            <Route path='/404' element={<ErrorPage/>}></Route>
            <Route path='/401' element={<UnauthorizedPage/>}></Route>
            <Route path='*' element={<ErrorPage/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
