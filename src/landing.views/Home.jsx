import AnimatedElement from "../components/AnimatedElement";
import Carousel from "../landing.components/Carousel";
import SocialItem from "../landing.components/SocialItem";
import TeamItemCard from "../landing.components/TeamItemCard";

import slides from "./../mooks/slider.json";
import teams from "./../mooks/team.json";
import socials from "./../mooks/social.json";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Services from "../landing.components/Services";
import Button from "../landing.components/Button";
import ReactCompareImage from "react-compare-image";

export default function Home() {
    useEffect(() => {
        // window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <AnimatedElement>
                <div className="w-full h-screen">
                    <Carousel data={slides} withSlider={true} />
                </div>

                <div className="w-full mt-32">
                    <div className="container">
                        <h2 className="mb-14 text-3xl text-center font-title2">
                            Make a change of appearance
                        </h2>
                        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-cente">
                            <div className="w-full max-w-96 rounded-lg overflow-hidden shadow-2xl">
                                <ReactCompareImage
                                    leftImage="/img/before.png"
                                    rightImage="/img/after.png"
                                    className="w-full h-full [&:hover>img]:scale-110"
                                />
                            </div>
                            <div className="w-full max-w-96 rounded-lg overflow-hidden shadow-2xl">
                                <ReactCompareImage
                                    leftImage="/img/before.png"
                                    rightImage="/img/after.png"
                                    className="w-full h-full [&:hover>img]:scale-110"
                                />
                            </div>
                            <div className="w-full max-w-96 rounded-lg overflow-hidden shadow-2xl">
                                <ReactCompareImage
                                    leftImage="/img/before.png"
                                    rightImage="/img/after.png"
                                    className="w-full h-full [&:hover>img]:scale-110"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-10 mt-32 flex flex-col">
                    <h2 className="mb-14 text-3xl text-center font-title2">Our Services</h2>
                    <div className="container">
                        <Services />
                    </div>
                    <Button to="/services" style="3" type="2">
                        <span>See more of our services</span> <span>&rarr;</span>
                    </Button>
                </div>

                <div className="mt-24 fill-[var(--color2-bg)] text-[var(--color2-txt1)]">
                    <svg viewBox="0 0 1440 220">
                        <path d="M0,192L40,181.3C80,171,160,149,240,149.3C320,149,400,171,480,165.3C560,160,640,128,720,144C800,160,880,224,960,218.7C1040,213,1120,139,1200,90.7C1280,43,1360,21,1400,10.7L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
                    </svg>
                    <div className="bg-[var(--color2-bg)] px-5">
                        <div className="container flex flex-col justify-center gap-5">
                            <h2 className="text-3xl text-center font-title2">Our Team</h2>
                            <p className="text-center text-sm font-content font-bold opacity-90 tracking-wide text-[var(--color2-txt)]">
                                We are a team of professionals who are passionate about what we do.
                            </p>
                            <div>
                                <Swiper
                                    spaceBetween={0}
                                    slidesPerView={4}
                                    modules={[Autoplay]}
                                    autoplay={{ delay: 5000 }}
                                    speed={1500}
                                    loop={true}
                                    breakpoints={{
                                        0: { slidesPerView: 1 },
                                        320: { slidesPerView: 1 },
                                        640: { slidesPerView: 2 },
                                        1024: { slidesPerView: 3 },
                                        1280: { slidesPerView: 4 },
                                    }}
                                    grabCursor={true}
                                    className="pt-14 pb-5"
                                >
                                    {teams.map((team) => (
                                        <SwiperSlide key={team.id}>
                                            <TeamItemCard {...team} type="2" />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <Button to="/about-us" style="4" type="2">
                                <span>learn more about us</span> <span>&rarr;</span>
                            </Button>
                        </div>
                    </div>
                    <svg viewBox="0 0 1440 320">
                        <path d="M0,224L60,197.3C120,171,240,117,360,101.3C480,85,600,107,720,101.3C840,96,960,64,1080,53.3C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                    </svg>
                </div>

                <div className="px-5 sm:px-10 mb-56 flex flex-col">
                    <h2 className="mb-10 text-3xl text-center font-title2">Contact Us</h2>
                    <div className="container flex justify-center gap-5">
                        {socials.map(({ ...social }) => (
                            <SocialItem key={social.id} type="3" {...social} />
                        ))}
                    </div>
                    <Button to="/contact-us" style="3" type="2">
                        <span>Do you need more info?</span> <span>&rarr;</span>
                    </Button>
                </div>
            </AnimatedElement>
        </>
    );
}
