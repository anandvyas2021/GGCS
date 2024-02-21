import React from "react";
import { Link } from "react-router-dom";
import lines from "../../../../assets/services/3 Lines.svg";
import dots from "../../../../assets/services/hero-3lines.svg";

import { servicesData } from "../../../../db/dummy";
import { rocket, services } from "../../../../db/assets";

import SwiperCarousel from "../../../../components/Carousel/Swiper";
import { H1Animate, SubHeading } from "../../../../components/Typography";

export default function Services(props) {
    return (
        <section className="relative py-8 bg-blue-00 md:py-20">
            <img
                src={lines}
                alt="dot-svg"
                className="absolute hidden md:flex left-10"
            />
            <img
                src={dots}
                alt="dot-svg"
                className="absolute bottom-0 right-0 hidden md:flex"
            />
            <div className="max-w-screen-xl px-3 mx-auto sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center">
                    <SubHeading>
                        {/* Smart Solutions for your business */}
                        Let's Transform Your Business With Our
                    </SubHeading>
                    <H1Animate>Our Services</H1Animate>
                </div>

                {/* <div className="grid grid-cols-1 gap-5 my-8 sm:grid-cols-2 md:grid-cols-3 md:gap-8 sm:my-12"> */}
                <SwiperCarousel carouselData={servicesData} />

                <div className="justify-center hidden mt-5 md:flex">
                    <div className="w-full p-3 text-center rounded-full shadow-xl lg:w-1/2 bg-grey3 ">
                        <div className="flex justify-center gap-2">
                            <div className="flex items-center">
                                <img
                                    src={rocket}
                                    alt="rocket"
                                    className="flex w-4 h-4 align-middle animate-pulse"
                                />
                            </div>
                            <div className="sm:flex">
                                <p className="block">You can also find our</p>
                                <Link
                                    to={"services"}
                                    className="relative block mx-2 text-primary"
                                >
                                    Services
                                    <img
                                        src={services}
                                        alt="services"
                                        className="w-full h-full absolute left-0 right-0 -bottom-2.5"
                                    />
                                </Link>
                                <p className="block">
                                    to contact for the consulting.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
