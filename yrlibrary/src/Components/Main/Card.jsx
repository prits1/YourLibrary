import React from 'react'
// import appwriteService from "../conf"
import { useState } from 'react'
import { NavLink } from 'react-router-dom';

function Card({$id, bookname, coverImage, author}) {
    const [isHovered, setIsHovered] = useState(false);
  const [isBorrowHovered, setIsBorrowHovered] = useState(false);
  return (
    <div className='p-3'>
        <div style={{width: 180 , height: 300 , backgroundColor: '#FFF7E8' }} className='shadow-md rounded-md'><img  src={appwriteService.getFilePreview(coverImage)} style={{marginInline: 16, marginBottom: 12, paddingTop: 12,  height: 190, width: 150, borderRadius: 4}} alt={bookname}/>
    <h3 style={{paddingInline:24 , overflow: 'hidden' }}>{bookname}</h3>
    <p className='text-sm text-gray-500' style={{paddingInline:24}}>- by {author}</p>
    <div className='flex p-2'>
      <button type="button" className='rounded-lg mx-2 px-3 py-1 text-xs' style={{
      backgroundColor: isHovered ? '#00BFFF' : '#47DDFE',
      transition: 'background-color 0.3s',
    }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >Read</button>
  <button type="button" className='rounded-lg px-3 py-1 text-xs' style={{
      backgroundColor: isBorrowHovered ? '#FE1773' : '#FE4778',
    }} 
    onMouseEnter={() => setIsBorrowHovered(true)}
    onMouseLeave={() => setIsBorrowHovered(false)}
  ><NavLink to = {`/Book/${$id}`} >Borrow/Buy</NavLink></button>
      </div>
      </div>
</div>
  )
}

export default Card