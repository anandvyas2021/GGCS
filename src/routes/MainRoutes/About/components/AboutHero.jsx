import React from "react";
import brand2 from "../../../../assets/about/home/ibn.png";
import brand1 from "../../../../assets/about/home/gg-log.svg";
import brand3 from "../../../../assets/about/home/samachar.png";
import brand4 from "../../../../assets/about/home/quikcraker.png";
import switchIcon from "../../../../assets/about/home/switch.svg";
import innerHand from "../../../../assets/about/home/inner-hand-1.webp";
// import aboutInner from "../../../../assets/about/home/about-inner-1.webp";
import aboutHero from "../../../../assets/about/home/aboutHero.jpg";
import innerShape1 from "../../../../assets/about/home/about-inner-shape-1.webp";
import innerShape2 from "../../../../assets/about/home/about-inner-shape-2.webp";

import Slider from "react-slick";

import { Container } from "../../../../components/Layout";
import { Desc, H1Animate, H5 } from "../../../../components/Typography";

const brandWrapper = [
    { image: brand1 },
    { image: brand2 },
    { image: brand3 },
    { image: brand4 },
];

export default function AboutHero() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 12000,
        autoplaySpeed: 0,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 625,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="relative mb-10 sm:my-40">
            <div className="absolute left-24 -top-40">
                <img src={innerShape1} alt="" />
            </div>
            <div className="absolute right-96 -top-20">
                <img src={innerShape2} alt="" />
            </div>
            <div className="absolute right-0 -top-40">
                <img src={innerHand} alt="" />
            </div>
            <Container>
                <div className="relative flex items-center md:justify-center">
                    <div className="md:w-1/2 -mt-72">
                        <div className="relative">
                            <figure className="absolute object-cover -left-10 right-40 -top-10">
                                <img
                                    src={aboutHero}
                                    alt=""
                                    className="rounded-xl"
                                />
                            </figure>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <H1Animate className="leading-[3rem] !justify-start">
                            {/* Working Hard to Make Digital World Easy Together */}
                            Your one-stop IT and Digital Services Provider
                        </H1Animate>
                        <Desc className="my-3 md:my-0">
                            {/* Welcome to GGCS, where digital meets
                                intelligence to achieve market excellence.
                                <br />
                                We are digital marketers. */}
                            GGCS: Your go-to IT partner, comprising a close-knit
                            family of skilled experts. From software and website
                            development to comprehensive digital marketing
                            strategies, we specialize in diverse custom
                            solutions for brands, enterprises, and startups. Our
                            expertise extends to custom enterprise applications,
                            technology integration, digital commerce, SEO, and
                            social media marketing.
                        </Desc>
                    </div>
                </div>
            </Container>
            <div className="flex">
                <div className="hidden sm:block sm:w-1/5 xl:ml-[32rem]">
                    <div className="relative z-20 px-2 py-5 rounded-r-lg bg-blue1 sm:p-6">
                        <H5 className="text-white">
                            Scroll down <br /> to explore more
                        </H5>
                        <img
                            src={switchIcon}
                            alt="switch"
                            className="mt-2 animate-bounce"
                        />
                    </div>
                </div>
                <div className="w-full overflow-hidden">
                    <div className="">
                        <Slider {...settings}>
                            {brandWrapper?.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex justify-center py-10"
                                >
                                    <img
                                        src={item?.image}
                                        alt="brand"
                                        className="object-contain object-center w-full max-h-12 transition-all duration-300 hover:opacity-100 !text-300 ml-5"
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}
