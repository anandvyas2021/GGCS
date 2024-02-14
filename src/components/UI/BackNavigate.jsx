import React from "react";
import backIcon from "../../assets/icons/backBtn.svg";

import { useNavigate } from "react-router-dom";

import { Container } from "../Layout";
import { H4 } from "../Typography";

export default function BackNavigate({ backLabel, backLink, className }) {
    let navigate = useNavigate();
    return (
        <section
            className={`max-w-screen-lg lg:max-w-screen-xl mx-auto flex items-center gap-3 pt-24 lg:pt-5 text-primary px-2 ${className}`}
        >
            <img
                src={backIcon}
                alt="back"
                className="w-5 transition-all duration-200 cursor-pointer sm:w-7 hover:scale-110"
                onClick={() => navigate(backLink ?? "/")}
            />
            {backLabel ? <H4>{backLabel}</H4> : null}
        </section>
    );
}
