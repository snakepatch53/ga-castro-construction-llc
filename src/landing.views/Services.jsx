import { Link } from "react-router-dom";
import services from "../mooks/services.json";
import { useEffect, useState } from "react";
import AnimatedElement from "../components/AnimatedElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import slides from "./../mooks/slider.json";
import Carousel from "../landing.components/Carousel";

import { faTrowelBricks, faUsersGear, faStopwatch } from "@fortawesome/free-solid-svg-icons";

export default function Services() {
    const [servicios, setServicios] = useState(null);
    useEffect(() => {
        // window.scrollTo(0, 0);
        setTimeout(() => {
            setServicios(services);
        }, 0);
    }, []);

    return (
        <>
            <div className="">
                <div className="flex flex-col w-full items-center content-center">
                    <div className="flex  w-full">
                        <div className="w-full h-screen">
                            <Carousel data={slides} withSlider={true} />
                        </div>
                    </div>
                    <div className="flex flex-col w-full h-auto items-center bg-[#171640] text-[--color1-txt1] ">
                        <div className="relative w-full flex h-52 justify-center">
                            <div className="absolute -top-10 grid grid-cols-3 h-full gap-20 ">
                                <ItemBanner title="Profesional Workers" icon={faUsersGear} />
                                <ItemBanner title="High Quality Materials" icon={faTrowelBricks} />
                                <ItemBanner title="Fast response Time" icon={faStopwatch} />
                            </div>
                        </div>
                        <h2 className="mt-20 pb-20 font-title2 text-3xl font-bold text-balance">
                            QUALITY AND TRUST IN EACH JOB
                        </h2>
                    </div>
                </div>
                <div className="container flex flex-col items-center">
                    <div className="w-full mt-10">
                        {/* <div className="relative w-full aspect-[4/1]">
                            <img
                                src="/img/services.jpg"
                                alt="Imagen de portada de servicios"
                                className="absolute inset-0 w-full h-[calc(100%+70px)] object-cover rounded-lg"
                            />
                        </div> */}
                        <div className="w-full relative z-10 flex justify-center px-5 sm:px-10 lg:px-20 ">
                            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
                                {servicios &&
                                    servicios.map((item) => <Item key={item.id} {...item} />)}
                                {!servicios && (
                                    <>
                                        <Item />
                                        <Item />
                                        <Item />
                                        <Item />
                                        <Item />
                                        <Item />
                                        <Item />
                                        <Item />
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function Item({ src, to, title, description }) {
    if (src && to && title && description)
        return (
            <AnimatedElement>
                <Link to={to} className="group w-full h-full rounded-lg overflow-hidden shadow-xl">
                    <div className="w-full aspect-video rounded-lg overflow-hidden">
                        <img src={src} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-5">
                        <h4 className="group-hover:underline text-center my-2 font-title">
                            {title}
                        </h4>
                        <p className="font-content font-bold text-sm">{description}</p>
                    </div>
                </Link>
            </AnimatedElement>
        );
    return (
        <AnimatedElement className="relative w-full h-full rounded-lg overflow-hidden shadow-xl bg-[var(--color4-bg)] cursor-pointe">
            <div className="brigth-animation absolute inset-0" />
            <div className="w-full aspect-video rounded-lg bg-[var(--color4-txt)]" />
            <div className="p-5">
                <h4 className="w-20 h-5 rounded-full mx-auto my-3 bg-[var(--color4-txt)]" />
                <div className="flex flex-col gap-2">
                    <p className="w-full h-3 bg-[var(--color4-txt)] rounded-full" />
                    <p className="w-5/6 h-3 bg-[var(--color4-txt)] rounded-full" />
                    <p className="w-full h-3 bg-[var(--color4-txt)] rounded-full" />
                    <p className="w-2/3 h-3 bg-[var(--color4-txt)] rounded-full" />
                    <p className="w-6/12 h-3 bg-[var(--color4-txt)] rounded-full" />
                </div>
            </div>
        </AnimatedElement>
    );
}

function ItemBanner({ title, icon }) {
    return (
        <div className="flex flex-col bg-[--color1-bg] content-center py-10 px-5 rounded-xl gap-4 shadow-3xl">
            <FontAwesomeIcon className="text-6xl" icon={icon} />
            <h3 className="text-center text-xl max-w-36">{title}</h3>
        </div>
    );
}
