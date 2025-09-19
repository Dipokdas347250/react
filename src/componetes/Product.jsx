import React from 'react'
import Container from './container/Container'
import Flex from './container/Flex'
import { HiArrowLongRight } from "react-icons/hi2";
import Products from './Products';
import sofa from "../assets/sofa.png"
import sofa01 from "../assets/sofa01.png"
import sofa02 from "../assets/sofa02.png"


const Product = () => {

    let data = [
        {
            id: 1,
            name: "Sofa",
            price: "$129",
            oldPrice: "$169",
            img: sofa
        },
        {
            id: 2,
            name: "Sofa",
            price: "$129",
            oldPrice: "$169",
            img: sofa01
        },
        {
            id: 3,
            name: "Sofa",
            price: "$129",
            oldPrice: "$169",
            img: sofa02
        },
        {
            id: 4,
            name: "Sofa",   

            price: "$129",
            oldPrice: "$169",
            img: sofa02
        },
        {
            id: 5,
            name: "Sofa",
            price: "$129",
            oldPrice: "$169",
            img: sofa
        },
        {
            id: 6,
            name: "Sofa",   
            price: "$129",
            oldPrice: "$169",
            img: sofa01
        },
    ]



  return (
    
    <>
    <section className=' px-[70px] py-[95px]'>
        <Container>
            
            <Flex className=" justify-between items-center pt-[105px] pb-[70px]">
                <div className="">
                    <h2 className='text-[40px] text-[#000] font-gupter font-bold mb-[42px]'>Peoducts</h2>
                </div>
                <div className=" flex gap-[91px] items-center">
                    <div className=" flex gap-[65px] items-center">
                        <h3 className='text-[25px] text-[#000] font-gupter font-bold'>Best Selling</h3>
                    <h3 className='text-[25px] text-[#000] font-gupter font-bold'>Most Popular</h3>
                    </div>
                    <div className=" flex gap-4 items-center cursor-pointer">
                        <button className='text-[16px] text-[#C4A586] font-gupter font-medium'> See All</button>
                        < HiArrowLongRight className='text-[#C4A586] text-[40px]' />

                    </div>
                </div>
            </Flex>

            <div className=" grid grid-cols-3 gap-[30px] ">
                {data.map((item)=>(

                <Products item={item}/>
                ))}
            </div>
        </Container>
    </section>
    </>
  )
}

export default Product