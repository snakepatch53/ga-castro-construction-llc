import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import AnimatedElement from "../components/AnimatedElement";
import Button from "../landing.components/Button";
import SectionContact from "../landing.components/SectionContact";
import GallerySection from "../landing.components/GallerySection";
import images from "../mooks/gallery.json";
import works from "../mooks/works.json";
import { InfoContext } from "../context/info";

export default function Gallery() {
    const { info } = useContext(InfoContext);
    const { gallery } = info;
    const [filter, setFilter] = useState("all");
    const [filterImages, setFilterImages] = useState([]);
    useEffect(() => {
        if (filter === "all") setFilterImages(null);
        else setFilterImages(images.filter((img) => img.tags.includes(filter)));
    }, [filter]);
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
                    <div className="flex">
                        {gallery.title.map((letter, index) => (
                            <Letter
                                key={letter.id}
                                src={letter.src}
                                letter={letter.letter}
                                delay={index / 3}
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
                    <div className="grid grid-cols-3 place-items-center sm:flex sm:flex-row w-full justify-center gap-2 lg:gap-10 bg-white py-4">
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
                    </div>
                    <div className="flex flex-col py-9" id="photos">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full py-20 gap-5 lg:gap-10">
                        {works.map((item) => (
                            <Item
                                key={item.id}
                                title={item.title}
                                subtitle={item.address}
                                alt={"work done in " + item.address}
                                src={item.src}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section>
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
            <motion.b
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
                className="font-title3 text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] bg-clip-text text-transparent bg-cover bg-center mx-0 sm:mx-2"
                style={{ backgroundImage: `url(${src})` }}
            >
                {letter}
            </motion.b>
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

function Item({ title, subtitle, src, alt }) {
    return (
        <div className="group/item relative flex justify-center w-full px-10 pb-20 pt-36 rounded-2xl overflow-hidden font-bold shadow-[0_3px_15px_2px_var(--color2-bg1)] hover:scale-105 transition-all duration-300">
            <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/10 group-hover/item:backdrop-blur-sm" />
            <div className="opacity-0 relative z-10 flex flex-col items-center py-2 px-5 gap-5 rounded-lg text-[--color1-txt1] bg-[#ff9500]/70 group-hover/item:opacity-100 transition-all duration-300">
                <h3 className=" sm:text-3xl font-title opacity-80">{title}</h3>
                <span className="text-center  sm:text-xl font-title opacity-80">{subtitle}</span>
            </div>
        </div>
    );
}
