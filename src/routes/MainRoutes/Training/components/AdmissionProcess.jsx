import React, { useState } from "react";

import { admissionProcess } from "../dummyData";
import Modal from "../../../../components/UI/Modal";
import { Container } from "../../../../components/Layout";
import { H3, H6 } from "../../../../components/Typography";

export default function AdmissionProcess() {
    const [state, setState] = useState({ openModal: false });

    return (
        <section className="bg-red-50 py-14">
            <Container>
                <H3 className="text-center">{admissionProcess?.title}</H3>
                <div className="relative grid grid-cols-2 gap-4 my-7 md:my-10 md:gap-8 md:grid-cols-4">
                    <div className="absolute left-0 hidden w-full border-2 border-red-400 border-dashed top-1/2 md:block" />
                    {admissionProcess?.process?.map((item) => (
                        <div
                            key={item?.id}
                            className="z-0 p-3 text-center bg-white border md:py-5 rounded-xl"
                        >
                            <div className="flex items-center justify-center mx-auto shadow-md bg-red-50 size-14 rounded-xl">
                                <img
                                    src={item?.icon}
                                    alt={item?.title}
                                    className="mx-auto size-7 md:size-5"
                                />
                            </div>
                            <H6 className="mt-2 md:my-3">{item?.title}</H6>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center gap-5 ">
                    <button
                        className="px-6 py-3 text-white uppercase bg-red-600 border-2 border-red-500 rounded-lg"
                        onClick={() =>
                            setState((prev) => {
                                return { ...prev, openModal: true };
                            })
                        }
                    >
                        Send Inquiry
                    </button>
                </div>
            </Container>
            <Modal
                open={state?.openModal}
                size="md"
                className="text-center"
                onClose={() =>
                    setState((prev) => {
                        return { ...prev, openModal: false };
                    })
                }
            >
                {/* <UpdatingPage /> */}
                <H3>Updating Soon</H3>
            </Modal>
        </section>
    );
}
