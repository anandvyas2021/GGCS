import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import FAQ from "./components/FAQ";
// import OurAlumni from "./OurAlumni";
import Curriculum from "./components/Curriculum";
import MinCriteria from "./components/MinCriteria";
import DetailsBanner from "./components/DetailsBanner";
import AdmissionProcess from "./components/AdmissionProcess";

import { courses } from "./dummyData";
// import BackNavigate from "../../../components/UI/BackNavigate";

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

    return (
        <div>
            <DetailsBanner data={state?.data} />
            <MinCriteria />
            <Curriculum />
            <AdmissionProcess />
            {/* <OurAlumni /> */}
            <FAQ />
        </div>
    );
}
