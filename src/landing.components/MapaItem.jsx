import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import AnimatedElement from "../components/AnimatedElement";
import info from "../mooks/info.json";

export default function MapaItem() {
    const [branch, setBranch] = useState(info.branch1);
    return (
        <div className="relative">
            <div className=" container flex flex-col items-center font-title ">
                <h3 className="text-5xl sm:text-6xl text-center">
                    We&apos;ve got you <span className="text-[--color2-txt1]">covered!</span>
                </h3>
            </div>

            <div className="relative bg-[--color1-bg] mt-10 xs:mt-20 sm:mt-32">
                <svg
                    viewBox="0 0 1440 320"
                    className="absolute -z-10 -top-24 xs:-top-32 sm:-top-40 md:-top-52 lg:-top-60 lefth-0 right-0 w-full mt-14 fill-[var(--color1-bg)] translate-y-1"
                >
                    <path d="M0,96L48,90.7C96,85,192,75,288,85.3C384,96,480,128,576,133.3C672,139,768,117,864,122.7C960,128,1056,160,1152,154.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>{" "}
                </svg>
                <div className="container px-[--padding]">
                    <div className="flex flex-col gap-10 md:flex-row w-full items-center justify-center pb-5">
                        <div className="flex flex-col w-full md:w-1/2 items-center gap-5">
                            <h3 className="text-[--color2-txt] text-4xl text-center font-title max-w-[500px]">
                                Get to know our locations and contacts{" "}
                            </h3>
                            <div className="flex flex-row gap-1 sm:gap-10">
                                <div className="flex flex-col items-center gap-10">
                                    <Option
                                        name={info.branch1.name}
                                        description={info.branch1.address}
                                        icon={faLocationDot}
                                        onClick={() => setBranch(info.branch1)}
                                        className={
                                            branch.name === info.branch1.name
                                                ? "border md:border-2 border-solid border-black"
                                                : ""
                                        }
                                    />
                                    <a
                                        className="flex bg-[--color3-bg] h-14 aspect-square items-center justify-center rounded-full shadow-xl"
                                        href={"mailto:" + branch.email}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FontAwesomeIcon
                                            icon={faEnvelope}
                                            className="text-[--color3-txt1] text-3xl"
                                        />
                                    </a>
                                </div>
                                <div className="flex flex-col items-center gap-10">
                                    <Option
                                        name={info.branch2.name}
                                        description={info.branch2.address}
                                        icon={faLocationDot}
                                        onClick={() => setBranch(info.branch2)}
                                        icon2={faEnvelope}
                                        className={
                                            branch.name === info.branch2.name
                                                ? "border md:border-2 border-solid border-black"
                                                : ""
                                        }
                                    />
                                    <a
                                        className="flex bg-[--color3-bg] h-14 items-center justify-center rounded-full shadow-xl font-content font-bold text-center text-nowrap aspect-square px-0 sm:px-5"
                                        href={"tel:" + branch.phone}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FontAwesomeIcon
                                            icon={faPhone}
                                            className="text-[--color3-txt1] text-3xl block sm:hidden"
                                        />
                                        <span className="hidden sm:flex gap-1">
                                            {branch.phone} |
                                            <span className="font-title">{branch.ext}</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <AnimatedElement className="flex-1 flex max-w-[500px] w-full aspect-[5/4]">
                            <iframe
                                src={branch.map}
                                loading="lazy"
                                className="w-full h-full rounded-xl shadow-3xl"
                            />
                        </AnimatedElement>
                    </div>
                </div>
            </div>
            <svg viewBox="0 0 1440 320" className=" w-full fill-[var(--color1-bg)] -translate-y-1">
                <path d="M0,160L80,138.7C160,117,320,75,480,58.7C640,43,800,53,960,58.7C1120,64,1280,64,1360,64L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>{" "}
            </svg>
        </div>
    );
}

function Option({ name, description, icon, className = "", ...props }) {
    return (
        <div className="flex flex-col justify-center items-center">
            <button
                className={
                    "flex flex-col max-w-36 w-full py-2 gap-3 items-center bg-[--color3-bg] rounded-md " +
                    className
                }
                {...props}
            >
                <div className="flex bg-[--color1-bg] w-10 h-10 items-center justify-center rounded-full">
                    <FontAwesomeIcon className="text-[--color2-txt]" icon={icon} />
                </div>
                <h3 className="text-balance text-sm font-title">{name}</h3>
                <p className="w-full font-title2 text-center text-xs text-balance">{description}</p>
            </button>
        </div>
    );
}
