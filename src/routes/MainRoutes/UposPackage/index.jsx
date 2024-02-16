import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import { uposDetails } from "../../../db/dummy";
import { Container } from "../../../components/Layout";
import BackNavigate from "../../../components/UI/BackNavigate";
import {
    Desc,
    H1Animate,
    H2,
    H3,
    H4,
    H5,
    H6,
    P,
    Telephone,
} from "../../../components/Typography";

function UposPackage() {
    useEffect(() => {
        // window.scrollTo(0, 0);
    }, []);

    return (
        <>
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
            </Container>
            <div className="pb-10 mx-auto md:w-1/2 sm:pb-20">
                <div className="relative flex flex-col flex-wrap items-center *:text-center p-8 bg-opacity-75 border border-pink-500 ">
                    <H6 className="absolute -top-3 px-3 py-1 !text-sm text-white bg-opacity-25 rounded-full bg-gradient-to-r from-pink-500 to-red-400">
                        MOST POPULAR
                    </H6>
                    <H3>{uposDetails?.label}</H3>
                    <H3 className="!text-4xl my-3 pb-16 text-blue-500 font-bold">
                        {uposDetails?.price}
                    </H3>
                    <H6 className="absolute flex flex-col items-center bg-gray-100 rounded-lg p-2 w-fit left-1/3 bottom-2 *:!text-xl">
                        <Telephone className="!text-tertiary">
                            +91 9662726192
                        </Telephone>
                        For more details, contact
                    </H6>
                </div>
                <div className="flex justify-center gap-5 mt-5">
                    <Link
                        onClick={() =>
                            window.open(
                                `https://beta.globalgarner.com/upos`,
                                "_blank"
                            )
                        }
                        className="px-5 md:px-8 py-2 md:py-2.5 flex align-middle justify-center text-base font-semibold bg-secondary text-white1 border-2 rounded-full hover:scale-105 transition-all duration-300"
                    >
                        Know more about UPOS
                    </Link>
                    <Link
                        onClick={() =>
                            window.open(
                                "https://docs.google.com/forms/d/e/1FAIpQLSd1X1hVDlBd3BPAz2WxJjbfV8FSnQSwKddk4d4M97YEaPkbgg/viewform",
                                "_blank"
                            )
                        }
                        className="px-5 md:px-8 py-2 md:py-2.5 flex align-middle justify-center text-base font-semibold bg-tertiary text-white1 border-2 rounded-full hover:scale-105 transition-all duration-300"
                    >
                        Get lead form
                    </Link>
                </div>
            </div>
            <div className="py-10 md:px-16">
                <H2 className="!mb-10">Deliverables</H2>
                <section className="grid grid-cols-1 gap-5 pb-10 gap-y-10 xl:grid-cols-2 lg:pb-20">
                    {uposDetails?.extra?.map((item, i) => (
                        <div
                            className="h-full p-3 transition duration-300 odd:bg-gray-200 border-2 border-gray-300 even:bg-gray-200 text-center rounded-lg hover:shadow-2xl hover:scale-[1.01]"
                            key={i}
                        >
                            <H4 className="mb-5">{item?.label}</H4>
                            <figure className="grid grid-cols-1 gap-2 md:grid-cols-2">
                                {item?.images?.map((image, j) => (
                                    <img
                                        key={j}
                                        src={image}
                                        alt={item?.label}
                                        className="w-full rounded-lg h-60"
                                    />
                                ))}
                            </figure>
                        </div>
                    ))}
                </section>
            </div>
        </>
    );
}

export default UposPackage;
