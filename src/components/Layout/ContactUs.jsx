import React from "react";

import { Input } from "../UI/Input";
import { PrimaryBtn } from "../Button";
import { addresses } from "../../db/dummy";
import { contactBg } from "../../db/assets";
import {
    Desc,
    H1Animate,
    H5,
    H6,
    Mail,
    SubHeading,
    Telephone,
} from "../Typography";

function ContactUs() {
    return (
        <section className="relative z-[1] md:py-20 py-10 xl:px-8 md:px-6 px-3">
            <div className="hidden sm:block">
                <img
                    src={contactBg}
                    alt="icon"
                    className="absolute -z-[1] bottom-0 left-0 right-0 w-full"
                />
            </div>
            <div className="max-w-screen-lg mx-auto lg:max-w-screen-xl">
                <div className="md:flex py-0 sm:!py-10">
                    <div className="md:w-1/2">
                        <div className="my-10">
                            <SubHeading className="w-fit">
                                Get In Touch with us !
                            </SubHeading>
                            <H1Animate className="!justify-start">
                                Let's Work Together
                            </H1Animate>
                            <Desc className="mb-4">
                                Just tell us your requirements, and we will
                                assist you!
                            </Desc>
                            <div className="flex flex-col gap-1 md:mt-14">
                                <Telephone>+91 6354917511</Telephone>
                                <Mail>ggcs@globalgarner.com</Mail>
                            </div>
                            <div className="mt-5">
                                <PrimaryBtn
                                    size="px-8 py-2"
                                    bgColor="bg-primaryBtn"
                                    className="border-2 rounded-full border-primaryBtn bg-0"
                                >
                                    <a
                                        href="tel:+91 6354917511"
                                        data-rel="external"
                                    >
                                        Call Us Now
                                    </a>
                                </PrimaryBtn>
                            </div>
                        </div>
                    </div>
                    <div className="px-3 py-10 bg-white md:w-1/2 rounded-3xl sm:px-6 lg::px-10 before:bg-homeGradient before:-top-4 before:left-0 before:absolute shadow-services ">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
                            <div className="w-full">
                                <Input
                                    placeholder={"Fill Name "}
                                    type={"mail"}
                                />
                            </div>
                            <div className="w-full">
                                <Input
                                    placeholder={"Email Address"}
                                    type={"mail"}
                                />
                            </div>
                            <div className="w-full">
                                <Input
                                    placeholder={"Phone Number"}
                                    type={"mail"}
                                />
                            </div>
                            <div className="w-full">
                                <Input placeholder={"Website"} type={"mail"} />
                            </div>
                            <textarea
                                name=""
                                placeholder="Message"
                                id=""
                                cols="30"
                                rows="10"
                                className="col-span-2 w-full border-[1px] border-gray-200 relative rounded-xl h-40 px-5 outline-none  bg-gray-100"
                            />
                        </div>
                        <div className="w-full mt-3 lg:mt-4">
                            <PrimaryBtn
                                size="px-8 py-3"
                                bgColor="bg-primaryBtn"
                            >
                                Send Message
                            </PrimaryBtn>
                        </div>
                    </div>
                </div>
                <section className="grid grid-cols-1 gap-10 mb-10 sm:grid-cols-2 lg:gap-20 lg:mb-auto">
                    {addresses?.map((item) => (
                        <div key={item?.id} className="w-full">
                            <address className="h-full w-fit lg:px-10 px-3 py-4 not-italic rounded-3xl bg-slate-200 !backdrop-blur-3xl">
                                <main>
                                    <H5 className="mb-3 text-primary">
                                        {item?.title}
                                    </H5>
                                    <H6 className="">{item?.address}</H6>
                                </main>
                            </address>
                        </div>
                    ))}
                </section>
            </div>
        </section>
    );
}

export default ContactUs;
