import { useEffect, useRef, useState } from "react";
import "./Carousel.css";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import Button from "./Button";

export default function Carousel({ data, autoPlay = true, delay = 5000, direction = "left" }) {
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
                    <div className="loadbar" style={{ width: `${loadingProgress}%` }}></div>
                    <div id="slide" ref={slideRef}>
                        {data.map((item) => (
                            <div
                                key={item.title}
                                className="item overflow-hidden"
                                style={{ backgroundImage: `url(/slider/${item.image})` }}
                            >
                                <div className="relative w-full h-full bg-gradient-to-b from-black to-transparent"></div>
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
        </div>
    );
}
