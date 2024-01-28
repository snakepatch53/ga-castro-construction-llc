import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedElement from "../components/AnimatedElement";
import Button from "../landing.components/Button";
import { Link } from "react-router-dom";
import SectionContact from "../landing.components/SectionContact";
import GallerySection from "../landing.components/GallerySection";
import images from "../mooks/gallery.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import info from "../mooks/info.json";

export default function Gallery() {
    const [filter, setFilter] = useState("all");
    const [filterImages, setFilterImages] = useState([]);
    useEffect(() => {
        if (filter === "all") setFilterImages(null);
        else setFilterImages(images.filter((img) => img.tags.includes(filter)));
    }, [filter]);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <AnimatedElement>
            <section className="relative overflow-hidden p-[--padding]" id="header">
                <div className="absolute inset-0 w-full h-full ">
                    <img src="/image/ciudad.jpg" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-transparent" />

                <div className="relative z-10 container flex flex-col w-full  py-40 items-center gap-20">
                    {/* <h3 className="font-title text-white text-9xl">GALLERY</h3> */}
                    <div className="flex gap-1 sm:gap-5">
                        {info.gallery.title.map((letter, index) => (
                            <Letter
                                key={letter.id}
                                src={letter.src}
                                letter={letter.letter}
                                delay={index / 2}
                            />
                        ))}
                    </div>
                    <div className="flex  w-full justify-center ">
                        <Button
                            href="#photos"
                            style="2"
                            type="3"
                            className="sm:gap-3 px-5 items-center bg-white"
                        >
                            <span className="sm:text-xl font-title">SEE MORE</span>{" "}
                        </Button>
                    </div>
                </div>
            </section>

            <section className=" p-[--padding]">
                <div className="container ">
                    <div className="sticky top-0 z-50 grid grid-cols-3 place-items-center sm:flex sm:flex-row w-full justify-center gap-2 lg:gap-10 bg-white py-4">
                        <ItemButton
                            text="All"
                            value="all"
                            valueSelected={filter}
                            onClick={setFilter}
                        />
                        <ItemButton
                            text="Roofing"
                            value="roofing"
                            valueSelected={filter}
                            onClick={setFilter}
                        />
                        <ItemButton
                            text="Siding"
                            value="siding"
                            valueSelected={filter}
                            onClick={setFilter}
                        />
                        <ItemButton
                            text="Gutter"
                            value="gutter"
                            valueSelected={filter}
                            onClick={setFilter}
                        />
                        <ItemButton
                            text="Carpentry"
                            value="carpentry"
                            valueSelected={filter}
                            onClick={setFilter}
                        />
                        <ItemButton
                            text="Paint"
                            value="paint"
                            valueSelected={filter}
                            onClick={setFilter}
                        />
                        <div className="relative flex flex-col opacity-80">
                            <a
                                href="/gallery#header"
                                className="flex flex-col justify-center items-center w-10 aspect-square rounded-full border border-solid border-white animate-bounce bg-[--color2-bg]"
                            >
                                <FontAwesomeIcon
                                    icon={faChevronUp}
                                    className="text-[--color2-txt]"
                                />
                            </a>
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 flex text-nowrap text-[10px] text-center leading-[0]">
                                GO UP
                            </span>
                        </div>
                    </div>
                    <div className="flex py-9" id="photos">
                        <GallerySection images={filterImages || images} />
                    </div>
                </div>
            </section>

            <section className="p-[--padding]">
                <div className="container flex flex-col items-center">
                    <div className="flex flex-col items-center gap-10">
                        <h1 className="font-title text-3xl sm:text-6xl max-w-[600px] text-center">
                            LEARN MORE ABOUT
                            <span className="text-[--color1-bg]"> OUR PROJECTS</span>
                        </h1>
                        <p className="font-title text-2xl sm:text-4xl  text-center md:px-32 ">
                            Select one of the projects we have worked on to have more information
                            and see the process.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row py-20 gap-5 lg:gap-10">
                        <Item
                            title="Roofing"
                            subtitle="Av.Calle 1 y calle 3"
                            alt=""
                            to=""
                            src="/image/ciudad.jpg"
                        />
                        <Item
                            title="Roofing"
                            subtitle="Av.Calle 1 y calle 3"
                            alt=""
                            to=""
                            src="/image/ciudad.jpg"
                        />
                        <Item
                            title="Roofing"
                            subtitle="Av.Calle 1 y calle 3"
                            alt=""
                            to=""
                            src="/image/ciudad.jpg"
                        />
                    </div>
                </div>
            </section>

            <section className="p-[--padding]">
                <div className="container w-full">
                    <SectionContact />
                </div>
            </section>
        </AnimatedElement>
    );
}

function Letter({ letter, src = "", delay = 0.5 }) {
    return (
        <>
            <motion.h1
                initial={{
                    opacity: 0,
                    y: (window.innerHeight / 2) * -1,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    delay,
                    duration: 1,
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                }}
                className="font-title3 text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] bg-clip-text text-transparent bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
            >
                {letter}
            </motion.h1>
        </>
    );
}

function ItemButton({ text, value, valueSelected, onClick }) {
    const handleClick = () => {
        onClick(value);
    };
    const isSelected = valueSelected === value;
    return (
        <button
            onClick={handleClick}
            className={`
                flex justify-center max-w-32 w-full  p-1 font-bold shadow-[0_3px_15px_2px_var(--color2-bg1)] bg-[--color1-bg] rounded-full  transition-all duration-300 
                hover:text-[--color2-txt] hover:opacity-100 
                ${isSelected ? "text-[--color2-txt]" : "text-[var(--color2-bg)]"} 
                ${isSelected ? "opacity-100" : "opacity-70"} 
            `}
        >
            <span className=" sm:text-xl font-title">{text}</span>
        </button>
    );
}

function Item({ title, subtitle, to, src, alt }) {
    return (
        <Link
            to={to}
            className="group/item relative flex justify-center w-full px-10 pb-20 pt-36 rounded-2xl overflow-hidden font-bold shadow-[0_3px_15px_2px_var(--color2-bg1)] hover:scale-105 transition-all duration-300"
        >
            <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/10 group-hover/item:backdrop-blur-sm" />
            <div className="opacity-0 relative z-10 flex flex-col items-center py-2 px-5 gap-5 rounded-lg text-[--color1-txt1] bg-[#ff9500]/70 group-hover/item:opacity-100 transition-all duration-300">
                <h3 className=" sm:text-3xl font-title opacity-80">{title}</h3>
                <span className="text-center  sm:text-xl font-title opacity-80">{subtitle}</span>
            </div>
        </Link>
    );
}
