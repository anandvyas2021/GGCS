import React from "react";

import { Desc, H1Animate, H5, H6 } from "../../../../components/Typography";
import { industryImpact } from "../../../../db/dummy";
import { Container } from "../../../../components/Layout";

export default function IndustryImpact(props) {
    return (
        <Container className="px-3 py-10 sm:px-6 lg:px-0 md:py-20">
            <section className="flex flex-col items-center justify-center mb-16 text-center">
                <H1Animate>Industry Impact</H1Animate>
                <Desc>
                    Our skilled team delivers top-notch IT services to diverse
                    industries, tailored to their unique challenges and
                    requirements. We work hand-in-hand with a range of
                    industries, including:
                </Desc>
            </section>
            <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
                {industryImpact?.map((item) => (
                    <div
                        key={item?.id}
                        className="flex flex-col items-center md:p-4 p-2 text-center transition-all duration-200 rounded-xl hover:shadow-header hover:scale-105 bg-blue4"
                    >
                        <img
                            src={item?.icon}
                            alt={item?.label}
                            className="md:!size-12 !size-9 mb-2 md:mb-4"
                        />
                        <H5 className="mb-1 mb:md-2">{item?.label}</H5>
                        <H6>{item?.desc}</H6>
                    </div>
                ))}
            </section>
        </Container>
    );
}
