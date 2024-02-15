import React from "react";
import star from "../../../../assets/icons/star.svg";
import heroShape1 from "../../../../assets/training/details/heroShape1.png";

import { features } from "../dummyData";
import { Container } from "../../../../components/Layout";
import { H1Animate, H3, H4, H5, H6 } from "../../../../components/Typography";

export default function DetailsBanner({ data }) {
    return (
        <div>
            <section
                className={`relative ${data?.details?.bannerBg} text-center !max-h-max overflow-hidden`}
            >
                <div className="py-32 md:p-20">
                    <img src={heroShape1} className="absolute top-0 left-0" />
                    <div className="flex flex-col items-center text-white">
                        <div className="flex items-center gap-3 p-1">
                            <img
                                src={star}
                                alt=""
                                className="hidden md:block"
                            />
                            <H1Animate className="!text-3xl">
                                {data?.details?.heading}
                            </H1Animate>
                        </div>
                        <H3 className="flex items-center gap-3 text-skin2 !mb-10">
                            ( Extensive Learning Course )
                            <H6 className="hidden px-3 bg-white md:block w-fit text-skin1 rounded-3xl">
                                FULL TIME
                            </H6>
                        </H3>
                        <H4 className="text-lg">{data?.details?.desc}</H4>
                    </div>
                    <div
                        className={`absolute md:-right-10 -right-5 -bottom-5 md:-bottom-10 ${data?.cardBg} w-fit md:p-14 p-5 rounded-full `}
                    >
                        <img
                            src={data?.icon}
                            alt=""
                            className="size-24 md:size-36"
                        />
                    </div>
                </div>
            </section>
            <section className="bg-gray-50 md:bg-gray-200">
                <Container className="grid grid-cols-2 !px-0 md:py-10 md:gap-8 md:flex justify-evenly">
                    {features?.map((item) => (
                        <div
                            key={item?.id}
                            className="flex flex-col items-center gap-2 px-10 py-5 text-center md:p-0 md:w-1/2"
                        >
                            <img
                                src={item?.icon}
                                alt={item?.label}
                                className="size-8"
                            />
                            <H5 className="hidden md:block">{item?.label}</H5>
                            <H6 className="block md:hidden">{item?.label}</H6>
                        </div>
                    ))}
                </Container>
            </section>
        </div>
    );
}
