import AnimatedElement from "../components/AnimatedElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import SectionContact from "../landing.components/SectionContact";
import BannerItem from "../landing.components/BannerItem";
import { useEffect } from "react";

export default function ServiceInsuranceClaims() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <AnimatedElement>
            <section>
                <div className="container">
                    <BannerItem
                        title="Stamford y"
                        title2="Fairfield"
                        subtitle="Maximize your coverage with our expert help"
                        imgSrc="/image/insurance-claims-1.jpg"
                        imgText="Claims couseling process"
                    />
                </div>
            </section>
            <section className="relative">
                <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/image/insurance-claims-2.jpg"
                />
                <div className="absolute inset-0 backdrop-blur-sm" />
                <div className="container relative flex w-full min-h-96 py-48 items-center overflow-hidden rounded-md">
                    <div className="flex items-center px-5 py-10 gap-2 mx-10 sm:mx-20 md:mx-40  rounded-2xl bg-[#ff7c00]/60 text-[var(--color1-txt1)] shadow-xl ">
                        <button className="text-xl cursor-pointer">
                            <FontAwesomeIcon icon={faAngleLeft} className="text-[2.5rem]" />
                        </button>
                        <div>
                            <p
                                className="font-title tracking-wider lg:px-10 text-balance text-lg text-center"
                                style={{ textShadow: "0 0 10px #000" }}
                            >
                                &quot;An insuranVe claim is a formal request by a policyholder to an
                                insurance company for coverage or compensation for a covered loss or
                                policy event.
                            </p>
                        </div>
                        <button className="text-xl cursor-pointer">
                            <FontAwesomeIcon icon={faChevronRight} className="text-[2.5rem]" />
                        </button>
                    </div>
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
