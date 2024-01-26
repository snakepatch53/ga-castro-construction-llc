import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import AnimatedElement from "../components/AnimatedElement";

export default function MapaItem() {
    const map1 =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193062.79912567828!2d-73.7568813171261!3d40.88051480656798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c27cdfa3115555%3A0xb7ba1175b607432b!2sGa%20Castro%20Construction!5e0!3m2!1ses-419!2sec!4v1705954557382!5m2!1ses-419!2sec";
    const map2 =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193062.79912567828!2d-73.7568813171261!3d40.88051480656798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xac10d21f00928c31%3A0x74003c50fb12aae1!2sGA%20CASTRO%20CONSTRUCTION!5e0!3m2!1ses-419!2sec!4v1705954734281!5m2!1ses-419!2sec";

    const [map, setMap] = useState(map1);
    return (
        <div className="">
            <div className="container flex flex-col items-center font-title ">
                <h3 className="text-5xl sm:text-6xl text-center">
                    We&apos;ve got you <span className="text-[--color2-txt1]">covered!</span>
                </h3>
            </div>
            <svg viewBox="0 0 1440 320" className="w-full fill-[var(--color1-bg)] translate-y-1">
                <path d="M0,96L48,90.7C96,85,192,75,288,85.3C384,96,480,128,576,133.3C672,139,768,117,864,122.7C960,128,1056,160,1152,154.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>{" "}
            </svg>
            <div className="bg-[--color1-bg] ">
                <div className="container px-[--padding]">
                    <div className="flex flex-col gap-10 md:flex-row w-full items-center justify-center">
                        <div className="flex flex-col w-full md:w-1/2 items-center gap-5">
                            <h3 className="text-[--color2-txt] text-4xl text-center font-title max-w-[500px]">
                                Get to know our locations and contacts{" "}
                            </h3>
                            <div className="flex flex-row gap-2 sm:gap-10">
                                <div className="flex flex-col items-center gap-10">
                                    <Option
                                        name="Main office"
                                        description="39 hubbard Av. Stamford 06905"
                                        icon={faLocationDot}
                                        onClick={() => setMap(map1)}
                                        className={
                                            map === map1
                                                ? "border md:border-2 border-solid border-black"
                                                : ""
                                        }
                                    />
                                    <a
                                        className="flex bg-[--color3-bg] h-14 aspect-square items-center justify-center rounded-full shadow-xl"
                                        href="mailto:info@gacastroconstructionllc.com"
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
                                        name="Secondary office"
                                        description="39 hubbard Av. Stamford 06905"
                                        icon={faLocationDot}
                                        onClick={() => setMap(map2)}
                                        icon2={faEnvelope}
                                        className={
                                            map === map2
                                                ? "border md:border-2 border-solid border-black"
                                                : ""
                                        }
                                    />
                                    <a
                                        className="flex bg-[--color3-bg] h-14 items-center justify-center rounded-full shadow-xl px-5 font-title text-center"
                                        href="tel:+1 (800) 838-8186"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        +1 (800) 838-8186
                                    </a>
                                </div>
                            </div>
                        </div>
                        <AnimatedElement className="flex-1 flex max-w-[500px] w-full aspect-[5/4]">
                            <iframe
                                src={map}
                                loading="lazy"
                                className="w-full h-full rounded-xl shadow-3xl"
                            />
                        </AnimatedElement>
                    </div>
                </div>
            </div>
            <svg viewBox="0 0 1440 320" className="w-full fill-[var(--color1-bg)] -translate-y-1">
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
