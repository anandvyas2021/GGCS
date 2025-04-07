import React, { useEffect, useRef, useState } from "react";
import ppt from "../../assets/PDF/GGCS-PPT.pdf";
import logo from "../../assets/Navbar/logo.png";
import Menu from "../../assets/Navbar/menu.svg";

import { useLocation, useNavigate } from "react-router-dom";

import { navMenu } from "../../db/dummy";
import SocialMedias from "./SocialMedias";
import PackageContainer from "./PackageContainer";
import { H5 } from "../../components/Typography";
import { PrimaryBtn, RadientBtn } from "../../components/Button";

export default function NavbarContent(props) {
  const location = useLocation(),
    navigate = useNavigate();
  const [state, setState] = useState({
    showMenu: true,
  });

  let scrollRef = useRef(),
    menuInfoBlockRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  const onScroll = () => {
    let ele = document.querySelector(".header");
  };

  const handleOpenMenu = (data = true) => {
    setState((prev) => {
      return { ...prev, showMenu: data };
    });
  };
  const { showMenu } = state;
  return (
    <section
      className={`left-0 right-0 z-[1000] ${
        !props?.fullNav ? "max-w-screen-xl mx-auto sm:mt-5 " : "fixed w-full"
      }`}
    >
      <div
        className={`header sm:px-4 shadow-header !bg-white 
                ${
                  !props?.fullNav
                    ? "py-1 border sm:rounded-full border-white bg-transparent backdrop-blur"
                    : "fixed w-full"
                }`}
        ref={scrollRef}
      >
        <div
          className={`relative flex justify-between items-center px-3
                    ${
                      !props?.fullNav ? "max-w-full" : "max-w-screen-xl mx-auto"
                    }`}
        >
          <div className="flex items-center h-[70px] sm:h-[80px]">
            <img
              src={logo}
              alt="ggcs"
              className="cursor-pointer h-3/5"
              onClick={() => navigate("/")}
            />
          </div>
          <div className="flex">
            <ul className="items-center hidden lg:flex">
              {navMenu?.map((item) => (
                <li
                  className={`relative mr-7 xl:!mr-12 p-1 cursor-pointer border-b-[3px] border-transparent hover:text-primary transition-all duration-200 ${
                    item?.slug === location?.pathname
                      ? "text-primary !border-primary"
                      : ""
                  }`}
                  key={item?.id}
                  onClick={() => navigate(item?.slug)}
                >
                  <H5 className="!text-lg">
                    <a>{item?.label}</a>
                  </H5>
                  {/* {item?.slug === location?.pathname ? (
                                        <figure className="absolute bottom-0 w-0 h-0 transition-all duration-200 border-b-[5px] border-l-[5px] border-transparent border-r-[5px] left-[45%] border-b-primary" />
                                    ) : null} */}
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between z-[240]">
              <span className="hidden lg:block">
                {props?.fullNav ? (
                  <RadientBtn
                    className="!rounded-full !py-2.5"
                    onClick={() => navigate("/hire-us")}
                    hideEffect
                  >
                    Hire Us
                  </RadientBtn>
                ) : (
                  <PrimaryBtn
                    bgColor="bg-primaryBtn"
                    className="border-primaryBtn"
                    onClick={() => navigate("/hire-us")}
                  >
                    Hire Us
                  </PrimaryBtn>
                )}
              </span>
              <button
                className="block w-10 h-10 lg:hidden sm:h-12 sm:w-12"
                onClick={() => {
                  // e.stopPropagation();
                  setState((prev) => {
                    return {
                      ...prev,
                      showMenu: !state?.showMenu,
                    };
                  });
                }}
              >
                <img src={Menu} alt="" className="w-full h-full" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {!showMenu ? (
        <>
          <div
            className={`block lg:hidden fixed left-0 top-0 h-full w-full rounded-b-lg z-50 bg-blue-50 px-5 lg:px-0 pt-3 pb-14 lg:pb-3 lg:py-0 ${
              showMenu ? "hidden" : ""
            }`}
            id="navbar-default"
          >
            <div className="flex items-center justify-end font-axiSemiBold">
              <button
                className="px-2 pt-1 border rounded-full size-10 hover:bg-white"
                onClick={() =>
                  setState((prev) => {
                    return {
                      ...prev,
                      showMenu: !state?.showMenu,
                    };
                  })
                }
              >
                X
              </button>
            </div>
            <ul className="flex flex-col gap-3 mb-10">
              {navMenu?.map((item) => (
                <li
                  className="py-2 text-2xl text-left text-black font-axiBold"
                  key={item?.id}
                  onClick={() => {
                    setState((prev) => {
                      return {
                        ...prev,
                        showMenu: !state?.showMenu,
                      };
                    });
                    if (item?.label2 === "download") {
                      return;
                    } else {
                      navigate(item?.slug);
                    }
                  }}
                >
                  {item.label2 === "download" ? (
                    <a
                      download
                      onClick={() => {
                        window.open(ppt, "_blank", "fullscreen=yes");
                      }}
                      className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                      aria-current="page"
                    >
                      {item?.label}
                    </a>
                  ) : (
                    <a>{item?.label}</a>
                  )}
                </li>
              ))}
            </ul>
            <div className="sm:w-1/2 mr-auto lg:hidden z-50 imgBorder px-4 md:py-3 mt-3 bg-gradient-to-r from-primary to-secondary border rounded-lg text-white cursor-pointer">
              <a
                download
                onClick={() => {
                  window.open(ppt, "_blank", "fullscreen=yes");
                }}
                className="font-axiSemiBold block py-2 pl-3 pr-4 text-center !text-white md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                DOWNLOAD PPT
              </a>
            </div>
            <div className="block mt-5 mr-auto sm:w-1/2 ">
              <PackageContainer />
            </div>
            <div className="absolute bottom-10 w-full sm:w-1/2 mt-8 lg:hidden">
              <SocialMedias />
            </div>
          </div>
        </>
      ) : null}
    </section>
  );
}

// resolve: {
//     alias: {
//         src: "/src",
//         components: "/src/components",
//     },
// },F

// colors: {
//     "tp-common-white": "#ffffff",
//     "tp-common-black": "#000",
//     "tp-common-1": "#3eb9ff",
//     "tp-common-2": "#abbf78",
//     "tp-common-3": "#ffb876",
//     "tp-common-4": "#ffa0c9",
//     "tp-common-5": "#e4f7ff",
//     "tp-common-6": "#fff2d6",
//     "tp-common-7": "#e3e8ff",
//     "tp-common-8": "#ffe4e4",
//     "tp-common-9": "#d2f8ec",
//     "tp-common-10": "#ffe4f3",
//     "tp-common-11": "#010f1c",
//     "tp-heading-primary": "#0c1338",
//     "tp-heading-secondary": "#0f1123",
//     "tp-grey-1": "#6c6e76",
//     "tp-grey-2": "#93959f",
//     "tp-grey-3": "#565764",
//     "tp-grey-4": "#666666",
//     "tp-grey-5": "#8a8a8d",
//     "tp-grey-6": "#c3c4cd",
//     "tp-grey-7": "#414250",
//     "tp-grey-8": "#55585b",
//     "tp-text-body": "#565764",
//     "tp-text-1": "#271d3a",
//     "tp-theme-primary": "#4260ff",
//     "tp-theme-secondary": "#131683",
//     "tp-theme-3": "#05003b",
//     "tp-theme-green": "#59ba41",
//     "tp-theme-apple": "#f5f1eb",
//     "tp-theme-dark-blue": "#1e2b8a",
//     "tp-theme-blue": "#775afc",
//     "tp-border-1": "#f0f1f4",
//     "tp-border-5": "#000",
// },
