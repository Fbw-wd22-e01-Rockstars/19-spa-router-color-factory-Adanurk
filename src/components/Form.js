import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = ({handleColors, colors}) => {
    const [colName, setColName] = useState();
    const [colValue, setColValue] = useState();
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        let myItem = {name:colName, value:colValue};
        handleColors([myItem, ...colors]);
        localStorage.setItem("colors", JSON.stringify([myItem, ...colors]))
        // console.log(colors);
        setColName();
        setColValue();
        navigate("/colors");
    }

  return (
    <form onSubmit={handleSubmit}>
        <label> Name: <input type="text" onChange={(e) => {setColName(e.target.value)}}/> </label>
        <label> Color: <input type="color" onChange={(e) => {setColValue(e.target.value)}}/> </label>
        <button type="submit" onSubmit={handleSubmit}>Add Color</button>
      </form>
  )
}

export default Form