import React from "react";

import list1 from "../../../../assets/home/process/list1.svg";
import list2 from "../../../../assets/home/process/list2.svg";
import list3 from "../../../../assets/home/process/list3.svg";
import image1 from "../../../../assets/home/process/image1.jpg";

import shape1 from "../../../../assets/home/process/shape1.webp";
import shape2 from "../../../../assets/home/process/shape2.webp";
import shape3 from "../../../../assets/home/process/shape3.webp";

import {
    H1Animate,
    SubHeading,
    H5,
    H6,
} from "../../../../components/Typography";
import { Container } from "../../../../components/Layout";
import { Line1, Line2 } from "../../../../components/UI/ProcessDash";

export default function Process(props) {
    const processData = [
        {
            id: 1,
            icon: list1,
            label: "Discovery & Assessment",
            desc: "First, we communicate to understand your business and what you need. No jargon, just a friendly conversation to figure out how we can help.",
        },
        {
            id: 2,
            icon: list2,
            label: "Strategy Development",
            desc: "Next, we make a plan that fits you like a glove. We'll talk about what needs to be done, how long it might take, and what you can expect along the way.",
        },
        {
            id: 3,
            icon: list3,
            label: "Implementation & Integration",
            desc: "Time to roll up our sleeves and get to work. We'll put our heads down and start bringing your ideas to life, step by step.",
        },
        {
            id: 4,
            icon: list1,
            label: "Testing & Quality Assurance",
            desc: "Before we launch anything, we make sure it works like a charm. We'll check and double-check to catch any bugs and make sure everything runs smoothly.",
        },
        {
            id: 5,
            icon: list2,
            label: "Training & Adoption",
            desc: "Once everything's ready, we'll walk you through how it all works. We want you to feel confident using your new tools and systems.",
        },
        {
            id: 6,
            icon: list3,
            label: "Monitoring & Optimization",
            desc: "Even after everything's up and running, we're still here for you. We'll keep an eye on things and make tweaks if needed to keep everything running smoothly.",
        },
        {
            id: 7,
            icon: list1,
            label: "Ongoing Support & Maintenance",
            desc: "And finally, we're always here to help. Whether you have questions, need support, or just want to chat, we're just a call or click away.",
        },
    ];

    return (
        <Container className="px-3 md:!py-20 py-10 sm:px-8 lg:px-12">
            <div className="grid md:grid-cols-[0.7fr_1fr]">
                <div className="relative sm:flex items-center hidden">
                    <img
                        src={image1}
                        alt="process"
                        className="!h-[55%] opacity-1 object-cover animate-imgBorder rounded-processImg"
                    />
                    <div className="">
                        <div className="absolute bottom-32 left-10 -z-[1]">
                            <img src={shape1} alt="shape1" />
                        </div>
                        <div className="absolute bottom-20 right-1 -z-[1]">
                            <img src={shape2} alt="shape2" />
                        </div>
                        <div className="absolute top-32 left-16 -z-[1]">
                            <img src={shape3} alt="shape3" />
                        </div>
                    </div>
                </div>
                <div className="md:pl-10">
                    <div className="flex flex-col mb-7 items-left">
                        <SubHeading className="text-center">
                            {/* Let us do the work */}
                            Your Roadmap to digital Success
                        </SubHeading>
                        <H1Animate className="text-center">
                            {/* How we do It */}
                            Our 7 step process
                        </H1Animate>
                    </div>

                    <ul>
                        {processData?.map((item) => (
                            <li
                                className="mb-10"
                                key={item?.id}
                                // dir={item?.id % 2 ? "ltr" : "rtl"}
                            >
                                <div
                                    className={`flex relative gap-4 md:gap-7 md:flex-row items-start ${
                                        item?.id % 2 === 0
                                            ? "justify-center flex-row-reverse"
                                            : "justify-start"
                                    }`}
                                >
                                    <div className="">
                                        <div className="relative">
                                            <img
                                                src={item?.icon}
                                                alt={item?.label}
                                            />
                                            <b className="absolute left-0 right-0 font-medium text-center -translate-y-1/2 top-1/2 text-white1">
                                                0{item?.id}
                                            </b>
                                            <span className="absolute top-0 left-0 h-2 w-2 border rounded-full border-[#021d3580]" />
                                            <span className="absolute top-1 left-3 h-[2px] w-[2px] rounded-full bg-[#021d3580]" />
                                            <span className="absolute bottom-1.5 -right-1.5 h-1.5 w-1.5 rounded-full bg-[#021d3580]" />
                                            <span className="absolute bottom-0 right-0 h-[2px] w-[2px] rounded-full bg-[#021d3580]" />
                                        </div>
                                    </div>
                                    <div
                                        className={`w-9/12 flex flex-col gap-2 ${
                                            item?.id % 2 ? "" : ""
                                        }`}
                                    >
                                        <H5 className="mb-1 md:m-0">
                                            {item?.label}
                                        </H5>
                                        <H6>{item?.desc}</H6>
                                    </div>
                                    {item?.id < processData?.length ? (
                                        <>
                                            {item?.id % 2 ? (
                                                <div className="hidden md:block absolute right-0 top-14">
                                                    <Line1 />
                                                </div>
                                            ) : (
                                                <div className="absolute top-7 -left-16">
                                                    <Line2 />
                                                </div>
                                            )}
                                        </>
                                    ) : null}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Container>
    );
}
