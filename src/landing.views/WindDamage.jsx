import AnimatedElement from "../components/AnimatedElement";
import Button from "../landing.components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faRightLong } from "@fortawesome/free-solid-svg-icons";
import SectionContact from "../landing.components/SectionContact";

export default function WindDamage() {
    return (
        <AnimatedElement>
            <section className="relative">
                <div className="absolute inset-0 w-full h-full ">
                    <img src="/img/14.jpg" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent" />
                <div className="relative z-10 flex flex-col px-[--padding] pb-32 pt-64 text-[--color1-txt1] items-center">
                    <div className="flex flex-col items-center gap-14">
                        <h3
                            className="font-title text-3xl sm:text-5xl text-center text-balance max-w-[800px] drop-shadow-md"
                            style={{
                                textShadow:
                                    "1px 0px 1px #000, -1px 0px 1px #000, 0 1px 1px #000, 0 -1px 1px #000",
                            }}
                        >
                            The Excellent Storm Damage Repair Service
                        </h3>
                        <Button
                            href="#section-more"
                            style="3"
                            type="3"
                            className="py-4 text-lg bg-[#17163e]"
                        >
                            Discover More
                            <FontAwesomeIcon icon={faRightLong} />
                        </Button>
                    </div>
                </div>
                <svg
                    className="relative z-10 fill-[--color2-bg] translate-y-1"
                    viewBox="0 0 1440 320"
                >
                    <path d="M0,96L34.3,128C68.6,160,137,224,206,240C274.3,256,343,224,411,213.3C480,203,549,213,617,197.3C685.7,181,754,139,823,106.7C891.4,75,960,53,1029,90.7C1097.1,128,1166,224,1234,250.7C1302.9,277,1371,235,1406,213.3L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                </svg>
            </section>
            <section className="px-[--padding] py-10 bg-[--color2-bg]">
                <div className="container flex flex-col items-center gap-12">
                    <h3 className="font-title text-3xl sm:text-5xl text-[--color2-txt] text-center text-balance max-w-[800px]">
                        Our wind and storm damage cleanup services includes:
                    </h3>
                    <div className="flex justify-center items-center gap-3">
                        <span className="flex justify-center items-center w-9 border border-gray-400 rounded-lg p-2 aspect-square">
                            <FontAwesomeIcon icon={faCheck} className="text-green-500 text-xl" />
                        </span>
                        <span className="font-content font-bold text-[--color2-txt] text-lg tracking-wide">
                            Residental and commercial services
                        </span>
                    </div>
                    <Button
                        to="/contact-us"
                        style="3"
                        type="3"
                        href="#section-more"
                        className="py-4 text-lg bg-[#17163e] mb-4"
                    >
                        Discover More
                        <FontAwesomeIcon icon={faRightLong} />
                    </Button>
                </div>
            </section>
            <section id="section-more" className="relative -translate-y-1">
                <img
                    className="absolute inset-0 w-full h-full object-cover -z-10"
                    src="/img/8.png"
                    alt="Image of Roof in Wind Damage"
                />
                <div className="absolute inset-0 bg-black/10 backdrop-blur-sm -z-10" />
                <svg className="fill-[--color2-bg]" viewBox="0 0 1440 320">
                    <path d="M0,224L48,218.7C96,213,192,203,288,202.7C384,203,480,213,576,192C672,171,768,117,864,117.3C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                </svg>
                <div className="px-[--padding] pt-24 pb-52">
                    <div className="container flex flex-col justify-center items-center gap-10">
                        <h3
                            className="font-title text-3xl sm:text-5xl text-white text-center text-balance max-w-[800px] drop-shadow-md"
                            style={{
                                textShadow:
                                    "1px 0px 1px #000, -1px 0px 1px #000, 0 1px 1px #000, 0 -1px 1px #000",
                            }}
                        >
                            What does wind damage entail?
                        </h3>
                        <p
                            className="text-base sm:text-lg text-gray-300 text-center text-pretty font-content font-bold tracking-wider"
                            style={{
                                textShadow:
                                    "1px 0px 1px #000, -1px 0px 1px #000, 0 1px 1px #000, 0 -1px 1px #000",
                            }}
                        >
                            Wind damage is commonly associated with hurricanes and tornadoes due to
                            their powerful winds exceeding 100 mph, posing a significant threat to
                            homes. However, wind damage can occur in any intense storm with winds
                            exceeding 50 mph. These damaging winds, often resulting from downdrafts,
                            can lead to various issues such as roof damage, fallen trees impacting
                            roofs or windows, and damage to garages. We offers free wind damage
                            restoration estimates for New Haven & Fairfield homes affected by severe
                            storms.
                        </p>
                    </div>
                </div>
            </section>
            <section className="relative px-[--padding] py-10">
                <div className="absolute left-0 bottom-full w-full h-3 bg-gradient-to-b from-transparent via-white/80 to-white" />
                <div className="container">
                    <SectionContact />
                </div>
            </section>
        </AnimatedElement>
    );
}
