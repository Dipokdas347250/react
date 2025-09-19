import React from 'react'
import { FaShoppingCart } from "react-icons/fa";



const Products = ({item}) => {
  return (
    <>
   <div className=" w-full h-[600px]  hover:scale-110 duration-300 ease-in-out">
     <div className="bg-[#C4A586]/60 w-[402px] h-[302px] pt-[37px] pb-[155px] pl-[85px] pr-[76px] relative">
        <button className=' bg-[#D1A070] border border-[#D1A070] text-[#000] text-[16px] font-gupter font-medium px-[40px] py-[20px] rounded-[20px] hover:bg-[#fff] hover:text-[#D1A070] duration-300 ease-in-out cursor-pointer  absolute top-[-35px] left-[50%] translate-x-[-50%]'>Add to Cart
        < FaShoppingCart className=' inline-block text-[20px] ml-2'/>
        </button>
        <div className="w-[212px] h-[112px]  flex justify-baseline  mb-[10px] mt-[10px]">
            <h2 className=' text-[25px] text-[#000] font-gupter font-medium'>{item.name}</h2>
           <div className="flex gap-[50px] mt-[70px]">
             <h3 className=' text-[20px] text-[#000] font-gupter font-normal mt-[10px]'>{item.price}</h3>
            <del className=' text-[20px] text-[#72696A] font-gupter font-normal mt-[10px]'>{item.oldPrice}</del>
           </div>
        </div>
        <img src={item.img} alt="" />
    </div>
   </div>
    </>
  )
}

export default Products