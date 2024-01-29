import React from "react";
import { Container } from "../../../../components/Layout";
import textBg from "../../../../assets/about/hoc/text-bg.svg";

import { DashedLine } from "../../../../components/UI/ProcessDash";
import {
    H1Animate,
    TextAnimate,
    H6,
    SubHeading,
} from "../../../../components/Typography";

const hosData = [
    {
        id: 0,
        label: (
            <H6>
                Creative Ideation and Research for Innovative IT and Software
                Solutions
            </H6>
        ),
    },
    {
        id: 1,
        label: (
            <H6>Automated Keyword Grouping for Enhanced Search Performance</H6>
        ),
    },
    {
        id: 2,
        label: (
            <H6>
                Strategic Planning to Amplify Your Sales Efforts in the digital
                domain
            </H6>
        ),
    },
    {
        id: 3,
        label: <H6>Assistance in Broadening Audience Engagement and Reach</H6>,
    },
];
export default function HOS() {
    return (
        <Container>
            <div className="flex items-center justify-center">
                <div className="mb-10 md:mb-20">
                    <div className="relative flex justify-center mb-2">
                        <SubHeading className="absolute !text-gray-500 top-2">
                            How we do it
                        </SubHeading>
                        <img src={textBg} alt="bg" />
                    </div>
                    <H1Animate>Helping others Succeed</H1Animate>
                </div>
            </div>
            <div className="sm:mb-12">
                <div className="relative pb-12 border-b-2 border-gray-100">
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                        {hosData?.map((d, i) => {
                            return (
                                <div key={i} className="relative w-full">
                                    <div
                                        className={` ${
                                            i === 0
                                                ? "text-center lg:text-left"
                                                : i === 1
                                                ? "text-center"
                                                : i === 2
                                                ? "text-center lg:text-right"
                                                : i === 3
                                                ? "text-center lg:text-right"
                                                : " text-center"
                                        }`}
                                    >
                                        <div
                                            div
                                            className="inline-block text-center"
                                        >
                                            <span
                                                className={`relative text-xl rounded-full h-12 w-12 leading-[3rem] mb-6 inline-block text-center before:border before:rounded-full before:h-16 before:w-16 before:absolute before:-top-4 before:-left-2 before:border-blue-200 text-white ${
                                                    i === 0
                                                        ? " bg-blue-400"
                                                        : i === 1
                                                        ? " bg-yellow-300"
                                                        : i === 2
                                                        ? " bg-orange-400"
                                                        : i === 3
                                                        ? "  bg-pink-400"
                                                        : ""
                                                }`}
                                            >
                                                {d?.id + 1}
                                            </span>
                                            {d?.label}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="absolute hidden rotate-0 lg:block -top-4 left-56">
                        <DashedLine />
                    </div>
                    <div className="hidden lg:block absolute -top-4  left-[48%]	rotate-180">
                        <DashedLine />
                    </div>
                    <div className="absolute hidden rotate-0 lg:block -top-4 right-48">
                        <DashedLine />
                    </div>
                </div>
            </div>
        </Container>
    );
}
