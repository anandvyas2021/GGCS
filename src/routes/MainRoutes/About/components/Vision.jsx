import React from "react";

import journey from "../../../../assets/about/vision/journey.svg";
import counter1 from "../../../../assets/about/vision/trophy.webp";
import counter2 from "../../../../assets/about/vision/multiuser.webp";
import counter3 from "../../../../assets/about/vision/counter3.webp";
import business2 from "../../../../assets/about/vision/business2.svg";
import business3 from "../../../../assets/about/vision/business3.webp";
import floatIcon1 from "../../../../assets/about/vision/floatIcon1.png";

import { Container } from "../../../../components/Layout";
import { H3, H5, P } from "../../../../components/Typography";

const counterData = [
    {
        Icon: counter1,
        num: "1 +",
        label: (
            <H5 className="pl-3">
                Years <br />
                Of Experience
            </H5>
        ),
    },

    {
        Icon: counter2,
        num: "10 +",
        label: (
            <H5 className="pl-3">
                Project <br />
                Complete
            </H5>
        ),
    },

    {
        Icon: counter3,
        num: "10 +",
        label: (
            <H5 className="pl-3">
                Satisfied Clients On <br />
                India
            </H5>
        ),
    },
];
export default function Vision() {
    return (
        <div>
            <Container>
                <div className="pt-10 pb-24">
                    <div className="sm:flex">
                        <div className="w-full mb-5 md:w-3/5 lg:mb-0 ">
                            <div className="px-3 py-8 bg-red-100 rounded-lg sm:px-6 md:px-14 md:py-14">
                                <H5 className="mb-2">
                                    GGCS: Your Go-To Tech Team for fuel your
                                    business growth !
                                </H5>
                                <P>
                                    {/* GGCS or Global Garner Consultancy Services,
                                    stands out as a leading digital marketing
                                    company utilizing advanced technology and a
                                    team of seasoned professionals to elevate
                                    businesses' brand presence and growth. */}
                                    GGCS stands out as a leading IT and digital
                                    marketing solution provider, leveraging
                                    advanced technology and a team of seasoned
                                    professionals to enhance businesses' brand
                                    presence and fuel growth. Alongside our
                                    proficiency in web and software development,
                                    we excel in talent creation through training
                                    and placement assurance, ensuring
                                    comprehensive support for your business's
                                    success.
                                </P>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <img
                                src={floatIcon1}
                                alt="floatIcon"
                                className="w-56 h-56"
                            />
                        </div>
                    </div>
                    <div className="sm:flex">
                        <div className="hidden md:w-2/5 md:block">
                            <div className="relative flex">
                                <img
                                    src={journey}
                                    alt="floatIcon"
                                    className="absolute w-56 h-56 -top-1 right-2"
                                />
                            </div>
                        </div>
                        <div className="relative md:w-3/5">
                            <div className="px-3 py-8 bg-green-100 rounded-lg sm:px-6 md:px-14 md:py-14 ">
                                <H5 className="mb-2">Our Journey</H5>
                                <P>
                                    {/* The genesis of GGCS traces back to the
                                    firsthand challenges faced by Global Garner
                                    Sales Services Limited in 2016. They needed
                                    help finding an effective yet affordable
                                    digital marketing solution, so they created
                                    GGCS. This initiative not only resolved
                                    their issues but also became a catalyst for
                                    numerous other businesses seeking success in
                                    the online realm. */}
                                    The inception of GGCS dates back to the
                                    initial challenges encountered by Global
                                    Garner Sales Services Limited in 2016. Faced
                                    with the need for an efficient and
                                    budget-friendly IT partner for software, web
                                    development, and digital marketing
                                    solutions, GGCS was established. This
                                    initiative not only successfully tackled
                                    their specific challenges but also emerged
                                    as a growth catalyst for numerous other
                                    businesses aspiring to thrive in the digital
                                    landscape. GGCS stands as a testament to
                                    effective and affordable IT solutions,
                                    making it the ideal choice for businesses
                                    navigating the online realm.
                                </P>
                            </div>
                        </div>
                    </div>
                    <div className="sm:flex">
                        <div className="w-full mb-5 md:w-3/5 lg:mb-0 ">
                            <div className="px-3 py-8 bg-red-100 rounded-lg sm:px-6 md:px-14 md:py-14">
                                <H5 className="mb-2 text-xl">
                                    What Distinguishes Us
                                </H5>
                                <P>
                                    {/* At GGCS, our primary goal is to ensure
                                    brands and businesses appear on platforms
                                    like Google and experience significant
                                    growth in the digital business marketplace.
                                    We achieve this through in-depth market
                                    research and industry best practices. What
                                    sets GGCS apart is our unwavering commitment
                                    to transparency and ethical practices,
                                    demonstrated through real-time display of
                                    statistics for our clients using advanced
                                    tools and industry benchmarks. */}
                                    {/* At GGCS, our commitment to excellence sets
                                    us apart. Our approach seamlessly merges
                                    creativity with technology, delivering
                                    integrated solutions tailored to your needs.
                                    What distinguishes us is our unwavering
                                    commitment to transparency, ethical
                                    practices, and timely delivery, showcased
                                    through real-time display of statistics
                                    using advanced tools and industry
                                    benchmarks. We take pride in innovation,
                                    maintaining a client-centric focus, and
                                    offering holistic technical support beyond
                                    digital marketing – encompassing software
                                    development and IT solutions ensuring your
                                    success in the digital business
                                    marketplace.. Trust us for a transformative
                                    partnership where innovation and client
                                    success converge. We maintain open
                                    communication, prioritize your goals, and
                                    adapt our strategies to ensure your
                                    satisfaction. */}
                                    At GGCS, our commitment to excellence sets
                                    us apart. Our approach seamlessly merges
                                    creativity with technology, delivering
                                    integrated solutions tailored to your needs.
                                    What distinguishes us is our unwavering
                                    commitment to transparency, ethical
                                    practices, and timely delivery, showcased
                                    through real-time display of statistics
                                    using advanced tools and industry
                                    benchmarks. We take pride in innovation,
                                    maintaining a client-centric focus, and
                                    offering holistic technical support beyond
                                    digital marketing – encompassing software
                                    development and IT solutions ensuring your
                                    business success. We prioritize your goals
                                    and adapt our strategies to ensure your
                                    satisfaction.
                                </P>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <img src={business3} alt="ggcs" />
                        </div>
                    </div>
                    <div className="md:flex">
                        <div className="hidden md:w-2/5 md:block">
                            <div className="relative flex">
                                <img
                                    src={business2}
                                    alt="business"
                                    className="w-60 h-60"
                                />
                            </div>
                        </div>
                        <div className="relative md:w-3/5">
                            <div className="px-3 py-8 bg-green-100 rounded-lg sm:px-6 md:px-14 md:py-14 ">
                                <P>
                                    {/* However, GGCS is not merely a provider of
                                    digital marketing services. We consider
                                    ourselves a digital partner, taking the time
                                    to understand the intricacies of your
                                    business and expectations. GGCS aspires to
                                    leave a lasting mark as a trusted digital
                                    ally in the ever-evolving digital landscape
                                    by positioning itself as more than just a
                                    service. */}
                                    At GGCS, we position ourselves as your
                                    dedicated technology and digital partner.
                                    Going beyond mere service delivery, we
                                    invest time in comprehending the intricacies
                                    of your business and understanding your
                                    expectations. Our aim is not just to offer
                                    solutions but to leave a lasting mark as a
                                    trusted digital ally in the dynamic digital
                                    landscape and remain your enduring
                                    technology partner. We aspire to be more
                                    than a service; we strive to be a strategic
                                    collaborator committed to your digital
                                    success
                                </P>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid justify-center grid-cols-1 mb-8 lg:grid-cols-3 sm:justify-between sm:mb-14">
                    {counterData?.map((item, i) => {
                        return (
                            <div
                                className="relative z-10 flex items-center py-6"
                                key={i}
                            >
                                <div className="absolute bottom-0 left-0 -z-10">
                                    <img src={item?.Icon} alt="counter" />
                                </div>
                                <div className="flex ml-10">
                                    <H3 className="text-blue-500 ">
                                        {item?.num}
                                    </H3>
                                    {item?.label}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </div>
    );
}
