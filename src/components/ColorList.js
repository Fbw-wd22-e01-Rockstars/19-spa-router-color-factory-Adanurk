import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const ColorList = ({colors}) => {
    
  return (
    <div className='home'>
    <header className='header'>
        <h2>Welcome to the color factory</h2>
        <Link to="new"><h1 className='add'>Add Color</h1></Link>
    </header>

    <div className='color-list'>
            <p>Please select a color:</p>
            <ul>
                {
                    colors.map(color => {
                        return (
                            <li key={color.name}><Link to={`/colors/${color.name}`} state={color}>{color.name}</Link></li>
                        )
                    })
                }
            </ul>
        </div>
        </div>
  )
}

export default ColorList