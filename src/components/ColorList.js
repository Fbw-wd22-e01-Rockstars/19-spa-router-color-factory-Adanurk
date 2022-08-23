import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const ColorList = ({colors}) => {
    
  return (
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
  )
}

export default ColorList