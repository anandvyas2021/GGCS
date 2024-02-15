import React from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { arrow } from "../../db/assets";

import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowRightIcon, ForwardIcon } from "@heroicons/react/24/outline";

import { Desc, H4, H5, H6, P } from "../Typography";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

const SwiperCarousel = ({ carouselData }) => {
    const navigate = useNavigate();
    return (
        <div className="relative mt-5">
            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView="auto"
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 50,
                    modifier: 2.5,
                }}
                // pagination={{
                //     el: ".swiper-pagination",
                //     clickable: true,
                // }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: true,
                }}
                speed={800}
                navigation={{
                    nextEl: ".swiper-button-next ",
                    prevEl: ".swiper-button-prev ",
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                className="swiper_container"
            >
                {carouselData?.map((item, i) => {
                    return (
                        <SwiperSlide
                            key={i}
                            onClick={() =>
                                navigate(`/service/${item?.slug}`, {
                                    state: { slug: item?.slug },
                                })
                            }
                            className="cursor-pointer"
                        >
                            <div className="h-[60%] relative card-img rounded-t-xl flex gap-5 items-center justify-center !b-[#56ab91] shadow-md">
                                <img
                                    src={item?.icon}
                                    alt="slide_image"
                                    className="slide_image !w-full h-[99%] !object-fill b-14"
                                />
                            </div>
                            <div className=" bg-gray-200 h-[5%] p-2.5 box-content whitespace-nowrap">
                                <H6 className="text-lg md:text-lg !text-center text-primary">
                                    {item?.heading}
                                </H6>
                            </div>
                            <div className="h-[30%] card-desc">
                                <ul className="flex box-content justify-start flex-wrap gap-x-2 text-grey1 m-3 !list-none text-left md:ml-5 text-lg md:text-xl">
                                    {item?.list?.map((item, i) => {
                                        return (
                                            <li
                                                key={i}
                                                className="flex items-start gap-2 px-2 mb-2 border-2 rounded-full w-fit"
                                            >
                                                {/* <img
                                                    src={arrow}
                                                    alt="services"
                                                    className="w-5 h-5 animate-flipArrow"
                                                /> */}
                                                <H6>{item?.subHeading}</H6>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </SwiperSlide>
                    );
                })}
                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline" />
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline" />
                    </div>
                    <div className="swiper-pagination" />
                </div>
            </Swiper>
        </div>
    );
};

export default SwiperCarousel;
