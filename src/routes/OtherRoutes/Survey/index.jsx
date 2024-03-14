import React, { useState } from "react";
import StepsForm from "./stepsForm";
import Form from "./Form";

export default function Survey() {
    const [state, setState] = useState({ currentStep: 1 });
    return (
        <div>
            <StepsForm />
            <Form />
        </div>
    );
}
