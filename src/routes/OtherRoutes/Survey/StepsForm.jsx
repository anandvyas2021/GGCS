import React, { useState } from "react";
import checkMark from "../../../assets/icons/check-success.png"

import { Container } from "../../../components/Layout";

export default function StepsForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);
    const steps = [
        { id: 1, label: "Heading 1", completed: false },
        { id: 2, label: "Heading 2", completed: false },
        { id: 3, label: "Heading 3", completed: false },
        { id: 4, label: "Heading 4", completed: false },
        { id: 5, label: "Heading 5", completed: false },
    ]
    return (
        <div>
            <Container className="lg:py-20 py-10">
                <div className="flex justify-between">
                    {steps?.map((item) => (
                        <div key={item?.id} className={`relative flex flex-col justify-center items-center w-36 ${currentStep === item?.id && "active"} ${(item?.id < currentStep || complete) && "complete"} `}>
                            <div className={`border-2 rounded-full p-2 ${item?.id < currentStep || complete ? "border-green-500" : ""}`}>
                                <div className="w-10 h-10 flex items-center justify-center z-10 relative bg-slate-700 rounded-full font-semibold text-white">
                                    {item?.id < currentStep || complete ? <img src={checkMark} alt="success" /> : item?.id}
                                </div>
                            </div>
                            <div className={`w-[205px] h-[2px] z-0 absolute top-[30px] lg:!left-[100px] left-[80px] bg-gray-300 ${steps?.length === item?.id ? "hidden" : ""} ${item?.id < currentStep || complete ? "bg-green-500" : ""}`}></div>
                            <p className="text-gray-500 pt-2">{item?.label}</p>
                        </div>
                    ))}
                </div>
                <div className="my-10">
                    {!complete && (
                        <button
                            className="border-2 rounded-full py-1.5 px-5 bg-gray-200"
                            onClick={() => {
                                currentStep === steps.length
                                    ? setComplete(true)
                                    : setCurrentStep((prev) => prev + 1);
                            }}
                        >
                            {currentStep === steps.length ? "Finish" : "Next"}
                        </button>
                    )}
                </div>
            </Container>
        </div>
    )
}
