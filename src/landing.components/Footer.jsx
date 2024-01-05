import { Link } from "react-router-dom";
import socials from "./../mooks/social.json";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import Button from "./Button";
import SocialItem from "./SocialItem";

export default function Footer() {
    return (
        <>
            <footer className="--color2-bg p-[var(--padding)] relative pt-32 mt-2">
                <div className=" container ">
                    <section
                        className="w-full h-auto p-5  pb-12 lg:p-12 absolute left-0 font-bold"
                        style={{ bottom: "calc(100% - 150px)" }}
                    >
                        <div className="container flex flex-col --color3-bg  items-center content-center h-auto p-5 lg:p-12 lg:gap-10 rounded-md shadow-[0_-35px_60px_-15px_rgba(0,0,0,0.2)] lg:flex-row text-center lg:text-left">
                            <div className="flex flex-col  w-full h-full p-5">
                                <h3 className="text-sm lg:text-md">NEED ANY HELP</h3>
                                <p className="text-md lg:text-2xl ">
                                    Let’s book your Appointment with Us now
                                </p>
                            </div>
                            <Button
                                to="/"
                                type="2"
                                style="2"
                                className="flex justify-center items-center gap-1"
                            >
                                <span className="text-nowrap">CONTACT US</span>
                                <ArrowRightIcon className="w-3" />
                            </Button>
                        </div>
                    </section>

                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 ">
                        <div className=" flex flex-col ">
                            <a href="#">
                                <img src="/img/logo.png" />
                            </a>
                            <p className="flex  text-sm opacity-75 --color2-txt">
                                Your trusted roofing and construction experts in Fairfield County.
                                Serving Stamford, Bridgeport, Norwalk, and surrounding areas. © 2023
                                All rights reserved.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2  ">
                            <h3 className="text-xl font-title2 --color2-txt1">Social Networks</h3>
                            <div className="flex flex-col gap-1 text-sm opacity-75 --color2-txt">
                                {/* sm - md - lg - xl - 2xl- 3xl */}
                                {socials.map((social) => (
                                    <SocialItem key={social.id} type="2" {...social} />
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <h3 className="text-xl font-title2 --color2-txt1">Services</h3>
                            <div className="flex flex-col gap-1 text-sm opacity-75 --color2-txt">
                                <Link className="hover:underline" to="/">
                                    Reclamos de Seguro
                                </Link>
                                <Link className="hover:underline" to="/">
                                    Techumbre
                                </Link>
                                <Link className="hover:underline" to="/">
                                    Vía Muerta
                                </Link>
                                <Link className="hover:underline" to="/">
                                    Canal
                                </Link>
                                <Link className="hover:underline" to="/">
                                    Carpintería
                                </Link>
                                <Link className="hover:underline" to="/">
                                    Pintar
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <h3 className="text-xl font-title2 --color2-txt1">Services</h3>
                            <div className="flex flex-col gap-1 text-sm  opacity-75 --color2-txt">
                                <Link className="hover:underline" to="/">
                                    Reclamos de Seguro
                                </Link>
                                <Link className="hover:underline" to="/">
                                    Techumbre
                                </Link>
                                <Link className="hover:underline" to="/">
                                    Vía Muerta
                                </Link>
                                <Link className="hover:underline" to="/">
                                    Canal
                                </Link>
                                <Link className="hover:underline" to="/">
                                    Carpintería
                                </Link>
                                <Link className="hover:underline" to="/">
                                    Pintar
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </footer>
        </>
    );
}
