import "./Slider.css";
import { useEffect, useRef, useState } from "react";

import slider_list from "./../mooks/slider.json";

export default function Slider() {
    const [slider, setSlider] = useState(slider_list);

    useEffect(() => {
        // poner el primer elemento como seleccionado
        const xd = slider.map((img, index) => ({
            ...img,
            selected: index === 0 ? true : false,
        }));
        setSlider(xd);
    }, []);

    const [info, setInfo] = useState({
        title: slider_list[0].title,
        description: slider_list[0].description,
    });

    const carouselRef = useRef(null);

    const handleSelect = (id) => {
        const img = slider_list.find((img) => img.id === id);
        setInfo({
            title: img.title,
            description: img.description,
        });

        const index = slider.findIndex((img) => img.id === id) - 1;

        const $carousel = carouselRef.current.querySelector("#carousel");
        const $img = $carousel.querySelector(".img-" + id);
        const img_width = $img.getBoundingClientRect().width;
        // index--;
        const marginLeft = img_width * index + index * 40;
        $carousel.style.marginLeft = "-" + marginLeft + "px";

        setTimeout(() => {
            // poner el primer elemento al final del array
            const slider_copy = [...slider];
            const first = slider_copy.shift();
            slider_copy.push(first);
            setSlider(
                slider_copy.map((img, index) => ({
                    ...img,
                    selected: index === 0 ? true : false,
                }))
            );
            $carousel.style.transition = "none";
            $carousel.style.marginLeft = 0;
            setTimeout(() => {
                $carousel.style.transition = "all 0.3s ease";
            }, 100);
        }, 500);
    };

    return (
        <div className="landing-slider-component">
            <div className="slider-container">
                <div className="selected">
                    <h3>{info.title}</h3>
                    <p>{info.description}</p>
                </div>

                <div className="images" ref={carouselRef}>
                    <div className="carousel" id="carousel">
                        {slider.map(({ id, title, image, selected }) => (
                            <div
                                key={id}
                                className={
                                    "image " + (selected ? "selected-img" : "") + " img-" + id
                                }
                                onClick={() => handleSelect(id)}
                            >
                                <img
                                    src={"/slider/" + image}
                                    alt={title}
                                    className="image-hidden"
                                />
                                <img src={"/slider/" + image} alt={title} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
