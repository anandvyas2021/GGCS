import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "framer-motion";

import Tabs from "../UI/Tabs";
import { pricing } from "./dummyData";
import { PrimaryBtn } from "../Button";
import { H2, H3, H4, H5, H6, P } from "../Typography";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        // y: 100,
    },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.15 * index,
        },
    }),
};

function Pricing() {
    const [state, setState] = useState({
        currentTab: "social_media",
        plans: pricing?.filter((obj) => {
            return obj?.value === "social_media";
        })[0]?.plans,
    });
    const navigate = useNavigate();
    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        speed: 500,
        arrows: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 625,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    useEffect(() => {
        let plans = pricing?.filter((obj) => {
            return obj?.value === state?.currentTab;
        })[0]?.plans;

        setState((prev) => {
            return { ...prev, plans: plans };
        });
    }, [state?.currentTab]);

    const currentTabHandler = (tab) => {
        setState((prev) => {
            return { ...prev, currentTab: tab };
        });
    };

    const { currentTab } = state;
    return (
        <div>
            <Tabs
                options={pricing}
                currentTab={state?.currentTab}
                currentTabHandler={currentTabHandler}
            />
            <Slider {...settings}>
                {state?.plans?.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-center p-6 mx-auto max-w-lg text-center text-gray-900 bg-[#F5F9FC] rounded-lg shadow-md"
                    >
                        <div>
                            {item?.icon ? (
                                <div className="flex items-center justify-center w-24 h-24 mx-auto mb-3 bg-gray-200 rounded-full ">
                                    <img
                                        src={item?.icon}
                                        alt=""
                                        className="w-20 h-20 p-3"
                                    />
                                </div>
                            ) : null}
                            <H4 className="mb-1 ">{item?.title}</H4>
                            <P className="text-gray-500">{item?.desc}</P>
                            <hr className="my-2 border-2 border-[#caf0f8]" />
                            {item?.price ? (
                                <div className="flex items-baseline justify-center mt-8">
                                    <H3 className="mr-1 text-[#023e8a]">
                                        {item?.price}
                                    </H3>
                                    <P className="text-gray-500">/month</P>
                                </div>
                            ) : null}
                            <ul
                                role="list"
                                className="my-8 space-y-3 text-left h-[350px] overflow-y-scroll no-scrollbar"
                            >
                                {item?.description?.map((desc, i) => (
                                    <motion.li
                                        variants={fadeInAnimationVariants}
                                        initial="initial"
                                        whileInView="animate"
                                        viewport={{
                                            once: true,
                                        }}
                                        custom={i}
                                        key={i}
                                        className="flex items-center space-x-3 fadeIn"
                                    >
                                        {/* Icon  */}
                                        <svg
                                            className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <P>
                                            {desc?.label}
                                            <p className="font-axiSemiBold">
                                                {desc?.time}
                                            </p>
                                        </P>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                        <PrimaryBtn
                            className="mb-4 w-full !rounded-xl !bg-primary !border-2 hover:!border-card2 text-white"
                            onClick={() => {
                                navigate("/plans", { state: item });
                            }}
                        >
                            View Details
                        </PrimaryBtn>
                        <PrimaryBtn
                            className="w-full rounded-xl bg-white !text-primary border-0 hover:!text-white hover:bg-gradient-to-r from-tertiary via-secondary to-tertiary hover:bg-[length:200%] hover:animate-gradientBg"
                            onClick={() => {
                                navigate("/contact");
                            }}
                        >
                            {currentTab === "it_services"
                                ? "Send Enquiry"
                                : "Join this Plan"}
                        </PrimaryBtn>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Pricing;
