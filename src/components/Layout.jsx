import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback="Loading...">
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
