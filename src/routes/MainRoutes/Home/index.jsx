import React from "react";
import "./styles.css";

import Process from "./components/Process";
import WhyGGCS from "./components/WhyGGCS";
import Services from "./components/Services";
import HeroSection from "./components/HeroSection";
import IndustryImpact from "./components/IndustryImpact";
import ContactUs from "../../../components/Layout/ContactUs";

export default function Home(props) {
    return (
        <div>
            <HeroSection {...props} />
            <Services {...props} />
            <WhyGGCS />
            <Process {...props} />
            <IndustryImpact />
            <ContactUs {...props} />
        </div>
    );
}
