import React, { useEffect, useState } from "react";
import star from "../../../assets/icons/star.svg";
import heroShape1 from "../../../assets/training/details/heroShape1.png";

import { useLocation } from "react-router-dom";

import FAQ from "./components/FAQ";
// import OurAlumni from "./OurAlumni";
import MinCriteria from "./components/MinCriteria";
import AdmissionProcess from "./components/AdmissionProcess";

import { courses, features } from "./dummyData";
import { Container } from "../../../components/Layout";
import BackNavigate from "../../../components/UI/BackNavigate";
import { H1Animate, H3, H4, H5, H6 } from "../../../components/Typography";

export default function CoursesDetails() {
    let [state, setState] = useState({ data: {} });
    let location = useLocation();
    let routeData = location?.state?.course;

    useEffect(() => {
        window.scrollTo(0, 0);

        let courseData = courses?.filter((item) => {
            return item?.slug === routeData;
        })[0];
        setState((prev) => {
            return { ...prev, data: courseData };
        });
    }, [routeData]);

    let { data } = state;

    return (
        <div>
            <section
                className={`relative ${data?.details?.bannerBg} text-center !max-h-max overflow-hidden`}
            >
                {/* <BackNavigate
                    backLabel="Training"
                    className="my-0 mb-5 text-white grayscale"
                /> */}
                <div className="p-20">
                    <img src={heroShape1} className="absolute top-0 left-0" />
                    <div className="flex flex-col items-center text-white">
                        <div className="flex items-center gap-3">
                            <img src={star} alt="" />
                            <H1Animate>{data?.details?.heading}</H1Animate>
                        </div>
                        <H3 className="flex items-center gap-3 text-skin2 !mb-10">
                            ( Extensive Learning Course )
                            <H6 className="px-3 bg-white text-skin1 rounded-3xl">
                                FULL TIME
                            </H6>
                        </H3>
                        <H4>{data?.details?.desc}</H4>
                    </div>
                    <div
                        className={`absolute -right-10 -bottom-10 ${data?.cardBg} w-fit p-14 rounded-full `}
                    >
                        <img src={data?.icon} alt="" className="w-36 h-36" />
                    </div>
                </div>
            </section>

            <section className="bg-gray-200">
                <Container className="flex gap-8 py-10 justify-evenly">
                    {features?.map((item) => (
                        <div
                            key={item?.id}
                            className="flex flex-col items-center w-1/2 gap-2 text-center"
                        >
                            <img src={item?.icon} alt="" className="w-8 h-8" />
                            <H5>{item?.label}</H5>
                        </div>
                    ))}
                </Container>
            </section>
            {/* <section className="sticky top-100px"></section> */}
            <MinCriteria />
            <AdmissionProcess />
            {/* <OurAlumni /> */}
            <FAQ />
        </div>
    );
}
