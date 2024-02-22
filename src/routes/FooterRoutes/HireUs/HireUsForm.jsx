import React, { useState } from "react";
import formBg from "../../../assets/HireUs/formBg.svg";
import hireUsHero from "../../../assets/HireUs/hireUsHero.svg";

import { Form, Select } from "antd";
import { Input, Textarea } from "../../../components/UI/Input";
import { Desc, H1Animate } from "../../../components/Typography";
import { PrimaryBtn } from "../../../components/Button";

function HireUsForm() {
    const [state, setState] = useState({
        email: "",
        mobile: "",
        budget: "",
        requirement: "",
        hour: "",
        organization: "",
        experience: "",
        errMessage: {
            email: "",
            mobile: "",
            budget: "",
            requirement: "",
            hour: "",
            organization: "",
            experience: "",
        },
    });

    const handleContactUs = (e) => {
        e.preventDefault();
        if (formValid(state)) {
            setState((prev) => {
                return {
                    ...prev,
                    errMessage: {
                        experience: !state?.experience ? "Required" : "",
                        email: !state?.email ? "Required" : "",
                        mobile: !state?.mobile ? "Required" : "",
                        budget: !state?.budget ? "Required" : "",
                        requirement: !state?.requirement ? "Required" : "",
                        hour: !state?.hour ? "Required" : "",
                        organization: !state?.organization ? "Required" : "",
                    },
                };
            });
        }
    };
    const formValid = ({ errMessage, ...rest }) => {
        let isValid = false;
        Object.values(errMessage).forEach((val) => {
            if (val.length > 0) {
                isValid = false;
            } else {
                isValid = true;
            }
        });
        Object.values(rest).forEach((val) => {
            if (val === null) {
                isValid = false;
            } else {
                isValid = true;
            }
        });
        return isValid;
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        let errMessage = { ...state.errMessage };
        switch (name) {
            case "email":
                errMessage.email = regExp.test(value)
                    ? ""
                    : "Email address is invalid";
                break;
            case "mobile":
                errMessage.mobile =
                    value.length <= 10 ? "Valid mobile number required" : "";
                break;
            // case "experience":
            //     errMessage.experience =
            //         value.length <= 10 ? "Valid mobile number required" : "";
            //     break;
            case "budget":
                errMessage.budget.length < 2
                    ? "Enter valid approximately budget"
                    : "";
                break;
            case "requirement":
                errMessage.requirement =
                    value.length <= 10 ? "Valid mobile number required" : "";
                break;
            case "organization":
                errMessage.organization =
                    value.length < 2 ? "Enter your organization name" : "";
                break;
            case "hour":
                errMessage.hour =
                    value.length < 1
                        ? "Enter for what hour you want to hire the developer"
                        : "";
                break;

            default:
                break;
        }
        setState((prev) => {
            return {
                ...prev,
                errMessage,
                [name]: value,
            };
        });
    };

    const {
        email,
        mobile,
        experience,
        organization,
        requirement,
        budget,
        hour,
        errMessage,
    } = state;
    return (
        <section className="bg-gray-100">
            <div className="grid justify-center max-w-screen-xl grid-cols-2 gap-10 py-10 mx-auto form-wrapper md:py-20">
                <section className="flex flex-col items-center text-center">
                    <H1Animate className="!text-4xl text-center mb-5 border-b-4 border-main3">
                        Hire Us Form
                    </H1Animate>
                    <Desc className="w-[500px] mb-6">
                        We help brands and platforms turn big ideas into
                        beautiful digital products and experiences.
                    </Desc>
                    <img src={hireUsHero} alt="hire us" className="w-[65%]" />
                </section>
                <section>
                    <form
                        action=""
                        onSubmit={(e) => {
                            handleContactUs(e);
                        }}
                        className="px-10 bg-white bg-cover shadow-2xl py-14 rounded-2xl"
                    >
                        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                            <Input
                                value={email}
                                name="email"
                                placeholder="Email"
                                type="mail"
                                errMsg={errMessage?.email}
                                onChange={(e) => handleChange(e)}
                            />
                            <Input
                                value={mobile}
                                name="tel"
                                placeholder="Mobile Number"
                                type="Mobile"
                                errMsg={errMessage?.mobile}
                                onChange={(e) => handleChange(e)}
                            />
                            <Input
                                value={organization}
                                name="organization"
                                errMsg={errMessage?.organization}
                                onChange={(e) => handleChange(e)}
                                type="text"
                                placeholder="Organization"
                            />
                            <Input
                                value={requirement}
                                name="requirement"
                                errMsg={errMessage?.requirement}
                                onChange={(e) => handleChange(e)}
                                type="text"
                                placeholder="Requirement"
                            />
                            <Input
                                value={budget}
                                name="budget"
                                errMsg={errMessage?.budget}
                                onChange={(e) => handleChange(e)}
                                type="number"
                                placeholder="Budget (in Rs.)"
                            />
                            <Input
                                value={experience}
                                name="experience"
                                errMsg={errMessage?.experience}
                                onChange={(e) => handleChange(e)}
                                type="number"
                                preffix="yrs"
                                placeholder="Experience (in yrs.)"
                            />
                            <Input
                                value={hour}
                                name="hour"
                                errMsg={errMessage?.hour}
                                onChange={(e) => handleChange(e)}
                                type="number"
                                placeholder="Hour"
                            />
                        </div>
                        <div className="mx-auto mt-3 lg:mt-4 lg:w-1/2">
                            <PrimaryBtn
                                size="px-8 py-3"
                                bgColor="bg-primaryBtn"
                                type="submit"
                            >
                                Submit
                            </PrimaryBtn>
                        </div>
                    </form>
                </section>
            </div>
        </section>
    );
}

export default HireUsForm;

{
    /* <div className="input-box">  
                              <Select
                                showSearch
                                style={{
                                    width: 200,
                                }}
                                placeholder="Search to Select"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    (option?.label ?? "").includes(input)
                                }
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? "")
                                        .toLowerCase()
                                        .localeCompare(
                                            (optionB?.label ?? "").toLowerCase()
                                        )
                                }
                                options={[
                                    {
                                        value: "1",
                                        label: "Not Identified",
                                    },
                                    {
                                        value: "2",
                                        label: "Closed",
                                    },
                                    {
                                        value: "3",
                                        label: "Communicated",
                                    },
                                    {
                                        value: "4",
                                        label: "Identified",
                                    },
                                    {
                                        value: "5",
                                        label: "Resolved",
                                    },
                                    {
                                        value: "6",
                                        label: "Cancelled",
                                    },
                                ]}
                            />  
                              </div> */
}
