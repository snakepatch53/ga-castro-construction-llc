import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import contacts from "./../mooks/contacts.json";
import socials from "./../mooks/social.json";
import HeaderOption from "./HeaderOption";
import SocialItem from "./SocialItem";
import Button from "./Button";
import BarsIcon from "../icons/BarsIcon";
import { useEffect, useState } from "react";

export default function Header({ className = "", withSliderIn = [] }) {
    const location = useLocation().pathname;
    const [withSlider, setWithSlider] = useState(withSliderIn.includes(location));
    useEffect(() => setWithSlider(withSliderIn.includes(location)), [location]); // eslint-disable-line react-hooks/exhaustive-deps

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);

    const [headerFloat, setHeaderFloat] = useState("");

    const [scrollY, setScrollY] = useState(0);
    window.onscroll = () => {
        const height = window.innerHeight - 70;
        const before_header_height = 35;
        if (withSlider) {
            if (window.scrollY > 1 && window.scrollY < height) setHeaderFloat("semi-float");
            else if (window.scrollY > height) setHeaderFloat("float");
            else setHeaderFloat("");
        } else if (window.scrollY > before_header_height) setHeaderFloat("float-without-slider");
        else setHeaderFloat("");
        const before_header_height_scroll =
            before_header_height - (window.scrollY > 0 ? window.scrollY : 0);
        setScrollY(before_header_height_scroll > 0 ? before_header_height_scroll : 0);
    };
    return (
        <>
            {!withSlider && (
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
            )}
            {/* {!withSlider && <div className="w-full h-[var(--header-height)]" />} */}
            <header
                className={`
                    top-0 w-full bg-transparent text-[var(--color1-txt)] h-[var(--header-height)] z-20 px-4 lg:px-0 
                    header-landing-component 
                    ${headerFloat} ${show ? "open" : ""} 
                    ${className} ${withSlider ? "with-slider" : ""} 
                    ${withSlider ? "fixed" : "sticky"}
                `}
                style={{ "--before-header-height-scroll": scrollY + "px" }}
            >
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
                            landing-header-options
                            flex gap-4 font-oswald 
                            lg:static lg:flex-row lg:w-auto lg:h-full lg:max-w-none lg:bg-transparent lg:text-[var(--color1-txt)] lg:fill-[var(--color1-txt)] lg:p-0 lg:shadow-none lg:transition-none lg:top-0 lg:max-h-full
                            
                            
                            fixed flex-col w-full max-w-60
                            bg-[var(--color2-bg)] shadow-2xl p-10 text-[var(--color2-txt)] fill-[var(--color2-txt)]
                            ${!show ? "-right-full" : "right-0"} 
                            transition-right duration-200 ease-in-out
                        `}
                    >
                        <HeaderOption name="Home" to="/" />
                        <HeaderOption name="Services" to="/services">
                            <HeaderOption name="Insurance Claims" to="/services/insurance-claims" />
                            <HeaderOption name="Roofing" to="/services/roofing" />
                            <HeaderOption name="Death way" to="/services/death-way" />
                            <HeaderOption name="Canals" to="/services/canals" />
                            <HeaderOption name="Carpentry" to="/services/carpentry" />
                            <HeaderOption name="Paint" to="/services/paint" />
                        </HeaderOption>
                        <HeaderOption name="Financing" to="/financing" />
                        <HeaderOption name="Services Areas" to="/service-areas" />
                        <HeaderOption name="Gallery" to="/gallery" />
                        <HeaderOption name="About Us" to="/about-us" />
                        <HeaderOption name="Contact Us" to="/contact-us" />
                    </div>

                    <Button
                        text="Free Estimate"
                        className="hidden sm:flex ml-auto mr-4 lg:ml-0 lg:mr-0"
                        style="2"
                        type="2"
                    />

                    <button
                        onClick={handleShow}
                        className="button-menu h-full max-h-[35px] aspect-square cursor-pointer opacity-80 hover:opacity-100 transition-background duration-150 flex items-center justify-center lg:hidden hover:bg-gray-200/20 p-2 rounded-sm"
                    >
                        <BarsIcon />
                    </button>
                </div>
            </header>
        </>
    );
}
