import React from 'react'

function Footer() {
  return (
    <div>
    <div className='mt-14 ml-7 mb-10'><a href='#' className='text-black font-sans pl-6 text-3xl'>Your<span className='text-primary font-semibold text-3xl'>LIBRARY</span></a>
    <p className='ml-6 py-6 pr-[800px]'>High level experience in book sharing resource and knowledge, producing quality reading.</p>
    <div className=''>
    <button type="button" className=" text-white bg-primary hover:bg-yellow-700 font-medium rounded-full text-sm px-10 py-2.5  mb-2 ml-6 ">Contact us</button>
    <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
    <div>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">About</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Login</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Signup</a>
                </li>
            </ul>
        </div><div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Books</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class=" hover:underline">Categories</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Populars</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Others</a>
                </li>
            </ul>
        </div><div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Associated with</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class=" hover:underline">Individual</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Institute/Organizatian</a>
                </li>
            </ul>
        </div><div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">For feedback:</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class=" hover:underline">Email us at <div>yrlibrary@gmail.com</div></a>
                </li>
            </ul>
        </div>
    </div>
    </div>
    </div>
     <div className='bg-primary w-screen h-20'></div>
     <div className='bg-black w-screen h-4 flex justify-center items-center text-white'>© 2024 All Rights Reserved</div>
    </div>
  )

}

export default Footer