import AnimatedElement from "../components/AnimatedElement";
import MapaItem from "../landing.components/MapaItem";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHandPointer, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function ContactUs() {
    useEffect(() => {
        // window.scrollTo(0, 0);
    }, []);
    return (
        <AnimatedElement>
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 w-full h-full ">
                    <img src="/image/carpentry-1.jpg" className="w-full h-full object-cover" />
                </div>
                <div className="container p-[--padding] py-52 flex w-full h-full items-center justify-center ">
                    <div className="relative flex flex-row items-center rounded-tr-3xl rounded-bl-3xl border-solid border-4 gap-2 p-3">
                        <FontAwesomeIcon
                            className="text-3xl text-[--color2-txt]"
                            icon={faMagnifyingGlass}
                        />
                        <h1 className="text-5xl font-title text-[--color2-txt]">Contact us</h1>
                        <FontAwesomeIcon
                            className=" absolute -bottom-12 -right-7 text-5xl text-[--color2-txt] "
                            icon={faHandPointer}
                        />
                    </div>
                </div>
            </section>
            <section>
                <div className="container px-[var(--padding)]">
                    <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-20 -translate-y-24">
                        <p className="font-title text-4xl text-center lg:text-end lg:pt-28">
                            Bridgeport, Stamford, Norwalk, Danbury, or any other City in Fairfield
                            County
                        </p>
                        <div className="w-full max-w-80">
                            <img
                                src="/icon/map.png"
                                alt="Icono de mapa de Google Maps"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <MapaItem />
                </div>
            </section>
            <section>
                <div className="flex container p-[--padding] justify-center">
                    <form className=" flex flex-col w-full max-w-[900px] h-full p-5 md:p-10 lg:px-20 py-10 font-title2 items-center bg-[#cdd1dd]  gap-5 rounded-3xl shadow-2xl">
                        <h3 className="font-title text-4xl mb-5 text-center">
                            Leave us your concerns
                        </h3>
                        <div className="flex flex-col lg:flex-row w-full gap-5">
                            <Input placeholder="First name" />
                            <Input placeholder="Last name" />
                        </div>
                        <Input placeholder="Email address" />
                        <Input placeholder="Phone number" />
                        <Input placeholder="Address home" />
                        <Input placeholder="Message" />
                        <div className="flex flex-col gap-3">
                            <span className="w-full text-end text-xl">
                                <span className="text-red-600">*</span> All fields are required
                            </span>
                            <label htmlFor="terms" className="flex flex-row gap-2">
                                <input id="terms" type="checkbox" />
                                <p>
                                    I agree that GA Castro Constructions LLC contact me by phone,
                                    text messages or emails. Reply STOP to stop receiving these
                                    messages.
                                </p>
                            </label>
                            <div className="flex  w-full justify-center ">
                                <button className="flex bg-white px-5 py-3 gap-2  items-center rounded-full ">
                                    <span className="font-bold text-xl">Send consult</span>
                                    <FontAwesomeIcon icon={faPaperPlane} className="text-2xl" />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </AnimatedElement>
    );
}

function Input({ placeholder }) {
    return (
        <div className="flex-1 w-full">
            <input
                type="text"
                placeholder={placeholder}
                className="w-full p-5 rounded-full text-xl"
            />
        </div>
    );
}
