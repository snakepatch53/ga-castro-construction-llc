import AnimatedElement from "../components/AnimatedElement";
import Button from "../landing.components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import SectionContact from "../landing.components/SectionContact";

export default function ServiceInsuranceClaims() {
    return (
        <AnimatedElement>
            <section>
                <div className="container">
                    <div className="flex flex-col px-20 pt-20">
                        <div className="flex flex-col gap-5 w-full lg:flex-row">
                            <div className="flex-1 flex flex-col gap-5 justify-center ">
                                <h3 className="text-4xl text-balance">
                                    Stamford y{" "}
                                    <span className="text-[var(--color3-txt1)]">Fairfield</span>
                                </h3>
                                <span className="text-3xl">
                                    Maximize your coverage with our expert help
                                </span>
                                <Button to="/about-us" style="3" type="2" className="mt-2 mr-auto">
                                    <span>Contact us now</span> <span>&rarr;</span>
                                </Button>
                            </div>

                            <div className="flex-1 flex flex-col justify-center items-center ">
                                <div className="flex h-full w-full rounded-xl overflow-hidden   max-w-[500px]">
                                    <img src="/img/services.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className="flex pb-5 pt-2 justify-end font-content font-bold text-x">
                            <span>Claims couseling process</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative">
                <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/img/services.jpg"
                />
                <div className="absolute inset-0 backdrop-blur-sm" />
                <div className="container relative flex w-full min-h-96 h-96  items-center overflow-hidden rounded-md">
                    <div className="flex items-center px-5 py-10 gap-2 mx-10 sm:mx-20 md:mx-40  rounded-2xl bg-[#ff7c00]/60 text-[var(--color1-txt1)] shadow-xl ">
                        <button className="text-xl cursor-pointer">
                            <FontAwesomeIcon icon={faAngleLeft} className="text-[2.5rem]" />
                        </button>
                        <div>
                            <p
                                className="text-lg text-center"
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
