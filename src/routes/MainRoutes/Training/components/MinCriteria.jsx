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
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
                {minCriteria?.list?.map((item) => (
                    <div
                        key={item?.id}
                        className="px-3 py-3 text-center border-2 md:py-5 md:border rounded-xl"
                    >
                        <figure className="flex justify-center p-1 bg-gary-100">
                            <img
                                src={item?.icon}
                                alt={item?.title}
                                className="size-12 md:size-8"
                            />
                        </figure>
                        <div>
                            <H5 className="my-0 md:my-2">{item?.title}</H5>
                            {item?.desc ? <H6>{item?.desc}</H6> : null}
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
}
