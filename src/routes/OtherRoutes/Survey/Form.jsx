import React, { useState } from "react";
import { firstPage } from "./dummy";
import { Input } from "../../../components/UI/Input";

export default function Form() {
    const [state, setState] = useState({ inputData: {} });
    return (
        <div>
            {firstPage?.map((item) => (
                <Input />
            ))}
        </div>
    );
}
