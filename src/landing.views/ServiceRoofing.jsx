import AnimatedElement from "../components/AnimatedElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleLeft,
    faSnowflake,
    faHouse,
    faAngleRight,
    faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";

import ReactCompareImage from "react-compare-image";
import SectionContact from "../landing.components/SectionContact";
import BannerItem from "../landing.components/BannerItem";
import { useEffect } from "react";

export default function ServiceRoofing() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <AnimatedElement>
            <section>
                <div className="container">
                    <BannerItem
                        title="Roofing Services"
                        title2="in Stamford, CT"
                        subtitle="Maximize your coverage with our expert help"
                        imgSrc="/img/services.jpg"
                        imgText="Claims couseling process"
                    />
                </div>
            </section>

            <section className="relative">
                <div className="absolute inset-0 -z-1 flex flex-col">
                    <div className="relative h-[750px]">
                        <img src="/img/services.jpg" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
                        <svg
                            viewBox="0 0 1440 320"
                            className="absolute left-0 right-0 bottom-0 fill-[#fc8811]"
                        >
                            <path d="M0,224L34.3,218.7C68.6,213,137,203,206,165.3C274.3,128,343,64,411,64C480,64,549,128,617,133.3C685.7,139,754,85,823,58.7C891.4,32,960,32,1029,74.7C1097.1,117,1166,203,1234,213.3C1302.9,224,1371,160,1406,128L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                        </svg>
                    </div>
                    <div
                        className="relative flex h-auto bg-[#fc8811] flex-1"
                        style={{ boxShadow: "inset -10px 0px 20px 20px #fc8811" }}
                    >
                        <div
                            className="absolute top-[50%] translate-y-[-50%] w-full bg-[#fc8811]"
                            style={{ height: "calc(100% + 10px)" }}
                        />
                    </div>
                </div>
                <div className="container relative z-10 py-10">
                    <div className=" flex flex-col w-full gap-14  items-center overflow-hidden rounded-md">
                        <h3
                            className="text-4xl p-10 text-[--color1-txt1]"
                            style={{ textShadow: "0 0 10px #000" }}
                        >
                            PROJECT CHALLENGES IN ROOFING
                        </h3>
                        <div className="flex w-full">
                            {/* <div className="absolute inset-0 backdrop-blur-sm" /> */}
                            <div className=" flex items-center w-full px-1 sm:px-5 py-3 gap-2 mx-5 md:mx-20 lg:mx-40 rounded-2xl bg-[#171640]/60 text-[var(--color1-txt1)] shadow-xl ">
                                <div className="text-xl cursor-pointer">
                                    <FontAwesomeIcon icon={faAngleLeft} className="text-[2.5rem]" />
                                </div>
                                <div className=" w-full flex justify-center items-center">
                                    <div className="grid grid-cols-3 h-full sm:gap-10 md:gap-20 ">
                                        <ItemBanner
                                            title="Sustainability"
                                            icon={faHandHoldingDollar}
                                        />
                                        <ItemBanner
                                            title="Improved air
                                            quality"
                                            icon={faHouse}
                                        />
                                        <ItemBanner title="Thermal isolation" icon={faSnowflake} />
                                    </div>
                                </div>
                                <div className="text-xl cursor-pointer">
                                    <FontAwesomeIcon
                                        icon={faAngleRight}
                                        className="text-[2.5rem]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container relative z-10">
                    <div className="flex w-full pt-72 ">
                        <div className="grid w-full gap-5 grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-2 ">
                            <div className="flex flex-col w-full items-center gap-3">
                                <div className="w-full max-w-96 rounded-lg overflow-hidden shadow-2xl">
                                    <ReactCompareImage
                                        leftImage="/img/before.png"
                                        rightImage="/img/after.png"
                                        className="w-full h-full [&:hover>img]:scale-110"
                                    />
                                </div>
                                <span className="text-lg">
                                    Project done for a family somew here in New Haven
                                </span>
                            </div>
                            <div className="flex flex-col w-full items-center gap-3">
                                <div className="w-full max-w-96 rounded-lg overflow-hidden shadow-2xl">
                                    <ReactCompareImage
                                        leftImage="/img/before.png"
                                        rightImage="/img/after.png"
                                        className="w-full h-full [&:hover>img]:scale-110"
                                    />
                                </div>
                                <span className="text-lg">
                                    Project done for a family somew here in New Haven
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative bg-[#0b0c1e] py-60">
                <div className=" h-20">
                    <svg
                        viewBox="0 0 1440 320"
                        className="absolute left-0 right-0 -top-0 fill-[#fc8811] bg-[#0b0c1e]"
                    >
                        <path d="M0,320L40,298.7C80,277,160,235,240,234.7C320,235,400,277,480,266.7C560,256,640,192,720,144C800,96,880,64,960,58.7C1040,53,1120,75,1200,96C1280,117,1360,139,1400,149.3L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
                    </svg>
                </div>
                <div className="container text-white ">falta item</div>
            </section>

            <section className="p-[var(--padding)]">
                <div className="container w-full md:pt-20">
                    <SectionContact />
                </div>
            </section>
        </AnimatedElement>
    );
}

function ItemBanner({ title, icon }) {
    return (
        <div className="flex flex-col  content-center items-center py-1  sm:px-5 rounded-xl sm:gap-2 shadow-3xl">
            <FontAwesomeIcon className="text-4xl md:text-6xl" icon={icon} />
            <h3 className="text-center text-lg md:text-xl sm:max-w-36">{title}</h3>
        </div>
    );
}
