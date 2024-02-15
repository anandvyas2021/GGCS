import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import { uposDetails } from "../../../db/dummy";
import { Container } from "../../../components/Layout";
import BackNavigate from "../../../components/UI/BackNavigate";
import { Desc, H1Animate, H3, H6, P } from "../../../components/Typography";

function UposPackage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Container>
            <BackNavigate backLabel="UPOS Packages" backLink="/" />
            <section className="text-center py-28">
                <H1Animate>{uposDetails?.title}</H1Animate>
                <Desc className="pt-3">{uposDetails?.subTitle}</Desc>
                <p className="h-1 mx-auto my-3 bg-gray-200 w-80"></p>
            </section>
            <section className="grid grid-cols-1 gap-4 pb-10 md:grid-cols-2 xl:grid-cols-4 lg:pb-20">
                {uposDetails?.list?.map((item, i) => {
                    return (
                        <div
                            className="h-full p-3 transition duration-300 bg-gray-100 border-2 rounded-lg hover:scale-105"
                            key={i}
                        >
                            <div className="mb-5">
                                <img
                                    src={item?.icon}
                                    alt={item?.label}
                                    className="w-full rounded-lg h-60"
                                />
                            </div>
                            <P>{item?.label}</P>
                        </div>
                    );
                })}
            </section>
            <div className="pb-10 mx-auto md:w-1/2 sm:pb-20">
                <div className="relative flex flex-col flex-wrap items-center p-8 bg-opacity-75 border border-pink-500 ">
                    <H6 className="absolute -top-3 px-3 py-1 !text-sm text-white bg-opacity-25 rounded-full bg-gradient-to-r from-pink-500 to-red-400">
                        MOST POPULAR
                    </H6>
                    <H3 className="">{uposDetails?.label}</H3>
                    <H3 className="!text-4xl my-3 text-blue-500 font-sbold">
                        {uposDetails?.price}
                    </H3>
                </div>
                <div className="flex justify-center mt-5">
                    <Link
                        onClick={() =>
                            window.open(`https://beta.globalgarner.com/upos`, "_blank")
                        }
                        className="px-5 md:px-8 py-2 md:py-2.5 flex align-middle justify-center text-base font-semibold bg-primaryBtn text-white1 border-2 rounded-full hover:scale-105 transition-all duration-300"
                    >
                        Know more about UPOS
                    </Link>
                </div>
            </div>
            <section className="grid grid-cols-1 gap-4 pb-10 md:grid-cols-2 xl:grid-cols-4 lg:pb-20">
                {uposDetails?.extra?.map((item, i) => {
                    return (
                        <div
                            className="h-full p-3 transition duration-300 bg-gray-100 border-2 rounded-lg hover:scale-105"
                            key={i}
                        >
                            <div className="mb-5">
                                <img
                                    src={item?.icon}
                                    alt={item?.label}
                                    className="w-full rounded-lg h-60"
                                />
                            </div>
                            <P>{item?.label}</P>
                        </div>
                    );
                })}
            </section>
        </Container>
    );
}

export default UposPackage;

//  personalised posts every month
//  content guide(video and promotion)
//  cross channel promotion
//  Facebook and insta page branding
//  10000 reach every month