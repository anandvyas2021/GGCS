import React, { useEffect } from "react";

import { whyGGCSData } from "../../../../db/dummy";
import { Container } from "../../../../components/Layout";
import { Desc, H1Animate, H2, H5 } from "../../../../components/Typography";

export default function WhyGGCS() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="py-10 md:py-20 bg-gray-50">
            <Container>
                <H1Animate>{whyGGCSData?.title}</H1Animate>
                <Desc>
                    {/* sdihunigsdtgkjdnhoigjlsdbhvsdlfiukgbsjrdkhyiuserihyofiejhbgviusrgkjerkhjgvjlsdbhvsdlfiukgbsjrdkhyiuserihyofiej
                    hbgviusrgkjerkhjgvieuhtjlsdbhvsdlfiukgbsjrdkhyiuserihyofiejhbgviusrgkjerkhjgvieuhtieuhtgkietyigesigsu */}
                </Desc>
                <div className="grid grid-cols-1 py-10">
                    {whyGGCSData?.desc?.map((item, i) => (
                        <div
                            key={item?.id}
                            className={`grid md:grid-cols-[1fr_0.8fr] grid-cols-1 items-center sm:gap-5`}
                            dir={item?.id % 2 ? "ltr" : "rtl"}
                        >
                            <div className="!text-center sm:p-5">
                                <H2>{item?.label}</H2>
                                <H5 className="!font-axiforma text-gray-500">
                                    {item?.desc}
                                </H5>
                            </div>
                            <figure className="relative">
                                <img
                                    src={item?.image}
                                    className={`relative lg:h-[400px] md:h-350px] h-[300px] aspect-video object-contain rounded-full  border-gray-200 z-10`}
                                />
                            </figure>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
