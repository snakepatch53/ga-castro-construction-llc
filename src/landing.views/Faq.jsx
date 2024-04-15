import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedElement from "../components/AnimatedElement";
import { faArrowDown, faPhone, faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { cls } from "../../lib/utils";
import SectionContact from "../landing.components/SectionContact";
import Button from "../landing.components/Button";
import { useContext, useEffect, useState } from "react";
import { InfoContext } from "../context/info";
import _faqs from "../mooks/faqs.json";

export default function Faq() {
    const { info } = useContext(InfoContext);
    const url = "tel:" + info.phone;

    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        const mutedFaqs = _faqs.section1.map((faq) => {
            faq.check = false;
            return faq;
        });
        mutedFaqs[0].check = true;
        setFaqs(mutedFaqs);
    }, []);
    return (
        <AnimatedElement>
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 w-full h-full ">
                    <img src="/img/19.png" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-transparent" />

                <div className="container p-[--padding] pt-40 flex w-full h-full items-center justify-center ">
                    <div className="relative flex flex-col justify-center items-center gap-5">
                        <div className="flex flex-row items-center bg-black/30 rounded-br-3xl rounded-tl-3xl gap-2 px-10 py-5">
                            <h1 className="text-2xl  sm:text-5xl font-title2 font-bold tracking-wide text-[--color2-txt] text-center text-balance">
                                Learn more about us with our{" "}
                                <span className="text-[--color1-bg]">
                                    Frequently Asked Questions
                                </span>{" "}
                                section
                            </h1>
                        </div>
                        <div className="flex justify-center items-center w-24 border-8 rounded-full aspect-square">
                            <FontAwesomeIcon icon={faArrowDown} className="text-white text-6xl" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative px-[--padding] py-32">
                <div className="absolute inset-0 w-full h-full ">
                    <img src="/img/20.png" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
                <div className="relative container flex flex-col gap-10">
                    <h3 className="text-white font-title text-2xl sm:text-5xl text-center">
                        Common FAQ&apos;s
                    </h3>
                    <div className="flex flex-wrap justify-center gap-10">
                        {faqs.map((faq) => (
                            <Item
                                key={faq.id}
                                onClick={() => {
                                    const newFaqs = faqs.map((f) => {
                                        if (f.id === faq.id) f.check = !f.check;
                                        else f.check = false;
                                        return f;
                                    });

                                    setFaqs(newFaqs);
                                }}
                                text={faq.ask}
                                check={faq.check}
                            />
                        ))}
                    </div>
                    <div className="relative p-[--padding]">
                        <div className="absolute inset-0 bg-[--color1-bg] opacity-70 rounded-lg" />
                        <div className="relative">
                            <FontAwesomeIcon
                                className="absolute -left-14 -top-14 text-6xl text-[--color1-txt1]"
                                icon={faQuoteLeft}
                            />
                            <p className="font-content text-2xl text-center text-pretty text-[--color1-txt1] opacity-90">
                                {faqs.find((faq) => faq.check)?.answer}
                            </p>
                        </div>
                        <FontAwesomeIcon
                            className="absolute -right-5 -bottom-5 text-6xl text-[--color1-txt1]"
                            icon={faQuoteRight}
                        />
                    </div>
                </div>
            </section>

            <section className="px-[--padding] py-20">
                <div className="container flex flex-col gap-10">
                    <h3 className="font-title font-bold text-center text-3xl sm:text-5xl">
                        Others FAQ&apos;s
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {_faqs.section2.map((faq) => (
                            <Item2 key={faq.id} title={faq.ask} text={faq.answer} />
                        ))}
                        {/* <Item2
                            title="Is vinyl siding maintenance free?"
                            text="not exactly. Vinyl siding doesn't need to be painted or re-caulked, but it could use occasional washing. You can use a garden hose or a power washer on a gentle settin to remove dirt and debris from siding at least once a year. Be carefu not to dislodge the panels or get water underneath them."
                        />
                        <Item2
                            title="What is explosure?"
                            text="Exposure is the visible part of siding in lap siding where boards are installed with an overlap. Its important to know the desired exposure before you order the boards or shingles, because it ultimately determines how much material you Will need. A one-inch difference in exposure can also create an entirely different visual effect. Be sure to consult with a siding professional if you dont have experience in purchasing siding."
                        />
                        <Item2
                            title="Can siding be replaced in winter?"
                            text="Yes it can be, but it may take us a bit longer to complete the project depending on the weather conditions. However, if you are installing the type of siding that needs painting, we recommend waiting until the weather warms up to ensure the paint applies smooth and dries fast."
                        />

                        <Item2
                            title="Do they work in Stanford?"
                            text="Pos u puesto, nuestro servicio cubre toda eI área de Stamford y más, puedes encontrarnos en nuestras oficinas en Fairfield, 39 hubbard Ave, Stamford, CT 06905"
                        />
                        <Item2
                            title="Dou you have offices or do you work in Guilford?"
                            text="That's how it is! We have offices located in New Haven County (Guilford) 1300 Boston post Rd, Guilford, CT 06437, you can visit us or call us to come to your home after a quote to do a visual evaluation of the place, we cover the entire New Haven area."
                        />
                        <Item2
                            title="Is it true that quotes are free?"
                            text="Yes, that's right, quotes through our system are completely free, you can make quotes for all the properties you need, soon you are ready our advisors Will contact you to provide you with more information."
                        /> */}
                    </div>
                </div>
            </section>

            <section className="px-[--padding] py-20 bg-[--color2-bg]">
                <div className="container flex flex-col md:flex-row items-center gap-10">
                    <h4 className="flex-1 font-title font-bold text-center text-2xl sm:text-4xl text-[--color2-txt]">
                        Do you still have doubts? <br />
                        Contact us
                    </h4>
                    <Button style="4" as="a" href={url}>
                        <span className="font-title font-bold text-xl sm:text-2xl">Call us</span>
                        <FontAwesomeIcon className="text-xl" icon={faPhone} />
                    </Button>
                </div>
            </section>

            <section className="px-[--padding] py-10">
                <div className="container">
                    <SectionContact />
                </div>
            </section>
        </AnimatedElement>
    );
}

function Item({ text, onClick, check = false }) {
    return (
        <button
            className={cls(
                "relative flex justify-center items-center w-full sm:w-72 bg-white/60 p-5 rounded-xl",
                {
                    "bg-[--color1-bg]": check,
                }
            )}
            onClick={onClick}
        >
            <p
                className={cls("font-content font-bold text-lg text-center", {
                    "text-[--color1-txt1]": check,
                    "font-normal": check,
                })}
            >
                {text}
            </p>
        </button>
    );
}

function Item2({ title, text }) {
    return (
        <div className="flex flex-col gap-10">
            <h3 className="font-bold font-title text-xl sm:text-2xl text-center text-balance">
                {title}
            </h3>
            <p className="font-content font-bold text-justify">{text}</p>
        </div>
    );
}
