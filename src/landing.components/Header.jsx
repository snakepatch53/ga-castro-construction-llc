import { faBars, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header({ withSliderIn = [] }) {
    const { pathname } = useLocation();
    const isSliderIn = withSliderIn.includes(pathname) ? true : false;

    const [isOpen, setIsOpen] = useState(false);
    // const [isTop, setIsTop] = useState(true);
    // useEffect(() => {
    //     window.onscroll = (e) => {
    //         if (e.target.scrollingElement.scrollTop > 0) setIsTop(false);
    //         else setIsTop(true);
    //     };
    // }, []);
    return (
        <>
            <div
                className={
                    "top-0 z-50 pt-3 w-full p-[var(--padding)] " + (isSliderIn ? "fixed" : "sticky")
                }
            >
                <div className="container flex justify-between gap-5">
                    <div className="h-full">
                        <img
                            src="/img/logo.png"
                            alt="Logo de GA Castro Constructions LLC"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div
                        className={`
                            fixed left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-screen rounded-none flex-col bg-[#050504]/90 backdrop-blur-sm
                            flex gap-5 justify-center items-center 
                            lg:px-5 lg:static lg:w-auto lg:h-auto lg:flex-row lg:rounded-full lg:overflow-visible lg:left-0 lg:top-0 lg:translate-y-0 lg:translate-x-0 lg:max-h-none lg:backdrop-blur-0 lg:bg-transparent
                            ${/*isTop && isSliderIn ? "bg-transparent" : "lg:bg-[#050504]" */ ""} 
                            lg:bg-[#050504]
                            transition-all duration-200 overflow-hidden 
                            ${isOpen ? "max-h-screen" : "max-h-0"}
                        `}
                    >
                        <Option name="Home" to="/" />
                        <Option name="Services" to="/services">
                            <Option name="Insurance Claims" to="/services/insurance-claims" />
                            <Option name="Roofing" to="/services/roofing" />
                            <Option name="Siding" to="/services/siding" />
                            <Option name="Gutter" to="/services/gutter" />
                            <Option name="Carpentry" to="/services/carpentry" />
                            <Option name="Paint" to="/services/paint" />
                        </Option>
                        <Option name="Gallery" to="/gallery" />
                        <Option name="About Us" to="/aboutus" />
                        <Option name="Contact Us" to="/contactus" />
                    </div>
                    <div className="flex justify-center items-center">
                        <Link
                            to="/contactus"
                            className="flex justify-center items-center px-4 py-2 rounded-full font-title2 bg-[#ff8609] text-white"
                        >
                            Free Estimate
                        </Link>
                    </div>
                    <div className="flex lg:hidden justify-center items-center">
                        <button
                            className=" flex justify-center items-center h-10 p-1 cursor-pointer bg-black/50 aspect-square rounded-lg"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <FontAwesomeIcon
                                icon={faBars}
                                className="relative z-10 text-white text-lg"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

function Option({ children, name, to, ...props }) {
    const { pathname } = useLocation();
    const isLocation = pathname == to ? true : false;

    return (
        <div
            className={`
                relative lg:flex
                lg:flex-row lg:h-full 
                group items-center font-title2 text-white
            `}
            {...props}
        >
            <Link
                to={to}
                className={`flex gap-1 text-md transition-all px-3 rounded-full duration-200 hover:opacity-100 text-nowrap justify-center items-center ${
                    isLocation ? "opacity-100 bg-[#ef8f17]" : "opacity-60"
                }`}
            >
                {name}
                {children && (
                    <div className={`relative w-[0.7rem] hidden lg:block`}>
                        <FontAwesomeIcon
                            icon={faPlus}
                            className="w-full h-full opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                        />
                        <FontAwesomeIcon
                            icon={faMinus}
                            className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                    </div>
                )}
            </Link>
            {children && (
                <div
                    className={`
                        lg:absolute lg:top-[calc(100%+5px)] lg:left-[50%] lg:translate-x-[-50%] lg:bg-[#050504] lg:text-[var(--color2-txt1)]  lg:p-4 lg:rounded-3xl lg:shadow-lg lg:max-h-0 
                        lg:group-hover:max-h-[300px] lg:transition-all lg:opacity-0 lg:group-hover:opacity-100 lg:duration-500
                        lg:mt-0 lg:gap-2
                        transition-none
                        justify-center items-center flex flex-col gap-3 mt-2
                    `}
                >
                    {children}
                </div>
            )}
        </div>
    );
}
