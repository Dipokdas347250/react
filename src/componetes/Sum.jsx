import React from 'react'
import Container from './container/Container'
import Flex from './container/Flex'
import chair from "../assets/chair.png"
import chair0 from "../assets/chair0.png"

const Sum = () => {
  return (
    <>
    <section className=' pt-[105px] pb-[154px]'>
        <Container>
            <div className="">
                <h2 className=' text-[23px] text-[#000] font-bold font-gupter text-center'>SUM OF OUR TRUSTED CLIENTS</h2>
                <ul className=' flex justify-between items-center text-[45px] text-[#72696A] font-bold font-gupter mt-[90px] px-[70px]'>
                    <li>Samsung</li>
                    <li>Google</li>
                    <li>IBM</li>
                    <li>DaraZ</li>
                    <li>emazon</li>
                </ul>
                <Flex className=" justify-between gap-[40px] items-center mt-[66px]">
                    <div className="pt-3 pb-[52px pl-[51px] pr-[38px]] w-[50%] flex justify-between items-center">
                            <div className="">
                                <h2 className='text-[30px] text-[#000] font-gupter font-bold'>House Product</h2>
                                <h3 className='text-[25px] text-[#72696A] font-gupter font-medium'>Browse More Collection</h3>
                            </div>
                            <div className="">
                                <img className='w-[180px]' src={chair} alt="" />
                            </div>
                    </div>
                     <div className="pt-3 pb-[52px] pl-[96px] pr-[48px] w-[50%] flex justify-between items-center bg-[#C4A586]">
                            <div className="">
                                <h2 className='text-[30px] text-[#000] font-gupter font-bold'>Office Furnicer</h2>
                                <h3 className='text-[25px] text-[#72696A] font-gupter font-medium'>Browse More Collection</h3>
                            </div>
                            <div className="">
                                <img className='w-[220px]' src={chair0} alt="" />
                            </div>
                    </div>
                    

                </Flex>
            </div>
        </Container>
    </section>
    </>
  )
}

export default Sum