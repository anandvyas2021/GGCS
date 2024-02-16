import React, { useEffect } from "react";

import { whyGGCSData } from "../../../../db/dummy";
import { Container } from "../../../../components/Layout";
import { Desc, H1Animate, H2, H5 } from "../../../../components/Typography";

export default function WhyGGCS() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="py-12 bg-gray-100 md:py-20">
            <Container>
                <H1Animate>{whyGGCSData?.title}</H1Animate>
                <Desc></Desc>
                <div className="grid grid-cols-1 pt-10 gap-14 md:gap-10 md:pt-20">
                    {whyGGCSData?.desc?.map((item, i) => (
                        <div
                            key={item?.id}
                            className={`grid md:grid-cols-[1fr_0.8fr] grid-cols-1 items-center sm:gap-5 mb-0 md:my-5`}
                            dir={item?.id % 2 ? "ltr" : "rtl"}
                        >
                            <div className="!text-center md:p-5 mb-2">
                                <H2>{item?.label}</H2>
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
            </Container>
        </div>
    );
}
