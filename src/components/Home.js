import React from 'react'
import { Outlet, Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
        <header className='header'>
            <h2>Welcome to the color factory</h2>
            <Link to="colors/new"><h1 className='add'>Add Color</h1></Link>
        </header>
        <Outlet/>
    </div>
  )
}

export default Home