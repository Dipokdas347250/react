import React from 'react'
import Container from './container/Container'
import Flex from './container/Flex'
import banner from "../assets/banner.png"

const Banner = () => {
    return (
        <>
            <section className=' py-[72px]'>
                <Container>
                    <Flex className=" justify-between items-center">
                        <div className="">
                            <h1 className=' text-[65px] text-[#292019] font-habibi leading-[76px] w-[710px] tracking-tighter-[2%]'>Modern Furniture For
                                Modern Living Style</h1>
                                <p className=' text-[20px] text-[#000] font-habibi leading-[28px] w-[471px] tracking-tighter-[2%] mt-[43px]'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstr ate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                                    
                                     </p>
                                     <p  className=' text-[20px] text-[#000] font-habibi leading-[28px] w-[471px] tracking-tighter-[2%] mt-[50px]'>graphic design, Lorem ipsum is a place holder text commonly used to demo nstrate the visual form of a document or a typeface without relying ..</p>
                                     <div className=" flex gap-[33px] mt-[43px] ">
                                        <button className=' py-[30px] px-[70px] bg-[#C4A586] text-[#fff] text-[27px] font-gupter border-2 border-[#C4A586] duration-300 ease-in-out  hover:bg-[#fff] hover:text-[#C4A586] cursor-pointer'>Reagister</button>
                                        <button className=' py-[30px] px-[70px] bg-[#C4A586] text-[#fff] text-[27px] font-gupter border-2 border-[#C4A586] duration-300 ease-in-out  hover:bg-[#fff] hover:text-[#C4A586] cursor-pointer'>Watch Video’s</button>
                                     </div>
                        </div>
                        <div className="">
                            <img src={banner} alt="" />
                        </div>
                    </Flex>
                </Container>
            </section>
        </>
    )
}

export default Banner