import React from "react";
// import { Close } from "@mui/icons-material";

export default function Modal({
    type,
    title,
    open,
    className,
    children,
    onClose,
    size,
}) {
    let customedSize;
    if (size === "md") {
        customedSize = "lg:!w-1/2 !w-11/12 ";
    } else if (size === "lg") {
        customedSize = "lg:!w-9/12 !w-11/12 ";
    } else {
        customedSize = "lg:!w-1/4 !w-11/12 ";
    }

    return (
        <section
            className={`z-[200] fixed inset-0 flex justify-center items-center transition-colors ${
                open ? "visible bg-[#212326e6]" : "invisible"
            }  `}
        >
            <section
                className={`bg-white rounded-xl shadow overflow-hidden p-3 transition-all ${
                    open ? "scale-100 opacity-100" : "scale-125 opacity-100 "
                } ${customedSize}  ${className}`}
            >
                {type === "primary" ? (
                    <main className="relative flex justify-center px-2 py-2 bg-gradient-to-r from-[#4583E0]  from-10% via-[#2C96DF] via-30% to-[#4583E0]  to-90%">
                        <h4 className="text-fourth font-secondary md:font-tertiary text-sm md:text-xl flex items-center justify-center">
                            {title}
                        </h4>
                        <figure
                            onClick={onClose}
                            className="z-10 absolute right-2 top-0 rounded-full p-1 shadow-primary group cursor-pointer w-[30px] h-[30px] flex justify-center items-center"
                        >
                            x
                            {/* <Close
                                style={{ fontSize: "24px" }}
                                className="flex justify-center items-center text-fourth shadow-md rounded-full p-[2.5px]"
                            /> */}
                        </figure>
                    </main>
                ) : (
                    <main className="relative flex justify-center ">
                        <figure
                            onClick={onClose}
                            className="bg-fourth shadow-md z-10 absolute right-2 top-0 rounded-full p-1 shadow-primary group cursor-pointer w-[30px] h-[30px] flex justify-center items-center"
                        >
                            x
                            {/* <Close
                                style={{ fontSize: "24px" }}
                                className="flex justify-center items-center text-[#4C98F5] rounded-full p-[2.5px]"
                            /> */}
                        </figure>
                    </main>
                )}
                {children}
            </section>
        </section>
    );
}
