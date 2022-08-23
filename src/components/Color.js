import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const Color = ({info}) => {
  const params = useParams();
  const location = useLocation();
  console.log(params);
  console.log(location);

  return (
    <div className='big-color' style={{backgroundColor:`${location?.state?.value}`}}>
      <p className='big-one'>This is {location?.state?.name}! Isn't it beautiful?</p>
      <Link to="/colors"><p className='color-link'>Go Back</p></Link>
    </div>
  )
}

export default Color