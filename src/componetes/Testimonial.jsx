import React, { useState, useEffect, useRef } from "react";
import Container from './container/Container';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sofa1 from "../assets/men01.jpg";
import sofa2 from "../assets/women01.png";
import sofa3 from "../assets/women02.png";
import sofa4 from "../assets/women03.png";
import { MdStar } from "react-icons/md";
import { FaArrowRight ,FaArrowLeft } from "react-icons/fa";

function SampleNextArrow(props) {
    const {  onClick } = props;
    return (
      <div className=" absolute h-[40px] w-[40px] bg-[#B99272] border border-[#B99272] hover:bg-[#fff] hover:border-[#000] rounded-full   bottom-0 translate-y-[-50%]  right-[-10px]  cursor-pointer z-50 duration-300 ease-in-out " onClick={onClick}>
      <FaArrowRight className=' absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-[#000]' />
     </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {  onClick } = props;
    return (
      <div className=" absolute h-[40px] w-[40px] bg-[#B99272] border border-[#B99272] hover:bg-[#fff] hover:border-[#000] rounded-full  bottom-0 translate-y-[-50%] right-[50px] cursor-pointer z-50 duration-300 ease-in-out " onClick={onClick}>
       <FaArrowLeft className=' absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-[#000] ' />
      </div>
     
    );
  }



const Testimonial = () => {

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    

    //  let test = [
    //         {
    //             id: 1,
    //             name: "Sofa",
    //             price: "$129",
    //             oldPrice: "$169",
    //             img: sofa1
    //         },
    //         {
    //             id: 2,
    //             name: "Sofa",
    //             price: "$129",
    //             oldPrice: "$169",
    //             img: sofa2
    //         },
    //         {
    //             id: 3,
    //             name: "Sofa",
    //             price: "$129",
    //             oldPrice: "$169",
    //             img: sofa3
    //         },
    //         {
    //             id: 4,
    //             title: "Leat’s See What Our Customer Say", 
    //             discription: "graphic design, Lorem ipsum is a place holder text commonly used to demo nstrate the visual form of a document or a typeface without relying ..",  
    
    //             name: "Istiak Mahmud",
    //             date: "08 August 2022",
    //             img: sofa4
    //         },
           
    //     ]
    const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

    return (
        
        <>
            <section className="py-20 px-[25px] ">
                <Container>
                    <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)} {...settings} >
                       
                                {/* {test.map((item)=>(
                            <div className="relative">
                                     <img className="  w-[477px] h-[615px] " src={item.img} alt="" />
                            <div className="w-1/2 absolute  top-0 right-0  ">
                                <h3 className="text-[55px] text-[#000] font-gupter font-medium mt-[70px]">{item.title}</h3>
                                <p className="text-[20px] text-[#000] font-gupter font-normal mt-[40px] w-[400px]">{item.discription}</p>
                                <div className=" flex ml-[100px] mt-[100px] gap-[80px]">
                                    <div className="">
                                        <h3 className="text-[22px] text-[#000] font-gupter font-bold " >{item.name}</h3>
                                        <h4 className="text-[17px] text-[#000] font-habibi font-normal ">{item.date}</h4>
                                    </div>
                                    <div className="">
                                        <MdStar className="inline text-yellow-500 text-2xl" />
                                        <MdStar className="inline text-yellow-500 text-2xl" />
                                        <MdStar className="inline text-yellow-500 text-2xl" />
                                        <MdStar className="inline text-yellow-500 text-2xl" />
                                        <MdStar className="inline text-yellow-500 text-2xl" />

                                    </div>
                                </div>
                            </div>

                               
                            </div>
                                ))} */}



                            <div className="relative">
                                <img className="  w-[477px] h-[615px] " src={sofa1} alt="" />
                            <div className="w-1/2 absolute  top-0 right-0  ">
                                <h3 className="text-[55px] text-[#000] font-gupter font-medium mt-[70px]">Leat’s See What Our Customer Say</h3>
                                <p className="text-[20px] text-[#000] font-gupter font-normal mt-[40px] w-[400px]">graphic design, Lorem ipsum is a place holder text commonly used to demo nstrate the visual form of a document or a typeface without relying ..</p>
                                <div className=" flex ml-[100px] mt-[100px] gap-[80px]">
                                    <div className="">
                                        <h3 className="text-[22px] text-[#000] font-gupter font-bold " >Istiak Mahmud</h3>
                                        <h4 className="text-[17px] text-[#000] font-habibi font-normal ">08 August 2022</h4>
                                    </div>
                                    <div className="">
                                        <MdStar className="inline text-yellow-500 text-2xl" />
                                        <MdStar className="inline text-yellow-500 text-2xl" />
                                        <MdStar className="inline text-yellow-500 text-2xl" />
                                        <MdStar className="inline text-yellow-500 text-2xl" />
                                        <MdStar className="inline text-yellow-500 text-2xl" />

                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="relative">
                                <img className="  w-[477px] h-[615px] " src={sofa2} alt="" />
                            <div className="w-1/2 absolute  top-0 right-0  ">
                                <h3 className="text-[55px] text-[#000] font-gupter font-medium mt-[70px]">Leat’s See What Our Customer Say</h3>
                                <p className="text-[20px] text-[#000] font-gupter font-normal mt-[40px] w-[400px]">graphic design, Lorem ipsum is a place holder text commonly used to demo nstrate the visual form of a document or a typeface without relying ..</p>
                                <div className=" flex ml-[100px] mt-[100px] gap-[80px]">
                                    <div className="">
                                        <h3 className="text-[22px] text-[#000] font-gupter font-bold " >Istiak Mahmud</h3>
                                        <h4 className="text-[17px] text-[#000] font-habibi font-normal ">08 August 2022</h4>
                                    </div>
                                    <div className="">
                                        <MdStar className="inline text-yellow-500 text-2xl" />
                                        <MdStar className="inline text-yellow-500 text-2xl" />
                                        <MdStar className="inline text-yellow-500 text-2xl" />
                                        <MdStar className="inline text-yellow-500 text-2xl" />
                                        <MdStar className="inline text-yellow-500 text-2xl" />

                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="relative">
                                <img className="  w-[477px] h-[615px] " src={sofa3} alt="" />
                            <div className="w-1/2 absolute  top-0 right-0  ">
                                <h3 className="text-[55px] text-[#000] font-gupter font-medium mt-[70px]">Leat’s See What Our Customer Say</h3>
                                <p className="text-[20px] text-[#000] font-gupter font-normal mt-[40px] w-[400px]">graphic design, Lorem ipsum is a place holder text commonly used to demo nstrate the visual form of a document or a typeface without relying ..</p>
                                <div className=" flex ml-[100px] mt-[100px] gap-[80px]">
                                    <div className="">
                                        <h3 className="text-[22px] text-[#000] font-gupter font-bold " >Istiak Mahmud</h3>
                                        <h4 className="text-[17px] text-[#000] font-habibi font-normal ">08 August 2022</h4>
                                    </div>
                                    <div className="">
                                        <MdStar className="inline text-yellow-500 text-2xl" />
                                        <MdStar className="inline text-yellow-500 text-2xl" />
                                        <MdStar className="inline text-yellow-500 text-2xl" />
                                        <MdStar className="inline text-yellow-500 text-2xl" />
                                        <MdStar className="inline text-yellow-500 text-2xl" />

                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="relative">
                                <img className="  w-[477px] h-[615px] " src={sofa4} alt="" />
                            <div className="w-1/2 absolute  top-0 right-0  ">
                                <h3 className="text-[55px] text-[#000] font-gupter font-medium mt-[70px]">Leat’s See What Our Customer Say</h3>
                                <p className="text-[20px] text-[#000] font-gupter font-normal mt-[40px] w-[400px]">graphic design, Lorem ipsum is a place holder text commonly used to demo nstrate the visual form of a document or a typeface without relying ..</p>
                                <div className=" flex ml-[100px] mt-[100px] gap-[80px]">
                                    <div className="">
                                        <h3 className="text-[22px] text-[#000] font-gupter font-bold " >Istiak Mahmud</h3>
                                        <h4 className="text-[17px] text-[#000] font-habibi font-normal ">08 August 2022</h4>
                                    </div>
                                    <div className="">
                                        <MdStar className="inline text-yellow-500 text-2xl" />
                                        <MdStar className="inline text-yellow-500 text-2xl" />
                                        <MdStar className="inline text-yellow-500 text-2xl" />
                                        <MdStar className="inline text-yellow-500 text-2xl" />
                                        <MdStar className="inline text-yellow-500 text-2xl" />

                                    </div>
                                </div>
                            </div>
                            </div>
                        

                    </Slider>

                    
                    <Slider
                        asNavFor={nav1}
                        ref={slider => (sliderRef2 = slider)}
                        slidesToShow={3}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        className=" mt-10 w-[500px] ml-[209px]"
                    >
                        <div>
                            <img className="w-[130px] h-[130px]" src={sofa1} alt="" />
                        </div>
                        <div>
                            <img className="w-[130px] h-[130px]" src={sofa2} alt="" />
                        </div>
                        <div>
                            <img className="w-[130px] h-[130px]" src={sofa3} alt="" />
                        </div>
                        <div>
                            <img className="w-[130px] h-[130px]" src={sofa4} alt="" />
                        </div>
                    </Slider>

                </Container>
            </section>
        </>
    )
}

export default Testimonial