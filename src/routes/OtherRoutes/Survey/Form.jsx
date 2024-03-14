import React, { Fragment, useEffect, useState } from "react";

import { steps } from "./dummy";
import { Input } from "../../../components/UI/Input";

export default function Form(props) {
    const [state, setState] = useState({ inputData: {} });

    const { currentStep, fieldsData, formStepHandler, completed } = props;

    const setData = (k, v) => {
        setState((prev) => {
            return { ...prev, inputData: { ...prev?.inputData, [k]: v } };
        });
    };
    // const submitHandler=()=>{
    //     setState({})
    // }

    useEffect(() => {
        for (let i in fieldsData) {
            setState((prev) => {
                return {
                    ...prev,
                    inputData: {
                        ...prev?.inputData,
                        [fieldsData[i]?.name]: "",
                    },
                };
            });
        }
    }, [props]);

    return (
        <div className="max-w-screen-xl mx-auto">
            <section className="grid grid-cols-2 gap-10 border rounded-xl md:p-10 border-gray-300">
                {props?.fieldsData?.map((field) => (
                    <Fragment key={field?.id}>
                        <Input
                            label={field?.label}
                            className="border-2 border-gray-400 rounded-xl !bg-gray-100 !py-4 !text-lg"
                            value={state?.inputData[field?.name]}
                            onChange={(v) =>
                                setData(field?.name, v.target.value)
                            }
                        />
                    </Fragment>
                ))}
            </section>
            <div className="relative flex justify-center my-10">
                {!completed ? (
                    <div className="flex items-center justify-center">
                        <div
                            className={`p-10 animate-ping rounded-full ![animation-duration:3.5s] bg-green-200`}
                        />
                        <button
                            className="absolute top-[5%] left-[47%] border-2 text-xl font-semibold rounded-full px-4 py-5 text-white bg-green-400"
                            onClick={() => {
                                currentStep === steps?.length
                                    ? formStepHandler(true)
                                    : formStepHandler(false);
                            }}
                        >
                            {currentStep === steps?.length ? "Finish" : "Next"}
                        </button>
                    </div>
                ) : null}
            </div>
        </div>
    );
}
