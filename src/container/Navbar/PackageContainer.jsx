import React from "react";

import packages from "../../assets/home/packages.jpg";

export default function PackageContainer() {
    return (
        <section
            className="block p-[3px] text-xl md:text-lg rounded-[40px] bg-gradient-to-r from-g1 via-g2 to-g3 bg-[length:80%] cursor-pointer animate-gradientBg hover:scale-110 transition-all duration-300"
            onClick={() => window.open(`/creator-packages`, "_blank")}
        >
            <div className="flex items-center justify-center lg:justify-normal gap-2 px-2 py-2 !w-full rounded-[40px] text-card1 bg-white">
                <img src={packages} alt="ggcs packages" className="w-7 h-7" />
                <p className="[word-spacing:3px] font-axiSemiBold">
                    Creator Packages
                </p>
            </div>
        </section>
    );
}
