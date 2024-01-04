import { Link } from "react-router-dom";
import contacts from "./../mooks/contacts.json";
import socials from "./../mooks/social.json";
import HeaderOption from "./HeaderOption";
import SocialItem from "./SocialItem";
import Button from "./Button";
import BarsIcon from "../icons/BarsIcon";
import { useState } from "react";

export default function Header() {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);

    const [headerFloat, setHeaderFloat] = useState("");
    window.onscroll = () => setHeaderFloat(window.scrollY > 30 ? "float" : "");
    return (
        <>
            <div className="bg-[var(--color2-bg)] text-[var(--color2-txt1)] fill-[var(--color2-txt1)] flex items-center h-[var(--before-header-height)]">
                <div className="flex h-full flex-1">
                    <div className="bg-[var(--color1-bg)] flex-1 h-full"></div>
                </div>
                <div className="container flex h-full">
                    <div className="bg-gradient-to-tr from-[var(--color1-bg)] to-[var(color2-bg)] from-50% to-50% h-full aspect-square"></div>
                    <div className="flex gap-2 justify-between h-full w-full py-2">
                        <div className="gap-2 hidden sm:flex">
                            {contacts.map((contact) => (
                                <SocialItem key={contact.id} {...contact} />
                            ))}
                        </div>
                        <div className="flex gap-2 mx-auto sm:mx-0">
                            {socials.map(({ id, url, icon }) => (
                                <SocialItem key={id} url={url} icon={icon} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex-1 h-full">
                    <div className="h-full aspect-square"></div>
                </div>
            </div>

            <header className="bg-[var(--color1-bg)] text-[var(--color1-txt)] h-[var(--header-height)] sticky top-0 z-10 px-4 lg:px-0">
                <div className="container h-full py-0 flex gap-1 items-center justify-between">
                    <Link to="/" className="h-full aspect-[2/1] ">
                        <img
                            src="img/logo.png"
                            alt="Logo of GA Castro Construction"
                            className="h-full w-full object-contain"
                        />
                    </Link>
                    <div
                        className={`
                            flex gap-4 font-oswald 
                            lg:static lg:flex-row lg:w-auto lg:h-full lg:max-w-none lg:bg-transparent lg:text-[var(--color1-txt)] lg:fill-[var(--color1-txt)] lg:p-0 lg:shadow-none lg:transition-none lg:top-0 lg:max-h-full
                            
                            
                            fixed flex-col w-full max-w-60
                            bg-[var(--color2-bg)] shadow-2xl p-10 text-[var(--color2-txt)] fill-[var(--color2-txt)]
                            ${!show ? "-right-full" : "right-0"} 
                            transition-right duration-200 ease-in-out
                            
                            header-landing-component ${headerFloat}
                        `}
                    >
                        <HeaderOption name="Home" to="/" />
                        <HeaderOption name="Services" to="/services">
                            <HeaderOption name="Reclamos de Seguro" to="/reclamos-de-seguro" />
                            <HeaderOption name="Techumbre" to="/techumbre" />
                            <HeaderOption name="Vía Muerta" to="/via-muerta" />
                            <HeaderOption name="Canal" to="/canal" />
                            <HeaderOption name="Carpintería" to="/carpintería" />
                            <HeaderOption name="Pintar" to="/pintar" />
                        </HeaderOption>
                        <HeaderOption name="Financiación" to="/financiacion" />
                        <HeaderOption name="Areas de Servicios" to="/areas-de-servicios" />
                        <HeaderOption name="Galería" to="/galeria" />
                        <HeaderOption name="Sobre Nosotros" to="/sobre-nosotros" />
                        <HeaderOption name="Contáctenos" to="/contactenos" />
                    </div>

                    <Button
                        text="Consigue una Cotización"
                        className="hidden sm:flex ml-auto mr-4 lg:ml-0 lg:mr-0"
                        style="2"
                    />

                    <button
                        onClick={handleShow}
                        className="h-full max-h-8 aspect-square cursor-pointer opacity-80 hover:opacity-100 transition-background duration-150 flex items-center justify-center lg:hidden hover:bg-gray-200/20 p-2 rounded-sm"
                    >
                        <BarsIcon className="fill-[var(--color1-txt)]" />
                    </button>
                </div>
            </header>
        </>
    );
}
