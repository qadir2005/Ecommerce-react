import React from 'react'
import { CiSearch,CiHeart, } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

import { CiUser } from "react-icons/ci";



function Navbar() {
  return (
    <div className='flex justify-between shadow-md border-black px-[3%] bg-[#fbfaf4] h-16 '>
        <h1 className='text-2xl box-content  border-black border-2  cursor-pointer items-center flex font-semibold'>Abdul Qadir</h1>
        <ul className='flex items-center gap-8'>
            <li className='cursor-pointer'>Home </li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Contact Us</li>
            <li className='cursor-pointer'>Sign up</li>
        </ul>
    <div className="items-center flex gap-12 ">
        <div className='flex h-9'>
        <input type="text" placeholder='Search Products' className='p-1 pl-6 bg-[#F2EED7] border-solid rounded-s-xl'  />
        <CiSearch style={{borderLeft: "1px solid black" }} className='cursor-pointer bg-[#F2EED7] h-8 w-10  p-2 rounded-e-xl border-solid focus:border:black text-2xl'/>
        </div>
        <div className='flex text-2xl gap-5'>

        <CiHeart className=' cursor-pointer ' />
        <IoCartOutline />
        <CiUser />

        </div>
    </div>
    </div>
        
  )
}
export default Navbar
