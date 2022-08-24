import React from 'react';
import { Link, useLocation, useParams, Navigate } from 'react-router-dom';


//useNavigate hook => it navigates user from one to another page;
//const navigate = useNavigate()
//button kullanmak istersen mesela navlink yerine bunu kullanabilirsin, onclick te arrow fuznction suraya git diyerek!

const Color = ({colors}) => {
  const params = useParams();
  const location = useLocation();
  console.log(params);
  console.log(location);
  const color = colors.some(item => item.name === params.name)
 
 if(!color){
   return <Navigate to="/colors"/>
 }

  return (
    <div className='big-color' style={{backgroundColor:`${location?.state?.value}`}}>
      <p className='big-one'>This is {location?.state?.name}! Isn't it beautiful?</p>
      <Link to="/colors"><p className='color-link'>Go Back</p></Link>
    </div>
  )
}

export default Color