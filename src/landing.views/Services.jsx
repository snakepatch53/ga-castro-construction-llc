import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import slides from "./../mooks/slider.json";
import Carousel from "../landing.components/Carousel";

import { faTrowelBricks, faUsersGear, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import OurServices from "../landing.components/OurServices";

export default function Services({ info }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="">
                <div className="flex flex-col w-full items-center content-center">
                    <div className="flex  w-full">
                        <div className="w-full h-screen">
                            <Carousel info={info} data={slides} withSlider={true} />
                        </div>
                    </div>
                    <div className="flex flex-col w-full h-auto items-center bg-[#171640] text-[--color1-txt1] ">
                        <div className="relative w-full flex h-28 sm:h-36 md:h-52 justify-center">
                            <div className="absolute -top-10 flex h-full gap-1 sm:gap-3 sm-5 md:gap-20 px-1 sm:px-3">
                                <ItemBanner title="Profesional Workers" icon={faUsersGear} />
                                <ItemBanner title="High Quality Materials" icon={faTrowelBricks} />
                                <ItemBanner title="Fast response Time" icon={faStopwatch} />
                            </div>
                        </div>
                        <h2 className=" md:mt-20 pb-20 font-title2 text-xl sm:text-3xl font-bold text-balance text-center">
                            QUALITY AND TRUST IN EACH JOB
                        </h2>
                    </div>
                </div>
                <div className="container flex flex-col items-center">
                    <div className="w-full my-10">
                        <OurServices />
                    </div>
                </div>
            </div>
        </>
    );
}

function ItemBanner({ title, icon }) {
    return (
        <div className="flex flex-col justify-center bg-[--color1-bg] content-center py-2 sm:py-4 md:py-10 px-1 sm:px-3 md:px-5 rounded-xl gap-4 shadow-3xl">
            <FontAwesomeIcon className="text-xl sm:text-3xl md:text-6xl" icon={icon} />
            <h3 className="text-center text-base sm:text-lg md:text-xl max-w-36 leading-5">
                {title}
            </h3>
        </div>
    );
}
