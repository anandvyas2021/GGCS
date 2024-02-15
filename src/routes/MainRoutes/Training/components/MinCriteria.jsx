import React from "react";

import { minCriteria } from "../dummyData";
import { Container } from "../../../../components/Layout";
import { Desc, H3, H5, H6 } from "../../../../components/Typography";

export default function MinCriteria() {
    return (
        <Container className="py-12 md:py-20">
            <div className="mb-10 text-center">
                <H3>{minCriteria?.title}</H3>
                <Desc className="mt-1">{minCriteria?.desc}</Desc>
            </div>
            <div className="grid grid-cols-1 gap-4 md:gap-8 sm:grid-cols-2 md:grid-cols-3">
                {minCriteria?.list?.map((item) => (
                    <div
                        key={item?.id}
                        className="flex items-center gap-8 px-2 py-3 border-2 md:!shadow-md md:gap-0 md:flex-col md:text-center md:py-5 md:border rounded-xl"
                    >
                        <figure className="flex justify-center p-1 bg-gary-100">
                            <img
                                src={item?.icon}
                                alt={item?.title}
                                className="size-10 md:size-8"
                            />
                        </figure>
                        <div>
                            <H5 className="my-0 md:my-2">{item?.title}</H5>
                            <H6>{item?.desc}</H6>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
}
