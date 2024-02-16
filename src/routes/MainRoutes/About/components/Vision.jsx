import React from "react";

import counter1 from "../../../../assets/about/vision/trophy.webp";
import counter2 from "../../../../assets/about/vision/multiuser.webp";
import counter3 from "../../../../assets/about/vision/counter3.webp";

import { visionData } from "../dummy";
import { Container } from "../../../../components/Layout";
import { H1Animate, H2, H3, H5 } from "../../../../components/Typography";

const counterData = [
    {
        Icon: counter1,
        num: "1 +",
        label: (
            <H5 className="pl-3">
                Years <br />
                Of Experience
            </H5>
        ),
    },

    {
        Icon: counter2,
        num: "10 +",
        label: (
            <H5 className="pl-3">
                Project <br />
                Complete
            </H5>
        ),
    },

    {
        Icon: counter3,
        num: "10 +",
        label: (
            <H5 className="pl-3">
                Satisfied Clients On <br />
                India
            </H5>
        ),
    },
];
export default function Vision() {
    return (
        <div>
            <Container>
                <div className="pt-10 pb-24">
                    <H1Animate>{visionData?.title}</H1Animate>
                    <div className="grid grid-cols-1 gap-10 pt-10 md:pt-20">
                        {visionData?.desc?.map((item) => (
                            <div
                                key={item?.id}
                                className={`grid md:grid-cols-[1fr_0.7fr] grid-cols-1 items-center sm:gap-5 mb-0 md:my-5`}
                                dir={item?.id % 2 ? "ltr" : "rtl"}
                            >
                                <div className="!text-center md:p-5 mb-2">
                                    {item?.label ? (
                                        <H2>{item?.label}</H2>
                                    ) : null}
                                    <H5 className="max-md:text-lg !font-axiforma text-gray-500">
                                        {item?.desc}
                                    </H5>
                                </div>
                                <figure className="relative">
                                    <img
                                        src={item?.image}
                                        className={`relative aspect-video object-fill rounded-3xl border-gray-200 z-10`}
                                    />
                                </figure>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid justify-center grid-cols-1 mb-8 lg:grid-cols-3 sm:justify-between sm:mb-14">
                    {counterData?.map((item, i) => {
                        return (
                            <div
                                className="relative z-10 flex items-center py-6"
                                key={i}
                            >
                                <div className="absolute bottom-0 left-0 -z-10">
                                    <img src={item?.Icon} alt="counter" />
                                </div>
                                <div className="flex ml-10">
                                    <H3 className="text-blue-500 ">
                                        {item?.num}
                                    </H3>
                                    {item?.label}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </div>
    );
}
