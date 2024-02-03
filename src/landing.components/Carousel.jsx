import { useEffect, useRef, useState } from "react";
import "./Carousel.css";
// import ArrowRightIcon from "../icons/ArrowRightIcon";
// import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import Button from "./Button";

export default function Carousel({
    info,
    data,
    autoPlay = true,
    delay = 5000,
    direction = "left",
}) {
    const slideRef = useRef(null);
    const intervalRef = useRef(null);
    const [loadingProgress] = useState(0);

    const handleClickNext = () => {
        let items = slideRef.current.querySelectorAll(".item");
        if (items.length > 0) slideRef.current.appendChild(items[0]);
    };

    const handleClickPrev = () => {
        let items = slideRef.current.querySelectorAll(".item");
        if (items.length > 0) slideRef.current.prepend(items[items.length - 1]);
    };

    const handleClickItem = (index) => {
        return () => {
            let item_selected = slideRef.current.querySelector("#img-slider" + index);
            let item_before = slideRef.current.querySelectorAll(".item")[1];
            if (item_selected) {
                slideRef.current.insertBefore(item_selected, item_before);
            }
        };
    };

    useEffect(() => {
        const intervalFunction = async () => {
            if (direction == "left") handleClickPrev();
            else handleClickNext();
        };
        intervalRef.current = setInterval(intervalFunction, delay);

        return () => {
            if (autoPlay) {
                clearInterval(intervalRef.current);
            }
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="w-full h-full">
            <div className="relative w-full h-full overflow-hidden">
                <div className="carousel-component">
                    <div className="loadbar" style={{ width: `${loadingProgress}%` }} />
                    <div id="slide" ref={slideRef}>
                        {data.map((item, index) => (
                            <div
                                key={item.title}
                                className="item overflow-hidden"
                                style={{ backgroundImage: `url(${item.image})` }}
                                onClick={handleClickItem(index)}
                                id={"img-slider" + index}
                            >
                                <div className="filter-efect relative w-full h-full bg-gradient-to-b from-black to-transparent" />
                                <div className="content">
                                    <div className="name">{item.title}</div>
                                    <div className="des">{item.description}</div>
                                    {/* <Link to={item.to}>See more</Link> */}
                                    <Button href={item.to} className="bg-white" type="3">
                                        See more
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className="buttons">
                            <button id="prev" onClick={handleClickPrev}>
                                <ArrowLeftIcon />
                            </button>
                            <button id="next" onClick={handleClickNext}>
                                <ArrowRightIcon />
                            </button>
                        </div> */}
                </div>
            </div>
            <Popup url={"tel:" + info.phone} />
        </div>
    );
}

function Popup({ url }) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-10 left-5 flex h-20 animate-pulse cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out hover:animate-none"
        >
            <div className="flex items-center h-full text-lg">
                <div className="relative z-10 flex flex-col justify-center items-center h-full aspect-square rounded-full border-8 bg-red-500 text-white font-title">
                    <span className=" text-xl font-link">24/7</span>
                    <span
                        className="text-black"
                        style={{
                            textShadow:
                                "1px 0 0.5px #fff, -1px 0 0.5px #fff, 0 1px 0.5px #fff, 0 -1px 0.5px #fff",
                        }}
                    >
                        CALL
                    </span>
                </div>
                <div className="flex flex-col -translate-x-5 rounded-r-full bg-red-500 border-8">
                    <h4
                        className="py-2 px-4 pl-6 text-white font-title2"
                        style={{
                            textShadow:
                                "1px 0 1px #000, -1px 0 1px #000, 0 1px 1px #000, 0 -1px 1px #000",
                        }}
                    >
                        EMERGENCY
                    </h4>
                </div>
            </div>
        </a>
    );
}
