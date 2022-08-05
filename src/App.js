import './App.css';
import { NavigationBar } from './components/NavigationBar';
import { ErrorPage } from './pages/error/ErrorPage';
import { HomePage } from './pages/home/HomePage';
import { LoginPage } from './pages/login/LoginPage';
import { RegisterPage } from './pages/register/RegisterPage';
import { ProfilePage } from './pages/profile/ProfilePage';
import { AdminPage } from './pages/admin/AdminPage';
import { UnauthorizedPage } from './pages/unauthorized/UnauthorizedPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
