import React, { useEffect } from "react";

import Process from "./Process";
import Packages from "./Packages";
import SocialLinks from "./SocialLinks";
import OtherServices from "./OtherServices";
import { servicesData } from "../../../db/dummy";
import { Container } from "../../../components/Layout";
import SwiperCarousel from "../../../components/Carousel/Swiper";

export default function Services(props) {
    useEffect(() => {
        // window.scrollTo(0, 0);
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
