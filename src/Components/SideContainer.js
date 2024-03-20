import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideContainer = () => {
  const isMenuOpen = useSelector(store => store.navToggle.isMenuOpen)
  if(!isMenuOpen) return null //early return 

  return (
    <div className='p-5 shadow-lg w-48'>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <li>Sports</li>
        <li>Music</li>
        <li>Movies</li>
      </ul>
      <h2 className='font-bold pt-5'>Subscription</h2>
      <ul>
        <li>Sports</li>
        <li>Movies</li>
        <li>Music</li>
      </ul>
      <h2 className='font-bold pt-5'>Watch Later</h2>
      <ul>
        <li>Sports</li>
        <li>Movies</li>
        <li>Music</li>
        </ul>       
    </div>
  )
}

export default SideContainer;