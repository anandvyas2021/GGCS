import React from "react";

import { careerOpportunities } from "../dummy";
import { Desc, H3, H5 } from "../../../components/Typography";

const ExploreOpportunities = () => {
    return (
        <div className="bg-[#eaf4f4] md:py-20 py-10">
            <div className="max-w-screen-xl px-3 mx-auto xl:px-0">
                <div>
                    <H3 className="mb-10 text-center">
                        Explore The Opportunities
                    </H3>
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 sm:grid-cols-2 lg:gap-8">
                        {careerOpportunities?.map((item) => (
                            <div
                                key={item?.id}
                                className="flex items-center justify-between px-3 py-8 text-left transition duration-500 transform bg-white shadow-xl group rounded-xl lg:pb-8 lg:px-8 hover:scale-110 cursor-pointer"
                            >
                                <div>
                                    <div className="mx-auto mb-3 lg:ml-0">
                                        <img
                                            src={item?.icon}
                                            alt={item?.designation}
                                            className="h-16 w-26"
                                        />
                                    </div>
                                    <H5 className="pb-1 text-xl !font-bold ">
                                        {item?.designation}
                                    </H5>
                                    <Desc className="font-semibold text-lg text-[#023e8a]">
                                        {item?.package}lpa
                                    </Desc>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-white font-bold relative text-2xl rounded-full h-12 w-12 leading-[3rem] inline-block text-center before:border before:rounded-full before:h-16 before:w-16 before:absolute before:-top-4 before:-left-2 before:border-[#94d2bd] bg-[#0a9396]">
                                        {item?.openings}
                                    </span>
                                    <Desc className="text-sm">Openings</Desc>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreOpportunities;
