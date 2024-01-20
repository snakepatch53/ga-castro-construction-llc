import { useEffect } from "react";
import AnimatedElement from "../components/AnimatedElement";
import BannerItem from "../landing.components/BannerItem";
import SectionContact from "../landing.components/SectionContact";

export default function ServicePaint() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <AnimatedElement>
            <section>
                <div className="container">
                    <BannerItem
                        title="expert painting"
                        title2="services"
                        subtitle="Flawless finishes and transformative results."
                        imgSrc="/image/paint-1.jpg"
                        imgText="Selection of paint to suit the client."
                    />
                </div>
            </section>
            <section className="relative">
                <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/image/paint-2.png"
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
