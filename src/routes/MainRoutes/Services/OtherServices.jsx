import React from "react";

import { Link } from "react-router-dom";

import { otherServices } from "./dummyData";
import { Container } from "../../../components/Layout";
import { H1Animate, H5, P } from "../../../components/Typography";

export default function OtherServices() {
    return (
        <Container className="px-3 py-12 md:py-20">
            <div className="!mb-12 text-center">
                <H1Animate className="mb-3">Our Other Services</H1Animate>
                <H5 className="!text-gray-500">* Price on Request</H5>
            </div>
            <div className="grid grid-cols-3 gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-5 sm:gap-8">
                {otherServices?.map((item) => (
                    <Link
                        to="/contact"
                        key={item?.id}
                        className="flex flex-col items-center justify-center p-2 transition-all border-2 border-gray-200 shadow-lg bg-blue4 bg-gray-20 rounded-xl hover:scale-105"
                    >
                        <img
                            src={item?.icon}
                            alt={item?.label}
                            className="mb-4 size-8"
                        />
                        <P className="text-center">{item?.label}</P>
                    </Link>
                ))}
            </div>
            <P>
                *Budget Charges Extra(Add-on charges as per applicable or the
                discretion of the company)
            </P>
        </Container>
    );
}
