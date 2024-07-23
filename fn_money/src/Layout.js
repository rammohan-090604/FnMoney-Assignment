import React from 'react';
import Navbar from './pages/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='font-san font-normal tracking-wide'>
      <Navbar />
      <main className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
