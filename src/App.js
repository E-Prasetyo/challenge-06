import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { 
  HomeUser, Login, Register, HomeAdmin, NotFound
} from './Pages'
import AuthRoute from './Auth/AuthRoute';
import { SidebarAdmin } from './Components';
import './App.css';

function App() {
  const auth = useSelector((state) => state.auth?.role)


  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/' element={
        <AuthRoute>
          {
           auth === 'admin' ? 
            <SidebarAdmin>
              <HomeAdmin/>
            </SidebarAdmin>
            :<HomeUser/>
           }
        </AuthRoute>
      }/>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
