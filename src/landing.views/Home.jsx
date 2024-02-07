import AnimatedElement from "../components/AnimatedElement";
import Carousel from "../landing.components/Carousel";
import TeamItemCard from "../landing.components/TeamItemCard";
import GoogleItems from "../landing.components/GoogleItems";
import slides from "./../mooks/slider.json";
import teams from "./../mooks/team.json";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import OurServices from "../landing.components/OurServices";
import Button from "../landing.components/Button";
import ReactCompareImage from "react-compare-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import SectionContact from "../landing.components/SectionContact";

export default function Home({ info }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <AnimatedElement>
                <div className="w-full h-screen">
                    <Carousel info={info} data={slides} withSlider={true} />
                </div>
                <div className="w-full mt-10">
                    <div className="container p-[var(--padding)]">
                        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 justify-items-center ">
                            <div className="flex flex-col w-full h-full justify-center items-center gap-8">
                                <div className="flex flex-col gap-8 max-w-72 ">
                                    <div className="flex flex-col gap-3 pl-2">
                                        <h3 className="font-title text-5xl sm:text-6xl">
                                            Be the{" "}
                                            <span className="text-[--color2-txt1]">Difference</span>
                                        </h3>
                                        <p className="font-title text-3xl sm:text-4xl">
                                            Just a sample of our changees
                                        </p>
                                    </div>
                                    <div className="flex ">
                                        <Button
                                            to="/about-us"
                                            style="3"
                                            type="2"
                                            className="mt-2 mr-auto font-title2 px-5  items-center text-xl text-balance"
                                        >
                                            <span>Let&apos;s go for more</span>{" "}
                                            <FontAwesomeIcon icon={faRightLong} />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="w-full max-w-96 rounded-lg overflow-hidden shadow-2xl">
                                    <ReactCompareImage
                                        leftImage="/img/before.png"
                                        rightImage="/img/after.png"
                                        className="w-full h-full [&:hover>img]:scale-110"
                                    />
                                </div>
                                <div className="flex w-full">
                                    <span className="w-full text-end font-content">
                                        Project done for family somewhere in New Haven
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative px-[--padding] mt-32 flex flex-col">
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
                    <div className="container relative z-10">
                        <h2
                            className="mb-24 mt-44 text-5xl text-center font-title font'bold text-[--color1-txt1]"
                            style={{ textShadow: "0 2px 5px #000" }}
                        >
                            Our Services
                        </h2>
                        <OurServices />
                    </div>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    className="translate-y-1"
                >
                    <path
                        fill="#ff9500"
                        d="M0,288L80,266.7C160,245,320,203,480,192C640,181,800,203,960,197.3C1120,192,1280,160,1360,144L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                    ></path>
                </svg>
                <div className=" bg-[#ff9500]">
                    <div className=" container p-[--padding] pb-0">
                        <GoogleItems />
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                        className="translate-y-1"
                    >
                        <path
                            fill="#141422"
                            d="M0,288L40,277.3C80,267,160,245,240,240C320,235,400,245,480,234.7C560,224,640,192,720,197.3C800,203,880,245,960,250.7C1040,256,1120,224,1200,181.3C1280,139,1360,85,1400,58.7L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                        ></path>
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
                            <div className="min-h-[395px]">
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
                                        1280: { slidesPerView: 4 },
                                    }}
                                    grabCursor={true}
                                    className="pt-16"
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
                    <svg viewBox="0 0 1440 320" className="-translate-y-1">
                        <path d="M0,224L60,197.3C120,171,240,117,360,101.3C480,85,600,107,720,101.3C840,96,960,64,1080,53.3C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                    </svg>
                </div>

                <section className="px-[var(--padding)]">
                    <div className="container w-full">
                        <SectionContact />
                    </div>
                </section>
            </AnimatedElement>
        </>
    );
}
