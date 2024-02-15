import React, { useEffect } from "react";

import { servicesData } from "../../../db/dummy";
import { Container } from "../../../components/Layout";
import SwiperCarousel from "../../../components/Carousel/Swiper";

import Process from "./components/Process";
import Packages from "./components/Packages";
import SocialLinks from "./components/SocialLinks";
import OtherServices from "./components/OtherServices";

export default function Services(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Packages />
            <Process />
            <Container className="px-3 py-12 sm:px-8 md:px-12 md:py-20">
                <SwiperCarousel carouselData={servicesData} />
            </Container>
            <OtherServices />
            <SocialLinks />
        </>
    );
}
