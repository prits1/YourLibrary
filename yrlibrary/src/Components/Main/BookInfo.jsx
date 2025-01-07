import { User } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';

function BookInfo() {
  const { user, logout } = useAuth();
  const handleLogout = async() => {
      await logout(); 
    };
  return (
    <div>

    <div className='p-4'>
        <div className='flex justify-between'>
             <a href='/' className='text-black font-sans pl-6'>Your<span className='text-primary font-semibold'>LIBRARY</span></a>
             <div className='flex px-4'>
                      <ul className='hover:text-primary px-4 py-1 '>
                      <NavLink to="/publish">Publish</NavLink>
                    </ul> 
                      <button onClick={handleLogout} className='bg-secondary rounded-full  py-1 px-3 hover:bg-primary'>
                     LOGOUT </button>
                      <User className='m-1 py-1' />
                      </div>
             </div>
             </div>
             <div className='grid grid-cols-2 '>
                <div className=' flex items-center justify-center'>
             <img src="../../img/image 4.png" alt=""/>
                </div>
                <div className='flex flex-col justify-end items-start'>
                    <p><b>Book Name :</b> The mind of the leader</p>
                     <p> <b> Author :</b> Kevin Anderson </p>
                     <p> <b>Category :</b> Factual      </p><br />
                     <p> <b>Owner :</b> Priyasha vanshi  </p>
                     <p> <b>Contact no. :</b> 9087242xxx  </p>
                     <p> <b>Address :</b> Lal colony, delhi  </p><br />
                     <p> <b>Borrow price :</b> 10rs./day   </p>
                     <p> <b>Buy price :</b> 450rs.  </p><br />
                     <p style={{paddingRight: 100}}> <b>Additional Details :</b> Published year of this book - 2008,
                       I purchase this book in January,2024.</p>
                </div>
             </div>
             <br />
             <br />
             <div className='relative text-2xl' style={{
            position: 'absolute',
            left: '100px'
          }}>
        <u>
          Summary of the book<br />
        </u>
        <p className='text-base' style={{marginTop: 8, paddingRight: 70}}>The book delves into the intricate workings of the leader's mind, examining how self-awareness, mindfulness, and emotional intelligence contribute to effective leadership. One key theme in the book is the importance of self-awareness.</p>
      </div>
    </div>
  )
}

export default BookInfo