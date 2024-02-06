import { faBars, faMinus, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import FormConsult from "./Formconsult";

export default function Header({ withSliderIn = [] }) {
    const closeElement = useRef(null);
    const { pathname } = useLocation();
    const isSliderIn = withSliderIn.find((path) => path.includes(pathname)) ? true : false;
    // console.log(pathname);

    const [isOpen, setIsOpen] = useState(false);
    const [isVisibleModalFormConsult, setIsVisibleModalFormConsult] = useState(false);
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
                    "top-0 z-50 pt-3 w-full px-[var(--padding)] " +
                    (isSliderIn ? "fixed" : "sticky")
                }
            >
                <div className="container flex justify-between items-center gap-1 sm:gap-5">
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
                            flex gap-4 xl:gap-0 justify-center items-center  xl:py-3
                            xl:px-5 xl:static xl:w-auto xl:h-auto xl:flex-row xl:rounded-full xl:overflow-visible xl:left-0 xl:top-0 xl:translate-y-0 xl:translate-x-0 xl:max-h-none xl:backdrop-blur-0 
                            ${/*isTop && isSliderIn ? "bg-transparent" : "xl:bg-[#050504]" */ ""} 
                            xl:bg-[#050504] 
                            transition-all duration-200 overflow-hidden xl:backdrop-blur-0 
                            ${isOpen ? "max-h-screen" : "max-h-0"} 
                        `}
                    >
                        <Option name="Home" to="/" />
                        <Option name="Improvement" to="/services">
                            <Option name="Roofing" to="/services/roofing" />
                            <Option name="Siding" to="/services/siding" />
                            <Option name="Gutter" to="/services/gutter" />
                            <Option name="Carpentry" to="/services/carpentry" />
                            <Option name="Painting" to="/services/paint" />
                            <Option name="Remodelation" to="/services/remodelation" />
                        </Option>
                        {/* <Option name="Insurance Claims" to="/services/insurance-claims"> */}
                        <Option name="Restoration" to="/services/restoration">
                            <Option name="Wind Damage" to="/services/restoration/wind-damage" />
                            <Option name="Water Damage" to="/services/restoration/water-damage" />
                            <Option name="Tree Damage" to="/services/restoration/tree-damage" />
                        </Option>
                        {/* <Option name="Services Areas" to="/services-areas" /> */}

                        <Option name="Financing" to="/financing" />
                        <Option name="Gallery" to="/gallery" />
                        <Option name="About Us" to="/about-us" />
                        <Option name="Contact Us" to="/contact-us" />
                    </div>
                    <div className="flex justify-center items-center">
                        <button
                            onClick={() => setIsVisibleModalFormConsult(true)}
                            className="flex justify-center items-center px-4 py-2 md:py-3 rounded-full font-title2 bg-[#ff8609] text-white md:text-xl text-nowrap text-ellipsis"
                        >
                            Free Estimate
                        </button>
                    </div>
                    <div className="flex xl:hidden justify-center items-center">
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
            <ModalFormConsult
                isVisible={isVisibleModalFormConsult}
                onClose={() => setIsVisibleModalFormConsult(false)}
            />
        </>
    );
}

function Option({ children, name, to, ...props }) {
    const { pathname } = useLocation();
    const isLocation = pathname == to ? true : false;

    return (
        <div
            className={`
                relative xl:flex
                xl:flex-row xl:h-full 
                group items-center font-title2 text-white
            `}
            {...props}
        >
            <Link
                to={to}
                className={`flex gap-1 text-md transition-all px-2 rounded-full duration-200 hover:opacity-100 text-nowrap uppercase justify-center items-center ${
                    isLocation ? "opacity-100 bg-[#ef8f17]" : "opacity-90"
                }`}
            >
                {name}
                {children && (
                    <div className={`relative w-[0.7rem] hidden xl:block`}>
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
                        xl:absolute xl:top-[calc(100%+15px)] xl:left-[50%] xl:translate-x-[-50%] xl:bg-[#050504] xl:text-[var(--color2-txt1)]  xl:p-0 xl:rounded-3xl xl:shadow-lg xl:max-h-0 xl:overflow-hidden xl:opacity-0
                        xl:transition-all xl:group-hover:max-h-[300px] xl:group-hover:opacity-100 xl:duration-500 xl:group-hover:p-4
                        xl:mt-0 xl:gap-2
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

function ModalFormConsult({ isVisible = false, onClose = null }) {
    const _window = useRef();
    if (_window.current) {
        _window.current.onclick = (e) => {
            if (e.target === _window.current) onClose();
        };
    }
    window.onkeydown = (e) => (e.key === "Escape" ? onClose() : null);
    return (
        <div className={"fixed inset-0 z-50 px-[--padding] " + (isVisible ? "flex" : "hidden")}>
            <div
                ref={_window}
                className="fixed inset-0 bg-black/20 backdrop-blur-md cursor-pointer"
            />
            <button
                className="fixed top-3 right-3 z-20 w-10 aspect-square rounded-full bg-white/50"
                onClick={onClose}
            >
                <FontAwesomeIcon icon={faTimes} className=" text-black" />
            </button>
            <div className="z-10 m-auto flex flex-col justify-center items-center">
                <FormConsult className="h-screen max-h-[800px] overflow-y-auto" />
                <p
                    className="text-center text-black text-lg font-title font-bold"
                    style={{
                        textShadow:
                            "1px 0 0 rgba(255, 255, 255, 0.5), -1px 0 0 rgba(255, 255, 255, 0.5), 0 1px 0 rgba(255, 255, 255, 0.5), 0 -1px 0 rgba(255, 255, 255, 0.5)",
                    }}
                >
                    Press <b>ESC</b> or <b>click outside</b> the image to close
                </p>
            </div>
        </div>
    );
}
