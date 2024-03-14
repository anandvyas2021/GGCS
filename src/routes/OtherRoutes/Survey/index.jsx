import React, { useEffect, useState } from "react";
import StepsForm from "./stepsForm";
import Form from "./Form";
import { surveyData } from "./dummy";

export default function Survey(props) {
    const [state, setState] = useState({
        currentStep: 1,
        completed: false,
        fieldsData: [],
    });

    useEffect(() => {
        let data = surveyData?.filter((item) => {
            return item?.id === state?.currentStep;
        })[0]?.fields;

        setState((prev) => {
            return { ...prev, fieldsData: data };
        });
    }, [state?.currentStep]);

    const formStepHandler = (complete) => {
        return setState((prev) => {
            return {
                ...prev,
                currentStep: prev?.currentStep + 1,
                completed: complete,
            };
        });
    };

    const { completed, currentStep, fieldsData } = state;

    const propsData = { currentStep: currentStep, completed: completed };
    return (
        <div>
            <StepsForm {...propsData} />
            <Form
                fieldsData={fieldsData}
                {...propsData}
                formStepHandler={formStepHandler}
            />
        </div>
    );
}
