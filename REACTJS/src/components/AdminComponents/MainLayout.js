import React from 'react';
import Header from '../UserComponents/Header';
import Footer from '../UserComponents/Footer';
const MainLayout = ({ children, isLoggedIn, userInfo, handleLogout }) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} userInfo={userInfo} handleLogout={handleLogout} />
      <div className="main-layout">
        {children}
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
