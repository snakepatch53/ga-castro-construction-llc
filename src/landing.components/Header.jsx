import { faBars, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header({ withSliderIn = [] }) {
    const closeElement = useRef(null);
    const { pathname } = useLocation();
    const isSliderIn = withSliderIn.find((path) => path.includes(pathname)) ? true : false;
    // console.log(pathname);

    const [isOpen, setIsOpen] = useState(false);
    // const [isTop, setIsTop] = useState(true);
    // useEffect(() => {
    //     window.onscroll = (e) => {
    //         if (e.target.scrollingElement.scrollTop > 0) setIsTop(false);
    //         else setIsTop(true);
    //     };
    // }, []);
    if (closeElement.current) {
        closeElement.current.addEventListener("click", () => setIsOpen(false));
    }
    // window.onKeyDown = (e) => (e.key == "Escape" ? setIsOpen(false) : null);
    return (
        <>
            <div
                className={
                    "top-0 z-50 pt-3 w-full p-[var(--padding)] " + (isSliderIn ? "fixed" : "sticky")
                }
            >
                <div className="container flex justify-between gap-1 sm:gap-5">
                    <Link to="/" className="h-full">
                        <img
                            src="/img/logo.png"
                            alt="Logo de GA Castro Constructions LLC"
                            className="w-full h-full object-contain"
                        />
                    </Link>
                    <div
                        ref={closeElement}
                        className={`
                            fixed left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-screen rounded-none flex-col bg-[#050504]/90 backdrop-blur-sm
                            flex gap-5 justify-center items-center 
                            lg:px-5 lg:static lg:w-auto lg:h-auto lg:flex-row lg:rounded-full lg:overflow-visible lg:left-0 lg:top-0 lg:translate-y-0 lg:translate-x-0 lg:max-h-none lg:backdrop-blur-0 
                            ${/*isTop && isSliderIn ? "bg-transparent" : "lg:bg-[#050504]" */ ""} 
                            lg:bg-[#050504] 
                            transition-all duration-200 overflow-hidden lg:backdrop-blur-0 
                            ${isOpen ? "max-h-screen" : "max-h-0"} 
                        `}
                    >
                        <Option name="Home" to="/" />
                        <Option name="Insurance Claims" to="/services/insurance-claims" />
                        <Option name="Services" to="/services">
                            <Option name="Roofing" to="/services/roofing" />
                            <Option name="Siding" to="/services/siding" />
                            <Option name="Gutter" to="/services/gutter" />
                            <Option name="Carpentry" to="/services/carpentry" />
                            <Option name="Paint" to="/services/paint" />
                        </Option>
                        <Option name="Financing" to="/financing" />
                        <Option name="Gallery" to="/gallery" />
                        <Option name="About Us" to="/about-us" />
                        <Option name="Contact Us" to="/contact-us" />
                    </div>
                    <div className="flex justify-center items-center">
                        <Link
                            to="/contact-us"
                            className="flex justify-center items-center px-4 py-2 md:py-3 rounded-full font-title2 bg-[#ff8609] text-white md:text-xl text-nowrap text-ellipsis"
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
                    isLocation ? "opacity-100 bg-[#ef8f17]" : "opacity-90"
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
                        lg:absolute lg:top-[calc(100%+5px)] lg:left-[50%] lg:translate-x-[-50%] lg:bg-[#050504] lg:text-[var(--color2-txt1)]  lg:p-0 lg:rounded-3xl lg:shadow-lg lg:max-h-0 lg:overflow-hidden lg:opacity-0
                        lg:transition-all lg:group-hover:max-h-[300px] lg:group-hover:opacity-100 lg:duration-500 lg:group-hover:p-4
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
