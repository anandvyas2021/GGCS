import React, { useEffect } from "react";
import banner from "../../../assets/services/banner1.gif";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

import { servicesData, serviceSocial, processData } from "../../../db/dummy";
import { otherServices } from "./dummyData";
import Pricing from "../../../components/Pricing";
import { Container } from "../../../components/Layout";
import SwiperCarousel from "../../../components/Carousel/Swiper";
import { Desc, H1Animate, H5, H6, P } from "../../../components/Typography";

export default function Services(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Container className="px-3 py-10 sm:px-8 md:px-12 sm:py-20">
                <div className="flex mb-16 md:justify-center">
                    <div className="text-center md:w-8/12">
                        <H1Animate>
                            {/* How can a perth social media help grow my
                                business? */}
                            Packages for everyone
                        </H1Animate>
                        <Desc>
                            Here at GGCS we focus on markets where technology,
                            innovation, and capital can unlock long-term value
                            and drive economic growth.
                        </Desc>
                    </div>
                </div>
                <div className="space-y-8 sm:gap-6 xl:gap-10 lg:space-y-0">
                    <Pricing />
                </div>
            </Container>
            <Container className="px-3 py-12 sm:px-8 md:px-12 md:py-20">
                <div className="grid md:grid-cols-2">
                    <div className="lg:pl-8">
                        <ul>
                            {processData?.map((item) => (
                                <li className="mb-8" key={item?.id}>
                                    <div
                                        className={`flex relative ${
                                            [
                                                "justify-start",
                                                "justify-center",
                                                "justify-end",
                                                "justify-center",
                                                "justify-start",
                                            ][item?.id - 1]
                                        }`}
                                    >
                                        <div className="mr-5">
                                            <figure className="relative">
                                                <img
                                                    src={item?.icon}
                                                    alt={item?.label}
                                                />
                                                <b className="absolute left-0 right-0 text-center -translate-y-1/2 top-1/2 text-white1">
                                                    0{item?.id}
                                                </b>
                                                <span className="absolute top-0 left-0 h-2 w-2 border rounded-full border-[#021d3580]" />
                                                <span className="absolute top-1 left-3 h-[2px] w-[2px] rounded-full bg-[#021d3580]" />
                                                <span className="absolute bottom-1.5 -right-1.5 h-1.5 w-1.5 rounded-full bg-[#021d3580]" />
                                                <span className="absolute bottom-0 right-0 h-[2px] w-[2px] rounded-full bg-[#021d3580]" />
                                            </figure>
                                        </div>
                                        <div className="w-10/12">
                                            <H5>{item?.label}</H5>
                                            <H6 className="text-grey4">
                                                {item?.desc}
                                            </H6>
                                        </div>
                                        {/* {item?.id < processData?.length ? (
                                            <>
                                                <div
                                                    className={`absolute ${
                                                        [
                                                            "top-0 right-[10%] -rotate-[30deg]",
                                                            "top-16 left-16 -rotate-[37deg]",
                                                            "top-28 -right-6 rotate-[35deg]",
                                                            "-top-10 -left-4 rotate-[45deg]",
                                                        ][item?.id - 1]
                                                    } `}
                                                >
                                                    {item?.id % 2 !== 0 ? (
                                                        <Line1 />
                                                    ) : (
                                                        <Line2 />
                                                    )}
                                                </div>
                                            </>
                                        ) : null} */}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <section className="w-full md:py-0">
                        <img src={banner} className="w-full h-full" />
                    </section>
                </div>
            </Container>
            <Container className="px-3 py-12 sm:px-8 md:px-12 md:py-20">
                <SwiperCarousel carouselData={servicesData} />
            </Container>
            <Container className="px-3 py-12 md:py-20">
                <div className="!mb-12 text-center">
                    <H1Animate className="mb-3">Our Other Services</H1Animate>
                    <H5 className="!text-gray-500">* Price on Request</H5>
                </div>
                <div className="grid grid-cols-1 gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-5 sm:gap-8">
                    {otherServices?.map((item) => (
                        <Link
                            to="/contact"
                            key={item?.id}
                            className="flex flex-col items-center justify-center p-2 transition-all border-2 border-gray-200 shadow-lg bg-blue4 bg-gray-20 rounded-xl hover:scale-105"
                        >
                            <img
                                src={item?.icon}
                                alt={item?.label}
                                className="w-8 h-8 mb-4"
                            />
                            <P className="text-">{item?.label}</P>
                        </Link>
                    ))}
                </div>
                <P>
                    *Budget Charges Extra(Add-on charges as per applicable or
                    the discretion of the company)
                </P>
            </Container>
            <Container className="px-3 py-12 sm:px-8 md:px-12 md:py-20">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-10">
                    {serviceSocial?.map((item) => (
                        <div
                            onClick={() =>
                                window.open(
                                    item?.link,
                                    "_blank",
                                    "toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes"
                                )
                            }
                            key={item?.id}
                            className={`group flex items-center justify-between group border p-7 rounded-xl cursor-pointer transition-all duration-[400ms] ${item?.class} hover:scale-110`}
                        >
                            <div className="flex items-center gap-3">
                                <span>
                                    <FontAwesomeIcon
                                        icon={item?.icon}
                                        size="2xl"
                                        color={item?.iconColor}
                                        className="group-hover:text-white1"
                                    />
                                </span>
                                <H6 className="group-hover:!text-white1">
                                    {item?.label}
                                </H6>
                            </div>
                            <div className="invisible group-hover:visible">
                                <ArrowRightIcon className="w-4 h-4 text-white1" />
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </>
    );
}
