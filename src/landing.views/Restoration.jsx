import { useEffect } from "react";
import AnimatedElement from "../components/AnimatedElement";
import BannerItem from "../landing.components/BannerItem";
import SectionContact from "../landing.components/SectionContact";
import { Link } from "react-router-dom";

export default function Restoration() {
    useEffect(() => {
        // window.scrollTo(0, 0);
    }, []);
    return (
        <AnimatedElement>
            <section className="relative overflow-hidden p-[--padding]">
                <div className="absolute inset-0 w-full h-full ">
                    <img src="/img/3.png" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-black/20 to-transparent " />
                <div className="relative z-10 flex flex-col pt-32 container gap-10 text-[--color1-txt1] items-center">
                    <div className="flex flex-col gap-10 md:flex-row md:gap-0 items-center ">
                        <div className=" flex-1 ">
                            <h3 className="font-title text-end sm:pr-10 text-4xl sm:text-5xl ">
                                Restoration
                            </h3>
                        </div>
                        <div className="flex-1">
                            <p className="font-title text-center md:text-start text-balance lg:pr-40">
                                Fire damage or smoke damage? Restoration Local is the #1 network of
                                restoration professions and we have qualified fire damage
                                restoration contractors in your neighborhood. From kitchen fires to
                                furnace puffbacks, they Will clean smoke and soot damage and restore
                                your property to its original condition. They even remove water from
                                fire fighting efforts and treat against mold.
                            </p>
                        </div>
                    </div>
                    <img
                        className="w-full max-w-[800px]"
                        src="/img/13.png"
                        alt="Map of constructor ubications"
                    />
                </div>
            </section>
            <section className="relative  overflow-hidden px-[--padding]">
                <div className="container">
                    <h3 className="w-full text-center font-title text-5xl sm:text-6xl">
                        FIND ALL <span className="text-[--color1-bg]">OUR SERVICES</span>
                    </h3>

                    <div className="flex flex-col lg:flex-row justify-center gap-10 pt-20 mb-20">
                        <Item src="/img/12.jpg" title="Water Damage" to="./wind-damage" />
                        <Item src="/img/2.png" title="Wind Damage" to="./water-damage" />
                        <Item src="/img/11.png" title="Tree Damage" to="./tree-damage" />
                    </div>
                    <BannerItem
                        title="Stamford y"
                        title2="Fairfield"
                        subtitle="Maximize your coverage whith our expert help "
                        imgSrc="/img/1.png"
                        imgText="Claims couseling process"
                    />
                </div>
            </section>
            <section className="relative overflow-hidden px-[--padding] mt-20">
                <div className="container flex flex-col ">
                    <h3 className="w-full text-center font-title text-5xl sm:text-6xl">
                        WHY <span className="text-[--color1-bg]">CHOOSE US?</span>
                    </h3>
                    <div className="flex flex-col lg:flex-row py-20">
                        <div className="flex-1 ">
                            <div className="flex flex-col font-title gap-8 text-3xl text-center sm:text-start opacity-80 pb-10 sm:pb-0">
                                <p>We are 24/7 Water and Mold Damage Emergency Response Team.</p>
                                <p>
                                    We&apos;re a full-service restoration company specialized in
                                    Water Damage, Flood, Fire, Storm, Sewage, and Mold Remediation.
                                    We have over 14 years of experience in this industry and have
                                    helped thousands of home and business owners in restoring their
                                    property to pre-loss condition.
                                </p>
                                <p>
                                    We guarantee our work and have handpicked our staff so that we
                                    never lose that &quot;personal attention&quot; that you rarely
                                    receive in this industry today.
                                </p>
                                <p>
                                    We look forward to working with you and Will always provide
                                    professional and friendly service!
                                </p>
                            </div>
                        </div>
                        <div className="flex-1">
                            <SectionContact isCol />
                        </div>
                    </div>
                </div>
            </section>
        </AnimatedElement>
    );
}

function Item({ src, title, to }) {
    return (
        <Link to={to} className="group flex-1 flex flex-col items-center gap-5 cursor-pointer">
            <div className="w-full aspect-video rounded-xl overflow-hidden">
                <img
                    src={src}
                    alt={"Image of " + title}
                    className="w-full h-full group-hover:scale-125 transition-all"
                />
            </div>
            <h3 className="font-title text-2xl">{title}</h3>
        </Link>
    );
}
