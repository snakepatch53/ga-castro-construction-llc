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
            <div className="container flex flex-col items-center font-title">
                <h3 className="text-6xl ">
                    We&apos;ve got you <span className="text-[--color2-txt1]">covered!</span>
                </h3>
            </div>
            <svg viewBox="0 0 1440 320" className="w-full fill-[var(--color1-bg)] translate-y-1">
                <path d="M0,192L34.3,202.7C68.6,213,137,235,206,234.7C274.3,235,343,213,411,181.3C480,149,549,107,617,106.7C685.7,107,754,149,823,160C891.4,171,960,149,1029,128C1097.1,107,1166,85,1234,69.3C1302.9,53,1371,43,1406,37.3L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
            </svg>
            <div className="bg-[--color1-bg]">
                <div className="container p-[--padding]">
                    <div className="flex flex-col gap-10 md:flex-row w-full items-center justify-center">
                        <div className="flex flex-col w-full md:w-1/2 items-center gap-5">
                            <h3 className="text-[--color2-txt] text-3xl text-center font-title">
                                Get to know our locations and contacts{" "}
                            </h3>
                            <div className="flex flex-row gap-10">
                                <div className="flex flex-col items-center gap-10">
                                    <Option
                                        name="Main office"
                                        description="39 hubbard Av. Stamford 06905"
                                        icon={faLocationDot}
                                        onClick={() => setMap(map1)}
                                        className={
                                            map === map1 ? "border border-solid border-black" : ""
                                        }
                                    />
                                    <a
                                        className="flex bg-[--color3-bg] h-14 aspect-square items-center justify-center rounded-full shadow-xl"
                                        href="mailto:g.a.castroconstructionllc@gmail.com"
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
                                            map === map2 ? "border border-solid border-black" : ""
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
                <path d="M0,320L34.3,304C68.6,288,137,256,206,234.7C274.3,213,343,203,411,170.7C480,139,549,85,617,74.7C685.7,64,754,96,823,122.7C891.4,149,960,171,1029,154.7C1097.1,139,1166,85,1234,80C1302.9,75,1371,117,1406,138.7L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z" />
            </svg>
        </div>
    );
}

function Option({ name, description, icon, className = "", ...props }) {
    return (
        <div className="flex flex-col justify-center items-center gap-10">
            <button
                className={
                    "flex flex-col max-w-36 py-2 gap-3 items-center bg-[--color3-bg] rounded-md " +
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
