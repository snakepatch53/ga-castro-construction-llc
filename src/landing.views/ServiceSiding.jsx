import { useEffect } from "react";
import AnimatedElement from "../components/AnimatedElement";
import BannerItem from "../landing.components/BannerItem";
import Button from "../landing.components/Button";
import SectionContact from "../landing.components/SectionContact";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GoogleItems from "../landing.components/GoogleItems";

export default function ServiceSiding() {
    useEffect(() => {
        // window.scrollTo(0, 0);
    }, []);
    return (
        <AnimatedElement>
            <section className="relative shadow-xl font-title">
                <div className="absolute flex inset-0 -z-1 ">
                    <img src="/image/siding-banner.jpg" className="w-full h-full object-cover" />
                </div>
                <div className="container relative z-10 py-28 px-10">
                    <div
                        className="flex flex-col py-10 text-5xl gap-24 "
                        style={{ "--textShadow": "-10px 8px 25px #000" }}
                    >
                        <span
                            className="w-full  text-start"
                            style={{ textShadow: "var(--textShadow)" }}
                        >
                            Update Your Life
                        </span>
                        <span
                            className="w-full  text-center"
                            style={{ textShadow: "var(--textShadow)" }}
                        >
                            Transform Your Space
                        </span>
                        <span
                            className="w-full  text-end"
                            style={{ textShadow: "var(--textShadow)" }}
                        >
                            Renew Your Style
                        </span>
                    </div>
                </div>
            </section>
            <section className="relative pb-10 pt-20 ">
                <div className="absolute left-0 right-0 bottom-0 ">
                    <svg viewBox="0 0 1440 320" className="fill-[#ff9500] translate-y-1">
                        <path d="M0,224L48,234.7C96,245,192,267,288,266.7C384,267,480,245,576,245.3C672,245,768,267,864,266.7C960,267,1056,245,1152,202.7C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
                <div className="container relative z-10 flex flex-col w-full px-[--padding] py-20 gap-5 justify-center items-center">
                    <p className="text-3xl sm:text-5xl text-center font-title max-w-[700px]">
                        We have expert staff in remodeling and changing siding both outdoors and
                        indoors.
                    </p>
                    <div>
                        <Button
                            to="/about-us"
                            style="3 "
                            type="2"
                            className="mt-2 mr-auto font-title2 items-center py-5 px-5"
                        >
                            <span className="text-lg sm:text-2xl ">Contact us now</span>{" "}
                            <FontAwesomeIcon icon={faRightLong} className="text-xl sm:text-2xl" />
                        </Button>
                    </div>
                </div>
            </section>
            <section className="relative bg-[#ff9500]">
                <div className="relative z-10 container">
                    <BannerItem
                        title="Protection and"
                        subtitle="A modern finish for your facade"
                        imgSrc="/image/banner-siding-2.jpg"
                        imgText="Siding work for a home in Stamford"
                        buttonText="Free Estimate"
                        imgTextClassName="text-white"
                        titleClassName="lg:pb-28"
                    />
                </div>
                <div className=" w-full ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                        className="fill-[#171640] translate-y-1"
                    >
                        <path d="M0,224L30,208C60,192,120,160,180,128C240,96,300,64,360,58.7C420,53,480,75,540,69.3C600,64,660,32,720,21.3C780,11,840,21,900,32C960,43,1020,53,1080,69.3C1140,85,1200,107,1260,106.7C1320,107,1380,85,1410,74.7L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
                    </svg>
                </div>
            </section>
            <section className="relative bg-[#171640] ">
                <div className="container">
                    <GoogleItems />
                </div>
            </section>

            <section>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    className="fill-[#171640] -translate-y-1"
                >
                    <path d="M0,288L48,277.3C96,267,192,245,288,224C384,203,480,181,576,176C672,171,768,181,864,181.3C960,181,1056,171,1152,181.3C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                </svg>
                <div className="container w-full p-[var(--padding)]">
                    <SectionContact />
                </div>
            </section>
        </AnimatedElement>
    );
}
