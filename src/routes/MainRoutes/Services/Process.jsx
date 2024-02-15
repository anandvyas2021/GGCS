import React from "react";
import banner from "../../../assets/services/banner1.gif";

import { processData } from "../../../db/dummy";
import { Container } from "../../../components/Layout";
import { H5, H6 } from "../../../components/Typography";

export default function Process() {
    return (
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
    );
}
