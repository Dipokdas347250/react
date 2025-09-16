import React from 'react'
import Container from './container/Container'
import logo from "../assets/Logo.png"
import { FaSearch } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import Flex from './container/Flex';




const Header = () => {
  return (
    <>
    <header className='mt-[20px]'>
        <nav>
            <Container>
                <div className=" ">
                   <Flex className=" justify-between items-center">
                     <div className="">
                        <img src={logo} alt="" />
                    </div>
                    <div className="">
                        <ul className='flex gap-[40px] font-gupter text-[17px] text-[#000] font-bold '>
                            <li className='relative after:absolute after:content-[""] after:bottom-0 after:left-0 after:w-0 after:duration-300 after:ease-in-out hover:after:w-full after:h-[2px] after:bg-[#000]'><a href="">Home</a></li>
                            <li className='relative after:absolute after:content-[""] after:bottom-0 after:left-0 after:w-0 after:duration-300 after:ease-in-out hover:after:w-full after:h-[2px] after:bg-[#000]' ><a href="">About US</a></li>
                            <li className='relative after:absolute after:content-[""] after:bottom-0 after:left-0 after:w-0 after:duration-300 after:ease-in-out hover:after:w-full after:h-[2px] after:bg-[#000]'><a href="">Products</a></li>
                            <li className='relative after:absolute after:content-[""] after:bottom-0 after:left-0 after:w-0 after:duration-300 after:ease-in-out hover:after:w-full after:h-[2px] after:bg-[#000]'><a href="">FAQ S</a></li>
                            <li className='relative after:absolute after:content-[""] after:bottom-0 after:left-0 after:w-0 after:duration-300 after:ease-in-out hover:after:w-full after:h-[2px] after:bg-[#000]'><a href="">Contact US</a></li>
                        </ul>
                    </div>
                    <div className=" flex gap-[20px] text-[24px]">
                            <FaSearch/>
                           <div className=" relative after:absolute after:content-[''] after:top-[-10px] after:right-[-5px] after:w-[15px]  after:h-[15px] after:bg-[#f00] after:rounded-full">
                             <MdDelete/>
                           </div>
                            <FaUserAlt/>
                    </div>
                   </Flex>
                </div>
            </Container>
        </nav>
    </header>
    </>
  )
}

export default Header