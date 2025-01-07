import { Link } from 'react-router-dom'
import React from 'react'

function Body() {
  return (
 
    <div className='text-center text-3xl font-normal mt-7'> OPEN SOURCE BOOK
    <div className='flex flex-wrap justify-center gap-10 p-12'>
      <div><Link  className='min-h-14 min-w-60 shadow-lg shadow-orange-400 bg-orange-200 rounded-md flex justify-center items-center text-xl' to="/individual">Individual</Link></div>     
       <div ><Link className='min-h-14 min-w-60 shadow-lg shadow-orange-400 bg-orange-200 rounded-md flex justify-center items-center text-xl' to ="/institute">Institute</Link></div>
      </div>
     <div className='min-h-52 bg-primary p-7 my-10 font-medium'>OUR VISION
     <p className='text-white text-2xl py-6 px-20 font-light'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dignissimos provident cumque ipsam laudantium vero.lorem12 having a good day leads a good health</p>
     </div>
    </div>
  )
}

export default Body
