import AnimatedElement from "../components/AnimatedElement";
import MapaItem from "../landing.components/MapaItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHandPointer } from "@fortawesome/free-solid-svg-icons";
import FormConsult from "../landing.components/Formconsult";

export default function ContactUs() {
    return (
        <AnimatedElement>
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 w-full h-full ">
                    <img src="/image/ciudad.jpg" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-transparent" />

                <div className="container p-[--padding] py-52 sm:py-60 flex w-full h-full items-center justify-center ">
                    <div className="relative flex flex-row items-center rounded-tr-3xl rounded-bl-3xl border-solid border-4 gap-2 p-3">
                        <FontAwesomeIcon
                            className="text-2xl sm:text-4xl text-[--color2-txt]"
                            icon={faMagnifyingGlass}
                        />
                        <h1 className=" text-2xl  sm:text-5xl font-title text-[--color2-txt]">
                            Contact us
                        </h1>
                        <FontAwesomeIcon
                            className="absolute -bottom-12 -right-7 text-5xl text-[--color2-txt]"
                            icon={faHandPointer}
                        />
                    </div>
                </div>
            </section>
            <section>
                <div className="container px-[var(--padding)]">
                    <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-20 -translate-y-16 sm:-translate-y-24">
                        <p className="font-title text-4xl text-center lg:text-end lg:pt-28">
                            Bridgeport, Stamford, Norwalk, Danbury, or any other City in Fairfield
                            County
                        </p>
                        <div className="w-full max-w-60 sm:max-w-80">
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
            <section className="pb-20 xl:pb-0">
                <div className="flex container px-[--padding] justify-center sm:-translate-y-10 md:-translate-y-20 xl:-translate-y-36 ">
                    <FormConsult />
                </div>
            </section>
        </AnimatedElement>
    );
}
