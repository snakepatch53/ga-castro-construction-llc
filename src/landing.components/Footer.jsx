import { Link } from "react-router-dom";
import socials from "./../mooks/social.json";

export default function Footer() {
    return (
        <>
            <footer className="--color2-bg p-[var(--padding)] ">
                <div className=" container ">
                    <section className=""></section>
                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 ">
                        <div className="flex flex-col ">
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
                                {socials.map(({ id, url, name, icon, color }) => (
                                    <a
                                        key={id}
                                        href={url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex gap-1 hover:underline"
                                    >
                                        <div className="h-full max-h-4 aspect-square flex mt-1">
                                            <div
                                                dangerouslySetInnerHTML={{ __html: icon }}
                                                className="icon"
                                                style={{ fill: color }}
                                            />
                                        </div>
                                        <span>{name}</span>
                                    </a>
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
