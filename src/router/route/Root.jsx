import React from 'react';
import { Outlet } from 'react-router-dom';

function Root() {
  return (
    <div className="main-container">
      <Outlet />
    </div>
  );
}

export default Root;
