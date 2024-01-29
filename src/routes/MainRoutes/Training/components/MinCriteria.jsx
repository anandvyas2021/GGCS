import React from "react";

import { minCriteria } from "../dummyData";
import { Container } from "../../../../components/Layout";
import { Desc, H3, H5, H6 } from "../../../../components/Typography";

function MinCriteria() {
    return (
        <Container className="py-12 md:py-20">
            <div className="mb-10 text-center">
                <H3>{minCriteria?.title}</H3>
                <Desc className="mt-1">{minCriteria?.desc}</Desc>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 sm:grid-cols-2">
                {minCriteria?.list?.map((item) => (
                    <div
                        key={item?.id}
                        className="px-3 py-5 text-center border rounded-xl"
                    >
                        <div className="flex justify-center p-1 bg-gary-100">
                            <img
                                src={item?.icon}
                                alt={item?.title}
                                className="w-8 h-8"
                            />
                        </div>
                        <H5 className="my-2">{item?.title}</H5>
                        <H6>{item?.desc}</H6>
                    </div>
                ))}
            </div>
        </Container>
    );
}

export default MinCriteria;
