import React from 'react'

import { socialMedias } from "../../db/dummy";
import PackageContainer from './PackageContainer';

export default function StatusContainer() {
    return (
        <div className="px-0 pt-3 pb-2 sm:px-4">
            <div className="max-w-full flex justify-between items-center">
                <div className="flex justify-center items-center sm:justify-normal gap-3 sm:!pt-3 !pt-0 !backdrop-blur">
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
                                className={`w-6 lg:w-5 cursor-pointer opacity-50 hover:opacity-100 hover:text-primary`}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex justify-center gap-2 sm:justify-normal">
                    {/* <span>
                    <img
                        src={rocket}
                        className="flex w-5 h-5 align-middle animate-pulse"
                    />
                </span>
                <span className="flex">
                    <p className="text-sm sm:text-base">End of Year Sale: </p>
                    <p className="text-[#FF6C66] mx-1 text-sm sm:text-base">Save up to 35%</p>
                    <p className="text-sm sm:text-base"> on Tasks</p>
                </span> */}
                    <div className="hidden lg:block">
                        <PackageContainer />
                    </div>
                    {/* <section
                        className="hidden lg:block p-[1px] text-lg font-agbalumo rounded-[40px] bg-gradient-to-r from-g1 via-g2 to-g3 bg-[length:80%] cursor-pointer animate-gradientBg hover:scale-110 transition-all duration-300"
                        onClick={() =>
                            window.open(`/creator-packages`, "_blank")
                        }
                    >
                        <div className="sm:flex items-center gap-2 px-2 py-1 !w-full rounded-[40px] text-card1 bg-white">
                            <img
                                src={packages}
                                alt="ggcs packages"
                                className="w-7 h-7"
                            />
                            <p className="sm:block hidden [word-spacing:3px]">
                                Creator Packages
                            </p>
                        </div>
                    </section> */}
                </div>
            </div>
        </div>
    )
}
