import AnimatedElement from "../components/AnimatedElement";
import teams from "./../mooks/team.json";
import TeamItemCard from "../landing.components/TeamItemCard";
import { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function AboutUs() {
    useEffect(() => {
        // window.scrollTo(0, 0);
    }, []);
    return (
        <AnimatedElement>
            <div className="px-5 sm:px-10 mt-10">
                <div className="container flex justify-center gap-5">
                    <h2 className="text-4xl text-center font-title2">Our Team</h2>
                </div>
                <div className="container flex justify-center gap-5">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={4}
                        modules={[Autoplay, Pagination]}
                        autoplay={{ delay: 5000 }}
                        speed={1500}
                        // slides direction autoplay loop
                        loop={true}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            320: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 },
                        }}
                        pagination={{
                            type: "",
                            clickable: true,
                        }}
                        grabCursor={true}
                        className="pt-14 pb-10"
                    >
                        {teams.map((team) => (
                            <SwiperSlide key={team.id}>
                                <TeamItemCard {...team} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </AnimatedElement>
    );
}
