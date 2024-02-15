import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { serviceSocial } from "../../../../db/dummy";
import { Container } from "../../../../components/Layout";
import { H6 } from "../../../../components/Typography";

export default function SocialLinks() {
    return (
        <Container className="px-3 py-12 sm:px-8 md:px-12 md:py-20">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-10">
                {serviceSocial?.map((item) => (
                    <div
                        onClick={() =>
                            window.open(
                                item?.link,
                                "_blank",
                                "toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes"
                            )
                        }
                        key={item?.id}
                        className={`group flex items-center justify-between group border p-4 md:p-7 rounded-xl cursor-pointer transition-all duration-[400ms] ${item?.className} hover:scale-110`}
                    >
                        <div className="flex items-center gap-5 md:gap-3">
                            <figure>
                                <FontAwesomeIcon
                                    icon={item?.icon}
                                    size="2xl"
                                    color={item?.iconColor}
                                    className="group-hover:text-white1"
                                />
                            </figure>
                            <H6 className="group-hover:!text-white1">
                                {item?.label}
                            </H6>
                        </div>
                        <div className="invisible group-hover:visible">
                            <ArrowRightIcon className="w-4 h-4 text-white1" />
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
}
