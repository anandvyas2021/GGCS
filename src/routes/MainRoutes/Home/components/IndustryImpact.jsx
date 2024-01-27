import React from "react";

import {
    H1Animate,
    H5,
    P,
    SubHeading,
} from "../../../../components/Typography";
import { industryImpact } from "../../../../db/dummy";
import { Container } from "../../../../components/Layout";

export default function IndustryImpact(props) {
    return (
        <Container className="px-3 md:py-20 py-10 sm:px-6 lg:px-0">
            <section className="flex flex-col items-center justify-center mb-16 text-center">
                <H1Animate>Industry Impact</H1Animate>
                <SubHeading className="mt-4 lg:w-[900px]">
                    Our skilled team delivers top-notch IT services to diverse
                    industries, tailored to their unique challenges and
                    requirements. We work hand-in-hand with a range of
                    industries, including:
                </SubHeading>
            </section>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
                {industryImpact?.map((item) => (
                    <div
                        key={item?.id}
                        className="p-4 flex flex-col items-center text-center transition-all bg-[rgba(229_231_235_0.5)] duration-200 g-transparent rounded-xl hover:shadow-header hover:scale-105 bg-mainLight2"
                    >
                        <img
                            src={item?.icon}
                            alt={item?.label}
                            className="w-12 h-12 mb-4"
                        />
                        <H5 className="mb-2">{item?.label}</H5>
                        <P className="">{item?.desc}</P>
                    </div>
                ))}
            </section>
        </Container>
    );
}
