import { useEffect } from "react";
import AnimatedElement from "../components/AnimatedElement";
import BannerItem from "../landing.components/BannerItem";
import Button from "../landing.components/Button";
import SectionContact from "../landing.components/SectionContact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";

export default function ServiceCarpentry() {
    useEffect(() => {
        // window.scrollTo(0, 0);
    }, []);
    return (
        <AnimatedElement>
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 w-full h-full ">
                    <img src="/image/carpentry-1.jpg" className="w-full h-full object-cover" />
                </div>
                <div className="relative container font-title p-[--padding]">
                    <div className="flex flex-col w-full items-center text-white py-52 md:p-52 gap-14 ">
                        <h3 className="text-5xl " style={{ textShadow: "-4px 2px 8px #000" }}>
                            Make everything fit
                        </h3>
                        <div className="flex">
                            <Button
                                to="/about-us"
                                style="3"
                                type="2"
                                className="mt-2 mr-auto items-center sm:gap-2 px-3 sm:p-5"
                            >
                                <span className=" sm:text-xl font-title2">Discover more</span>{" "}
                                <FontAwesomeIcon className="sm:text-xl" icon={faRightLong} />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative inset-0">
                <div className="relative container z-10">
                    <BannerItem
                        title="Expert Carpentry"
                        title2="Services in Stamford"
                        subtitle="Maximize your coverage with our expert help"
                        imgSrc="/image/carpentry-2.jpg"
                        imgText="Structure for a constrution project"
                        showButton={false}
                        imgTextClassName="text-white"
                    />
                </div>
                <div className="absolute w-full bottom-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                        className="fill-[#ff9500] translate-y-1"
                    >
                        <path d="M0,128L26.7,106.7C53.3,85,107,43,160,37.3C213.3,32,267,64,320,74.7C373.3,85,427,75,480,69.3C533.3,64,587,64,640,58.7C693.3,53,747,43,800,42.7C853.3,43,907,53,960,80C1013.3,107,1067,149,1120,181.3C1173.3,213,1227,235,1280,229.3C1333.3,224,1387,192,1413,176L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z" />
                    </svg>
                </div>
            </section>
            <section className="bg-[--color1-bg]">
                <div className="relative z-10 container  font-title p-[var(--padding)] pt-0">
                    <div className="flex flex-col items-center  md:px-60 gap-8">
                        <p className="text-center text-5xl">
                            We have expert staff in remodelin and changing siding both outdoors and
                            indoors.
                        </p>
                        <div className="flex">
                            <Button
                                to="/about-us"
                                style="3"
                                type="2"
                                className="mt-2 mr-auto items-center px-3 sm:p-5 text-xl sm:gap-2"
                            >
                                <span className=" sm:text-xl font-title2">Contact us now</span>{" "}
                                <FontAwesomeIcon className="sm:text-xl " icon={faRightLong} />
                            </Button>
                        </div>
                    </div>
                </div>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                        className="fill-white translate-y-1"
                    >
                        <path d="M0,192L48,181.3C96,171,192,149,288,144C384,139,480,149,576,160C672,171,768,181,864,165.3C960,149,1056,107,1152,96C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
                    </svg>
                </div>
            </section>
            <section className="p-[var(--padding)]">
                <div className="container w-full">
                    <SectionContact />
                </div>
            </section>
        </AnimatedElement>
    );
}
