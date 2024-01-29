import React, { useEffect } from "react";
import tick from "../../../assets/training/courses/tick.jpg";

import { useNavigate } from "react-router-dom";

import { courses } from "./dummyData";
import { Container } from "../../../components/Layout";
import { PrimaryBtn } from "../../../components/Button";
import { Desc, H1Animate, H5, H6, P } from "../../../components/Typography";

const otherFeatures = [
    { id: 1, name: "100% offline learning with expert instructors." },
    { id: 2, name: "100%  Placement" },
];

export default function Training(props) {
    let navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Container className="py-4 text-center">
            <H1Animate>Our Courses</H1Animate>
            <Desc className="mb-10">
                Become a Software Developer, Testing Engineer or a Data Analyst
                at ZERO upfront fees.
            </Desc>

            <div className="grid grid-cols-3 gap-10">
                {courses?.map((item) => (
                    <div
                        key={item?.id}
                        className="overflow-hidden border-2 border-gray-300 group rounded-xl"
                    >
                        <figure
                            className={`flex items-center justify-center w-full p-10 ${item?.cardBg}`}
                        >
                            <img
                                src={item?.icon}
                                className="w-40 transition-all duration-700 h-36 group-hover:scale-125"
                            />
                        </figure>
                        <div className="p-4 text-left">
                            <H5>{item?.name}</H5>
                            <P className="mb-3 text-gray-400 !font-axiSemiBold">
                                {item?.desc}
                            </P>
                            <hr />
                            <div className="py-4">
                                <span className="flex items-center gap-3 mb-2">
                                    <img
                                        src={tick}
                                        alt="tick"
                                        className="w-10 h-10 rounded-lg"
                                    />
                                    <H6>
                                        <b className="mr-2 text-base">
                                            Opportunities:
                                        </b>
                                        {item?.features}
                                    </H6>
                                </span>
                                {otherFeatures?.map((item) => (
                                    <H6
                                        key={item?.id}
                                        className="flex items-center gap-3 mb-2"
                                    >
                                        <img
                                            src={tick}
                                            alt="tick"
                                            className="w-10 h-10 rounded-lg"
                                        />
                                        {item?.name}
                                    </H6>
                                ))}

                                <PrimaryBtn
                                    className="w-full mt-5 rounded-lg"
                                    onClick={() =>
                                        navigate(`/training/${item?.slug}`, {
                                            state: {
                                                course: item?.slug,
                                            },
                                        })
                                    }
                                >
                                    View Details
                                </PrimaryBtn>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
}
