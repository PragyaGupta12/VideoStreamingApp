import React from 'react';
import SideContainer from './SideContainer';
// import MainContainer from './MainContainer';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className='flex'>
        <SideContainer/>
        {/* <MainContainer/> outlet because we want to render watch page and main container here, depending on what
        the router path is  */}
        <Outlet/>
    </div>
  )
}

export default Body;