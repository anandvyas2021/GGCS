import React, { useState } from "react";

import { faq } from "../dummyData";
import { Container } from "../../../../components/Layout";
import { H3, H5, H6 } from "../../../../components/Typography";

export default function FAQ() {
    const [state, setState] = useState({
        active: null,
    });
    const { active } = state;
    return (
        <Container className="py-12 md:py-20">
            <H3 className="!mb-10 text-center">{faq?.title}</H3>
            <div className="pb-20">
                {faq?.list?.map((item) => (
                    <div key={item?.id} className="mb-2">
                        <div
                            className={`flex items-center justify-between p-3 md:p-4 rounded-lg border hover:bg-red-50 cursor-pointer ${
                                active === item?.id ? "bg-red-50" : ""
                            }`}
                            onClick={() => {
                                setState((prev) => {
                                    return {
                                        ...prev,
                                        active:
                                            prev?.active === item?.id
                                                ? null
                                                : item?.id,
                                    };
                                });
                            }}
                        >
                            <H6 className="!text-black font-axiSemiBold">
                                {item?.que}
                            </H6>
                            {active === item?.id ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 15.75l7.5-7.5 7.5 7.5"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            )}
                        </div>
                        {active === item?.id ? (
                            <div
                                className={`p-5 overflow-hidden transition-all duration-300 ease-in-out ${
                                    active === item?.id
                                        ? "opacity-100"
                                        : "opacity-0"
                                }`}
                            >
                                <H6>{item?.ans}</H6>
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>
        </Container>
    );
}
