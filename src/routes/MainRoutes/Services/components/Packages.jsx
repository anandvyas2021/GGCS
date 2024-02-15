import React from "react";

import Pricing from "../../../../components/Pricing";
import { Container } from "../../../../components/Layout";
import { Desc, H1Animate } from "../../../../components/Typography";

export default function Packages() {
    return (
        <Container className="px-3 py-10 sm:px-8 md:px-12 sm:py-20">
            <div className="flex mb-16 md:justify-center">
                <div className="text-center md:w-8/12">
                    <H1Animate>
                        {/* How can a perth social media help grow my
                        business? */}
                        Packages for everyone
                    </H1Animate>
                    <Desc>
                        Here at GGCS we focus on markets where technology,
                        innovation, and capital can unlock long-term value and
                        drive economic growth.
                    </Desc>
                </div>
            </div>
            <div className="space-y-8 sm:gap-6 xl:gap-10 lg:space-y-0">
                <Pricing />
            </div>
        </Container>
    );
}
