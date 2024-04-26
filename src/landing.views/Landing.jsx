import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedElement from "../components/AnimatedElement";
import { faStar, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

// import { Autoplay, Navigation } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";

import { cls } from "../../lib/utils";
import { useState } from "react";
import useExternalScripts from "../hooks/useExternalScripts";
import { Link } from "react-router-dom";
import GoogleItems from "../landing.components/GoogleItems";
import Brands from "../landing.components/Brands";
import OurComponentSection from "../landing.components/OurComponentSection";
import faqsLanding from "./../mooks/faqs-landing.json";
import CardsCarousel from "../landing.components/CardsCarousel";

export default function Landing() {
    useExternalScripts({
        url: "https://app.roofle.com/roof-quote-pro-embedded-widget.js?id=B5rx9uOVdIreP2QIxCFJp",
    });

    return (
        <AnimatedElement>
            <section className="relative overflow-hidden flex items-center px-[--padding] min-h-screen">
                <div className="absolute inset-0 w-full h-full ">
                    <img src="/img/22.png" className="w-full h-full object-cover object-top" />
                </div>

                <div className="relative container flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-5 pt-32 pb-16 w-full h-full">
                    <div className="flex flex-col justify-center gap-5">
                        <h3 className="font-title text-white text-3xl sm:text-5xl text-center sm:text-left text-balance max-w-[500px]">
                            Get a beautifull new roof that will last
                        </h3>
                        <p
                            className="max-w-[600px] font-content text-white text-pretty text-center sm:text-left text-lg"
                            style={{
                                textShadow: "1px 1px 1px black, -1px -1px 1px black",
                            }}
                        >
                            We are the roofing construction experts, providing expert workmanship
                            and project management to ensure a quality roof and stress-free
                            experience for you. We use only high-quality materials and provide a
                            level of profesionalism that&apos;s a cut above our competitors.
                        </p>
                        <div className="flex flex-col md:flex-row items-center gap-5">
                            <a
                                className="flex justify-center items-center bg-[--color1-bg] font-bold font-title uppercase text-center text-[--color1-txt] max-w-96 px-5 py-3 rounded-full transition hover:scale-105"
                                href="#section-instant-quote"
                            >
                                Instant online roof quote
                            </a>
                            <Link
                                className="flex justify-center items-center border-2 border-[--color1-bg] font-bold font-title uppercase text-center text-white max-w-96 px-5 py-3 rounded-full transition hover:scale-105"
                                style={{
                                    textShadow: "1px 1px 1px black, -1px -1px 1px black",
                                }}
                                to="/roof-designer"
                            >
                                Visualize your new roof
                            </Link>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-2">
                            <div className="flex text-lg">
                                <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                                <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                                <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                                <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                                <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                            </div>
                            <p
                                className="font-content text-white text-center sm:text-left text-sm sm:text-base"
                                style={{
                                    textShadow: "1px 1px 1px black, -1px -1px 1px black",
                                }}
                            >
                                300+ 5-star reviews (Google, Home, Advisor, BBB, Houz)
                            </p>
                        </div>
                    </div>
                    <p
                        className="max-w-80 font-content text-center text-white text-balance text-sm sm:text-lg opacity-8"
                        style={{
                            textShadow:
                                "1px 0 1px black, -1px 0 1px black, 0 1px 1px black, 0 -1px 1px black",
                        }}
                    >
                        Start Your Roofing Project Today! 🚀 Get Your Instant Roof Quote
                    </p>
                </div>
            </section>

            {/* <section className="relative overflow-hidden" id="section-instant-quote">
                <div className="absolute inset-0 w-full h-full ">
                    <img src="/img/23.jpg" className="w-full h-full object-cover" />
                </div>
                <div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(180deg, 
                                white 0%, rgba(255,255,255,0.8) 20%, 
                                rgba(255,255,255,0.7) 40%, 
                                rgba(255,255,255,0.6) 60%,
                                white 95%
                            
                        )`,
                    }}
                />

                <div className="container relative z-10 flex flex-col md:flex-row p-[--padding]">
                    <div className="flex w-full items-center justify-center">
                        <img src="/img/24.png" alt="" />
                    </div>

                    <div className="w-full h-full" id="roof-quote-pro-embedded" />
                </div>
            </section> */}

            <section className="relative overflow-hidden" id="section-instant-quote">
                <div className="w-full h-full" id="roof-quote-pro-embedded" />
            </section>

            {/* <section className="relative">
                <div
                    className="absolute z-10 top-0 left-0 w-full h-48"
                    style={{
                        background: `linear-gradient(180deg, 
                            white 0%, 
                            white 10%,
                            transparent
                        )`,
                    }}
                />
                <Swiper
                    slidesPerView={1}
                    modules={[Autoplay, Navigation]}
                    navigation={true}
                    autoplay={{ delay: 5000 }}
                    speed={1500}
                    loop={true}
                    grabCursor={true}
                    className="swipper-landing-component w-full h-screen max-h-[700px]"
                >
                    <SwiperSlide>
                        <SlideItem src="/works/1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SlideItem src="/works/2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SlideItem src="/works/3.jpg" />
                    </SwiperSlide>
                </Swiper>
            </section> */}

            <section className="p-[--padding] ">
                <div className="container">
                    <CardsCarousel />
                </div>
            </section>

            <section className="px-[--padding] py-10">
                <div className="container ">
                    <article className="flex flex-col items-center gap-5">
                        <h3 className="w-full font-title text-4xl text-center">Customer Stories</h3>
                        <p className="font-title2 text-lg text-pretty text-center sm:px-20">
                            Ga Castro Construction is the local roofer that homeowners, homeowner
                            associations, and busi- nesses trust. Weave already replaced thousands
                            of roofs for homeowners in the Dallas area and across the United States,
                            and we&apos;d like the ooportunity to re-roof yours.
                        </p>
                    </article>
                    {/* <Banner /> */}
                    <GoogleItems classNameWrapper="mt-10" />
                </div>
            </section>

            <section className="px-[--padding]">
                <div className="container">
                    <Brands />
                </div>
            </section>

            {/* <section className="px-[--padding] pt-14 bg-[--color1-bg]">
                <div className="container flex flex-col gap-10">
                    <h3 className="font-title text-[--color1-txt] text-center text-3xl sm:text-5xl">
                        Our Services
                    </h3>
                    <div className="relative flex">
                        <div className="flex-1 grid xl:grid-cols-2 gap-10 mb-10">
                            <OurServicesItem />
                            <OurServicesItem />
                            <OurServicesItem />
                            <OurServicesItem />
                        </div>
                        <img
                            className="absolute lg:static bottom-0 opacity-50 lg:opacity-100 w-full lg:w-auto h-full lg:h-auto object-contain object-bottom"
                            src="/img/25.png"
                        />
                    </div>
                </div>
            </section> */}

            <section className="pt-14">
                <OurComponentSection />
            </section>

            <section className="px-[--padding] py-10 bg-[--color4-bg]">
                <div className="container flex flex-col gap-10">
                    <h3 className="font-title text-[--color4-txt2] text-center text-3xl sm:text-5xl">
                        FAQs
                    </h3>

                    <div className="flex flex-col gap-5">
                        {faqsLanding.map((item) => (
                            <AccordionItem key={item.id} title={item.ask} text={item.answer} />
                        ))}
                    </div>
                </div>
            </section>
        </AnimatedElement>
    );
}

function AccordionItem({ title, text }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-2 border-[--color4-txt2] rounded-3xl">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cls(
                    "flex justify-between items-center w-full px-5 py-3 opacity-90 border-b-2 border-[--color4-txt2] rounded-3xl transition-none",
                    {
                        "border-b-0 opacity-70": !isOpen,
                    }
                )}
            >
                <span className=" font-title text-[--color4-txt] text-left text-lg sm:text-xl">
                    {title}
                </span>
                <FontAwesomeIcon
                    icon={isOpen ? faMinus : faPlus}
                    className="text-[--color4-txt] text-xl"
                />
            </button>
            <div
                className={cls("w-full max-h-96 overflow-hidden transition-all", {
                    "max-h-0": !isOpen,
                })}
            >
                <p className="p-5 font-content text-[--color4-txt] sm:text-lg opacity-70">{text}</p>
            </div>
        </div>
    );
}

