import styled from "styled-components";
import images from "../mooks/gallery.json";
import { useEffect, useRef } from "react";

export default function CardsCarousel() {
    const carouselList = useRef(null);

    const handleClick = (event, elems) => {
        var newActive = event.target;
        update(newActive, elems);
    };

    const update = function (newActive, elems) {
        const newActivePos = newActive.dataset.pos;
        if (!newActivePos) return;
        elems.forEach((item) => {
            var itemPos = item.dataset.pos;
            item.dataset.pos = getPos(itemPos, newActivePos, elems);
        });
    };

    const getPos = function (current, active, elems) {
        const diff = current - active;
        if (diff > 2) {
            return diff - elems.length + 2;
        } else if (diff < -2) {
            return elems.length - 2 + diff;
        }
        return diff;
    };

    const autoPlay = () => {
        const elems = Array.from(document.querySelectorAll(".carousel__item"));
        const active = elems.find((elem) => elem.dataset.pos == 0);
        const next = active.nextElementSibling || carouselList.current.firstElementChild;

        update(next, elems);
    };

    useEffect(() => {
        const elems = Array.from(document.querySelectorAll(".carousel__item"));
        carouselList.current.addEventListener("click", (e) => handleClick(e, elems));

        const interval = setInterval(autoPlay, 5000);

        return () => {
            carouselList.current.removeEventListener("click", handleClick); // eslint-disable-line
            clearInterval(interval);
        }; // eslint-disable-line
    }, []); // eslint-disable-line

    return (
        <Div className="w-full aspect-[4/2]">
            <ul ref={carouselList} className="carousel__list">
                {images.map((image, index) => (
                    <li className="carousel__item" data-pos={index - 2} key={image.id}>
                        <img
                            className="w-full h-full object-cover rounded-lg select-none"
                            src={image.src}
                            alt={image.alt}
                        />
                    </li>
                ))}
            </ul>
        </Div>
    );
}

const Div = styled.div`
    display: flex;
    align-items: center;

    & .carousel__list {
        display: flex;
        list-style: none;
        position: relative;
        width: 100%;
        height: 100%;
        justify-content: center;
        perspective: 100%;
    }

    & .carousel__item {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 0px;
        width: calc(100% - (100px * 4));
        height: 100%;
        border-radius: 12px;
        box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.5);
        position: absolute;
        transition: all 0.3s ease-in;
        opacity: 0;
        cursor: pointer;

        &:nth-child(1) {
            background: linear-gradient(45deg, #2d35eb 0%, #904ed4 100%);
        }
        &:nth-child(2) {
            background: linear-gradient(45deg, #2d35eb 0%, #fdbb2d 100%);
        }
        &:nth-child(3) {
            background: linear-gradient(45deg, #2d35eb 0%, #22c1c3 100%);
        }
        &:nth-child(4) {
            background: linear-gradient(45deg, #fdbb2d 0%, #904ed4 100%);
        }
        &:nth-child(5) {
            background: linear-gradient(45deg, #22c1c3 0%, #904ed4 100%);
        }

        &[data-pos="0"] {
            z-index: 5;
            opacity: 1;
            cursor: default;
        }

        &[data-pos="-1"],
        &[data-pos="1"] {
            opacity: 0.7;
            filter: blur(1px) grayscale(10%);
        }

        &[data-pos="-1"] {
            transform: translateX(-100px) scale(0.9);
            z-index: 4;
        }

        &[data-pos="1"] {
            transform: translateX(100px) scale(0.9);
            z-index: 4;
        }

        &[data-pos="-2"],
        &[data-pos="2"] {
            opacity: 0.4;
            filter: blur(3px) grayscale(20%);
        }

        &[data-pos="-2"] {
            transform: translateX(-200px) scale(0.8);
            z-index: 3;
        }

        &[data-pos="2"] {
            transform: translateX(200px) scale(0.8);
            z-index: 3;
        }
    }
`;
