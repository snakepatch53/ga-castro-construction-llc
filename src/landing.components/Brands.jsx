import brands from "../mooks/brands.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Brands() {
    return (
        <Swiper
            slidesPerView={5}
            modules={[Autoplay]}
            autoplay={{ delay: 5000 }}
            speed={1500}
            loop={true}
            grabCursor={true}
            breakpoints={{
                0: { slidesPerView: 1 },
                320: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                // 1280: { slidesPerView: 4 },
            }}
            className="swipper-landing-component w-full h-screen max-h-52"
        >
            {brands.map((brand) => (
                <SwiperSlide key={brand.id} className="h-full">
                    <a
                        className="flex justify-center items-center h-full transition hover:scale-[1.08]"
                        href={brand.url}
                    >
                        <img
                            src={brand.src}
                            className="max-w-36 sm:w-full w-20 aspect-square object-contain rounded-md overflow-hidden"
                        />
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
