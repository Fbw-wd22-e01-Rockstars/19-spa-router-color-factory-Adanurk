import React from 'react'
import { useState } from 'react';

const Form = ({handleColors, colors}) => {
    const [colName, setColName] = useState();
    const [colValue, setColValue] = useState();


    const handleSubmit = (e) => {
        e.preventDefault();
        let myItem = {name:colName, value:colValue};
        handleColors([...colors, myItem]);
        console.log(colors);
        
        setColName();
        setColValue();
    }

    //! nasil yenileyecek ve inputlari bosaltacak?

    
    
  return (
    <form onSubmit={handleSubmit}>
        <label> Name: <input type="text" onChange={(e) => {setColName(e.target.value)}}/> </label>
        <label> Color: <input type="color" onChange={(e) => {setColValue(e.target.value)}}/> </label>
        <button type="submit" onSubmit={handleSubmit}>Add Color</button>
      </form>
  )
}

export default Form