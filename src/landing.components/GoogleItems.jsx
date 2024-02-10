import { faMapMarkerAlt, faStar } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import reviews from "../mooks/reviews.json";
import { formatDistanceToNow } from "date-fns";
import { clsx } from "clsx";

export default function GoogleItems({ classNameWrapper }) {
    return (
        <div className={clsx("flex flex-col", classNameWrapper)}>
            <div className="container flex flex-col">
                {/* <iframe
                    src="https://3355e6ae747c4911ba0c97c856b4d52f.elf.site"
                    className="w-full h-[350px] bg-white p-10 rounded-3xl"
                ></iframe> */}
                <div className="swipper-google-reviews-component-container">
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        navigation={true}
                        autoplay={{ delay: 5000 }}
                        speed={1500}
                        slidesPerView={3}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            300: { slidesPerView: 1 },
                            700: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        spaceBetween={20}
                        loop={true}
                        grabCursor={true}
                        className="grid"
                    >
                        {reviews.map((item) => (
                            <SwiperSlide key={item.id}>
                                <Item {...item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <Button
                    href="https://www.google.com/maps/place//data=!4m3!3m2!1s0xac10d21f00928c31:0x74003c50fb12aae1!12e1?source=g.page.m.kd._&laa=lu-desktop-review-solicitation"
                    target="_blank"
                    rel="noreferrer"
                    style="3"
                    type="3"
                    className="bg-[var(--color3-bg)] text-[var(--color3-txt)] py-4 mt-10 mb-5 mx-auto items-center gap-2 border border-red-500"
                >
                    <span>Write a review</span>{" "}
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-500 text-lg" />
                </Button>
            </div>
        </div>
    );
}

function Item({ ...item }) {
    const pastTime = formatDistanceToNow(new Date(item.date));
    const stars = Array.from({ length: item.stars }, (_, i) => i);
    const unStars = Array.from({ length: 5 - item.stars }, (_, i) => i);

    return (
        <div className="flex flex-col gap-2 bg-white p-5 rounded-xl h-full">
            <div className="flex items-center gap-5">
                <img
                    className="h-10 aspect-square rounded-full object-cover bg-transparent"
                    src={item.photo}
                    alt={"Foto of user " + item.name}
                />
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-[2px]">
                        <h5 className="font-content font-bold text-base leading-4">{item.name}</h5>
                        <img
                            className="w-3 aspect-square object-contain"
                            src="/icon/verificate.png"
                            alt="Verification icon"
                        />
                    </div>
                    <span className="font-content text-xs leading-3 opacity-80">{pastTime}</span>
                </div>
            </div>
            <div className="flex gap-[2px]">
                {stars.map((star) => (
                    <FontAwesomeIcon
                        key={star}
                        icon={faStar}
                        className={"text-sm text-[#fcbf02]"}
                    />
                ))}
                {unStars.map((star) => (
                    <FontAwesomeIcon
                        key={star}
                        icon={faStar}
                        className="text-gray-300/70 text-sm"
                    />
                ))}
            </div>
            <div>
                <p className="font-content overflow-hidden max-h-24 opacity-90">
                    {item.description}
                </p>
                <a
                    className="font-content text-[0.8rem] opacity-80 hover:opacity-100 hover:underline"
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                >
                    Read more
                </a>
            </div>
            <img
                className="h-7 object-contain mr-auto mt-auto"
                src="/icon/google.png"
                alt="Logo de Google"
            />
        </div>
    );
}
