import React from "react";
import { EnvelopeIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";

import { Link, useNavigate } from "react-router-dom";

import {
    GGCSPolicy,
    menuService,
    services,
    socialMedias,
} from "../../db/dummy";
import { H4, H5, H6 } from "../../components/Typography";

const Input = ({ text, placeholder, className }) => {
    return (
        <div className="relative flex items-center w-full px-2 py-2 bg-white rounded-full">
            <EnvelopeIcon className="w-6 h-6 mx-2" />
            <div className="">
                <input
                    type={text}
                    placeholder={placeholder}
                    className={`px-1 py-2 outline-none  ${className}`}
                />
            </div>
            <div className="absolute p-2 bg-blue-600 rounded-full right-3">
                <ArrowUpRightIcon className="w-6 h-6 text-white" />
            </div>
        </div>
    );
};

export default function Footer() {
    const navigate = useNavigate();
    return (
        <div className="bg-gray-100 ">
            <div className="max-w-screen-md px-3 pb-20 mx-auto border-t-2 border-gray-300 sm:px-6 lg:px-0 lg:max-w-screen-xl pt-14 sm:pt-20">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-16">
                    <div className="mb-3 lg:mb-0 ">
                        <div className="mb-4">
                            <H4 className="!text-[22px] w-fit text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">
                                Global Garner Consultancy Services Pvt Ltd
                            </H4>
                            {/* <img src={logo} alt="logo" className="w-1/2 h-full cursor-pointer" /> */}
                        </div>
                        <div className="my-5">
                            <div className="flex gap-8">
                                {socialMedias?.map((item, i) => (
                                    <div
                                        className=""
                                        key={i}
                                        onClick={() =>
                                            window.open(
                                                item?.link,
                                                "_blank",
                                                "toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes"
                                            )
                                        }
                                    >
                                        <img
                                            src={item?.icon}
                                            alt={item?.name}
                                            className={`w-6 cursor-pointer opacity-50 hover:opacity-100 hover:text-primary`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="lg:pl-6">
                        <H5 className="mb-5">Quick Links</H5>
                        <div className="pl-4">
                            <ul className="list-disc">
                                {menuService?.map((item, i) => (
                                    <li key={i} className="mb-2">
                                        <Link to={item?.link}>
                                            <H6 className="hover:text-gray-900">
                                                {item.label}
                                            </H6>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <H5 className="mb-5">Services</H5>
                        <div className="pl-4">
                            <ul className="list-disc">
                                {services?.map((item, i) => (
                                    <li key={i} className="mb-2">
                                        <Link
                                            onClick={() =>
                                                window.open(
                                                    `/service/${item?.slug}`,
                                                    "_blank"
                                                )
                                            }
                                        >
                                            <H6 className="hover:text-gray-900">
                                                {item.label}
                                            </H6>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <ul className="pl-4 mb-4 list-disc border-b-2 sm:pl-0 border-b-gray-300">
                            {GGCSPolicy?.map((item, i) => {
                                return (
                                    <li key={i} className="mb-2">
                                        <Link
                                            onClick={() =>
                                                window.open(
                                                    `${item?.slug}`,
                                                    "_blank"
                                                )
                                            }
                                        >
                                            <H6 className="hover:text-gray-900">
                                                {item.label}
                                            </H6>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                        <H5 className="mb-4">Subscribe</H5>
                        <div className="mb-8">
                            <Input placeholder={"Your Email"} type={"mail"} />
                        </div>
                    </div>
                </div>
                <div className="pt-5 text-center">
                    <address>
                        <b>Global Garner </b>
                        5th floor, Grand Emporio, Motera Stadium Road,
                        Ahmedabad, Gujarat-380005
                    </address>
                </div>
                <div className="pt-5">
                    <div className="flex justify-center py-4 bg-white border rounded-full sm:px-2 md:px-5">
                        <p className="text-gray-400">
                            <b>© 2024</b>
                            <a href="/" className="">
                                <b className="mx-1">GGCS</b>
                            </a>
                            All Rights Reserved. A unit of
                            <a
                                href="https://beta.globalgarner.com"
                                target="_blank"
                            >
                                <b className="ml-2 text-transparent bg-gradient-to-r from-primary to-primary bg-clip-text">
                                    Global Garner.
                                </b>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
