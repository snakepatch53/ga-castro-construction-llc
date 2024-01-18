import AnimatedElement from "../components/AnimatedElement";
import Button from "../landing.components/Button";
import SectionContact from "../landing.components/SectionContact";

export default function ServicePaint() {
    return (
        <AnimatedElement>
            <section>
                <div className="container">
                    <div className="flex flex-col px-20 pt-20">
                        <div className="flex flex-col gap-5 w-full lg:flex-row">
                            <div className="flex-1 flex flex-col gap-5 justify-center">
                                <h3 className="text-4xl text-balance">
                                    expert painting{" "}
                                    <span className="text-[var(--color3-txt1)]">services</span>
                                </h3>
                                <span className="text-3xl">
                                    Flawless finishes and transformative results.
                                </span>
                                <Button to="/about-us" style="3" type="2" className="mt-2 mr-auto">
                                    <span>Contact us now</span> <span>&rarr;</span>
                                </Button>
                            </div>

                            <div className="flex-1 flex flex-col pt-10 justify-center items-center md:pt-0">
                                <div className="flex h-full w-full rounded-xl overflow-hidden  ">
                                    <img src="/img/services.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className="flex pb-5 pt-2 justify-end font-content font-bold text-x">
                            <span>Selection of paint to suit the client.</span>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className=" container ">
                    <div className="relative flex  w-full  h-[500px] items-center justify-center overflow-hidden rounded-md">
                        <img className="w-full min-h-96" src="/img/services.jpg" />
                        <div className="absolute inset-0 backdrop-blur-sm" />
                        <div className="absolute flex items-center  px-5 py-10 gap-2 mx-10 sm:mx-20 md:mx-40 rounded-2xl bg-[#000000]/60 text-[var(--color1-txt1)] shadow-xl ">
                            <div className="flex flex-col max-w-[420px] gap-5 items-center">
                                <h3 className="text-2xl">Transform your interiors</h3>
                                <p className="text-xl text-center">
                                    Each space in your home Will come to life when you choose its
                                    colors correctly.
                                </p>
                            </div>
                        </div>
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
