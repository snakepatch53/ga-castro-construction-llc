import AnimatedElement from "../components/AnimatedElement";
import Button from "../landing.components/Button";
import SectionContact from "../landing.components/SectionContact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";

export default function ServicePaint() {
    return (
        <AnimatedElement>
            <section>
                <div className="container">
                    <div className="flex flex-col px-20 pt-20">
                        <div className="flex flex-col gap-5 w-full lg:flex-row">
                            <div className="flex-1 flex flex-col gap-5 justify-center font-title">
                                <div className="flex flex-col gap-5 pl-3">
                                    <h3 className="text-6xl text-balance ">
                                        expert painting{" "}
                                        <span className="text-[var(--color3-txt1)] ">services</span>
                                    </h3>
                                    <span className="text-4xl ">
                                        Flawless finishes and transformative results.
                                    </span>
                                </div>
                                <Button
                                    to="/about-us"
                                    style="3"
                                    type="2"
                                    className="mt-2 mr-auto gap-3 px-5 items-center"
                                >
                                    <span className="text-xl font-title">Contact us now</span>{" "}
                                    <FontAwesomeIcon className="text-xl " icon={faRightLong} />
                                </Button>
                            </div>

                            <div className="flex-1 flex flex-col pt-10 justify-center items-center md:pt-0">
                                <div className="flex h-full w-full rounded-xl overflow-hidden  ">
                                    <img src="/img/services.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className="flex pb-5 pt-2 justify-end  font-title2 text-xl">
                            <span>Selection of paint to suit the client.</span>
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
                <div className=" container flex  w-full  h-[500px] items-center justify-center font-title2">
                    <div className="relative z-10 flex items-center  px-2 py-10 gap-5 mx-10 sm:mx-20 md:mx-40 rounded-2xl bg-[#000000]/60 text-[var(--color1-txt1)] shadow-xl  flex-col max-w-[550px]">
                        <h3 className="text-4xl">Transform your interiors</h3>
                        <p className="text-2xl text-center">
                            Each space in your home Will come to life when you choose its colors
                            correctly.
                        </p>
                    </div>
                </div>
            </section>
            <section className="p-[var(--padding)]">
                <div className="container w-full mt-10  lg:mt-32">
                    <SectionContact />
                </div>
            </section>
        </AnimatedElement>
    );
}
