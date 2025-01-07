import React, { useContext } from 'react'
import { User } from 'lucide-react'
import Card from './Card'
import { AuthContext } from '../utils/AuthContext';

function IndBooks() {
  const { user } = useContext(AuthContext);
  return (
    <div>
    <div className='relative '>
        <img src="../img/image 2.png" alt="" /> 
        <div className="absolute inset-0 mt-7">
            <a href='/' className='blocktext-black font-sans font-bold pl-6'>Your<span className='text-primary font-bold'>LIBRARY</span></a>
            <span className="text-2xl font-bold drop-shadow-lg flex items-center justify-center">Individual Source Books</span>
        </div>
        <div className='flex justify-end' style={{margin: 10}} ><User />{user ? user.name : "Guest"}</div>
    </div>
       <div className="flex flex-wrap items-center justify-center ">
      <Card />
      <Card />
      <Card />
      <Card />
       </div>
    </div>
  )
}

export default IndBooks