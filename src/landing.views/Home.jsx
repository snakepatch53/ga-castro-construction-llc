import AnimatedElement from "../components/AnimatedElement";
import Carousel from "../landing.components/Carousel";
import TeamItemCard from "../landing.components/TeamItemCard";
import GoogleItems from "../landing.components/GoogleItems";
import slides from "./../mooks/slider.json";
import teams from "./../mooks/team.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import OurServices from "../landing.components/OurServices";
import Button from "../landing.components/Button";
import SectionContact from "../landing.components/SectionContact";
import InstantQuote from "../landing.components/InstantQuote";

export default function Home({ info }) {
    return (
        <>
            <AnimatedElement>
                <div className="w-full h-screen">
                    <Carousel info={info} data={slides} withSlider={true} />
                </div>

                <div className="relative w-full">
                    <div className="absolute inset-0 ">
                        <img src="img/15.png" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative z-10 container p-[var(--padding)] md:px-0 ">
                        <InstantQuote />
                    </div>
                </div>

                <div className="relative px-[--padding] flex flex-col">
                    <div className="absolute inset-0 w-full max-h-96">
                        <div className="relative w-full h-full">
                            <img
                                src="/img/services.jpg"
                                className="h-full w-full object-cover"
                                alt="Imagen de los servicios de GA Castro Constructions LLC"
                            />
                            <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
                        </div>
                    </div>
                    <div className="container relative z-10 ">
                        <h2
                            className="mb-24 mt-44 text-5xl text-center font-title font'bold text-[--color1-txt1]"
                            style={{ textShadow: "0 2px 5px #000" }}
                        >
                            Our Services
                        </h2>
                        <OurServices />
                    </div>
                </div>

                <div className="relative bg-[#ff9500] mt-5 sm:mt-36">
                    <svg
                        viewBox="0 0 1440 320"
                        className="absolute bottom-full left-0 right-0 translate-y-1 fill-[#ff9500]"
                    >
                        <path d="M0,288L80,266.7C160,245,320,203,480,192C640,181,800,203,960,197.3C1120,192,1280,160,1360,144L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                    </svg>
                    <div className=" container px-[--padding] pb-10 sm:pb-60">
                        <GoogleItems classNameWrapper="relative z-20" />
                    </div>
                    <svg
                        viewBox="0 0 1440 320"
                        className="absolute z-10 bottom-0 left-0 right-0  translate-y-1 fill-[#141422]"
                    >
                        <path d="M0,288L40,277.3C80,267,160,245,240,240C320,235,400,245,480,234.7C560,224,640,192,720,197.3C800,203,880,245,960,250.7C1040,256,1120,224,1200,181.3C1280,139,1360,85,1400,58.7L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
                    </svg>
                </div>
                <div className="flex flex-col  fill-[var(--color2-bg)] text-[var(--color2-txt1)]">
                    <div className="bg-[var(--color2-bg)] p-5">
                        <div className="container flex flex-col justify-center">
                            <h2 className="text-3xl sm:text-5xl text-center font-title">
                                Our Team
                            </h2>
                            <p className="text-center sm:text-2xl font-content opacity-90 tracking-wide text-[var(--color2-txt)] mt-5">
                                We are a team of professionals who are passionate about what we do.
                            </p>
                            <div className="min-h-[380px] mt-5">
                                <Swiper
                                    spaceBetween={80}
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
                                        // 1280: { slidesPerView: 4 },
                                    }}
                                    grabCursor={true}
                                    // className="pt-20 pb-5"
                                    style={{ paddingTop: "70px", paddingBottom: "5px" }}
                                >
                                    {teams.map((team) => (
                                        <SwiperSlide key={team.id}>
                                            <TeamItemCard {...team} type="3" />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <Button to="/about-us" style="4" type="2" className=" mx-auto">
                                <span>learn more about us</span> <span>&rarr;</span>
                            </Button>
                        </div>
                    </div>
                </div>
                <section className="relative px-[var(--padding)] ">
                    <svg
                        viewBox="0 0 1440 320"
                        className="-translate-y-1 absolute z-10 top-0 left-0 right-0 fill-[#141422]"
                    >
                        <path d="M0,224L60,197.3C120,171,240,117,360,101.3C480,85,600,107,720,101.3C840,96,960,64,1080,53.3C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                    </svg>
                    <div className="container pt-14 sm:pt-24 lg:pt-40">
                        <SectionContact />
                    </div>
                </section>
            </AnimatedElement>
        </>
    );
}
