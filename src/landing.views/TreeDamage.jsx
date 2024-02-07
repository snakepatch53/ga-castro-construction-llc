import { useEffect } from "react";
import AnimatedElement from "../components/AnimatedElement";
import BannerItem from "../landing.components/BannerItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import SectionContact from "../landing.components/SectionContact";
import { clsx } from "clsx";

export default function TreeDamage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <AnimatedElement>
            <section className="px-[--padding]">
                <div className="container">
                    <BannerItem
                        title="Fell free"
                        title2="from pronblems"
                        subtitle="Learn more about our risk assessment"
                        imgSrc="/img/9.png"
                        imgText="Claims couseling process"
                    />
                </div>
            </section>
            <section className="relative px-[--padding] py-52">
                <div className="absolute z-10 left-0 top-0 w-full h-3 bg-gradient-to-b from-white via-white/80 to-transparent" />
                <div className="absolute z-10 left-0 bottom-0 w-full h-3 bg-gradient-to-b from-transparent via-white/80 to-white" />
                <div className="absolute inset-0 w-full h-full ">
                    <img
                        src="/img/10.png"
                        alt="Image of Tree Damage"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
                <div className="container relative z-10 flex flex-col lg:flex-row justify-center gap-5">
                    <Item
                        title={
                            <>
                                Our Free <b className="text-white">Tree Risk</b> Assessment
                                includes:
                            </>
                        }
                        items={[
                            "A full review of the soil chemistry & comparation",
                            "Root system & root collar conditions",
                        ]}
                    />
                    <Item
                        title={
                            <>
                                Followed by a <b className="text-white">Health Inspection</b> of
                                your trees:
                            </>
                        }
                        items={["Tree Trunk", "Canopy", "Crown", "Branch Structure"]}
                        cols="2"
                    />
                </div>
            </section>
            <section className="px-[--padding] py-20">
                <div className="container flex flex-col justify-center items-center gap-10">
                    <h3 className="font-title text-2xl sm:text-4xl text-center">
                        We proudly service <span className="text-[--color2-txt1]">Stanford</span> &
                        the following towns in{" "}
                        <span className="text-[--color2-txt1]">Fairfield County</span> &{" "}
                        <span className="text-[--color2-txt1]">New Haven County</span>
                    </h3>
                    <img
                        className="w-full max-w-[800px]"
                        src="/img/13.png"
                        alt="Map of constructor ubications"
                    />
                    <p className="font-content font-bold text-lg text-justify tracking-wide">
                        GA Castro Construction LLC has earned its reputation as a leading force in
                        Stamford, known for unmatched service, a highly trained team, and
                        cuttinq—edge tree equipment supporting fifteen ground crews. Over the past
                        decade, we&apos;ve retined our approach to tree work, building a peerless
                        teamand met odology. Contactin GA Castro Construction LLC initiates a
                        streamlined, punctual, and professional process. In tamford, we excel as an
                        emergency management team, collaborating with cities, states, homeowners,
                        and FEMA for weather-related tree removals, playing a crucial role in
                        natural disaster relief. Emphasizin personalized customer service, our
                        licensed arborists deeply care about trees, comprehen their growth patterns,
                        and expertly assess tree health. GA Castro Construction LLC takes pride In
                        its extensive knowledge of tree care, identifving specific deficiencies in
                        various tree species. We welcome the opportunity to discuss our Stamford
                        services.
                    </p>
                </div>
            </section>
            <section className="relative px-[--padding] py-10">
                <div className="container">
                    <SectionContact />
                </div>
            </section>
        </AnimatedElement>
    );
}

function Item({ title, items = [], cols = "1" }) {
    return (
        <div className="flex flex-col justify-center items-center gap-5 max-w-96 bg-white/40 px-10 py-5 mx-auto lg:mx-0 rounded-xl">
            <h5 className="text-black text-2xl text-center text-balance font-title max-w-80">
                {title}
            </h5>
            <div
                className={clsx("grid grid-cols-1 gap-5", {
                    "grid-cols-1": cols === "1",
                    "grid-cols-2": cols === "2",
                })}
            >
                {items.map((item, index) => (
                    <div key={index}>
                        <div className="flex items-center gap-3">
                            <span className="flex justify-center items-center w-full max-w-8 border-2 border-gray-800 rounded-lg aspect-square">
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className="text-green-700 text-xl"
                                />
                            </span>
                            <span className="font-content font-bold text-back text-lg tracking-wide">
                                {item}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