// function OurServicesItem() {
//     return (
//         <div className="relative z-10 flex justify-center items-center text-center p-5 bg-black/20 rounded-xl font-content font-bold text-[--color1-txt] border-2 border-white/30">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem perspiciatis dolorum
//             expedita natus impedit, cupiditate nihil, nostrum mollitia cum, corrupti voluptas quam
//             doloribus enim. Non accusamus quas dolorem architecto vitae!
//         </div>
//     );
// }

// function SlideItem({ src }) {
//     return (
//         <div className="w-full h-full">
//             <img src={src} className="w-full h-full object-cover" />
//         </div>
//     );
// }

// function Banner() {
//     return (
//         <div className="relative flex w-full pt-20">
//             <FontAwesomeIcon
//                 icon={faQuoteLeft}
//                 className="z-10 xl:-left-20 2xl:-left-36 top-5 absolute text-[150px] md:text-[180px]"
//             />

//             <Swiper
//                 modules={[Autoplay, Navigation]}
//                 navigation={true}
//                 autoplay={{ delay: 5000 }}
//                 speed={1500}
//                 slidesPerView={3}
//                 breakpoints={{
//                     0: { slidesPerView: 1 },
//                     320: { slidesPerView: 1 },
//                     640: { slidesPerView: 2 },
//                     1024: { slidesPerView: 3 },
//                     1280: { slidesPerView: 3 },
//                 }}
//                 spaceBetween={30}
//                 loop={true}
//                 grabCursor={true}
//                 className="swipper-landing-component swipper-landing-component-dark"
//             >
//                 {stories.map((item) => (
//                     <SwiperSlide className="pt-12 " key={item.id}>
//                         <ItemCard {...item} />
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// }

// function ItemCard({ img, description }) {
//     return (
//         <div className="relative bg-[--color1-bg] w-full rounded-3xl pt-16 p-10 ">
//             <div className="absolute flex justify-center items-center w-24 h-24  -top-12 right-7 border-solid border-8 border-white bg-gray-400 rounded-full overflow-hidden">
//                 <img src={img} className="w-full h-full object-cover" />
//             </div>
//             <p className=" font-title text-lg">{description}</p>
//         </div>
//     );
// }
