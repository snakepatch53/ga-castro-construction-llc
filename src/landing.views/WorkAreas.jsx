import AnimatedElement from "../components/AnimatedElement";
import Button from "../landing.components/Button";
import CircleDown from "../icons/CircleDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import SectionContact from "../landing.components/SectionContact";
import GoogleItems from "../landing.components/GoogleItems";

export default function WorkAreas() {
    return (
        <AnimatedElement>
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 w-full h-full ">
                    <img src="/img/18.png" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-transparent" />
                <div className="container p-[--padding] py-52 sm:py-60 flex w-full h-full items-center justify-center ">
                    <div className="relative flex flex-row max-w-[900px] items-center bg-black/30 rounded-br-[60px] rounded-tl-[60px] gap-2 px-10 sm:px-10 py-7">
                        <h1 className="text-2xl  sm:text-5xl text-center  font-title text-[--color2-txt]">
                            We work throughout the
                            <span className="text-[--color1-bg]">
                                {" "}
                                Fairfield and New Haven County
                            </span>{" "}
                            area
                        </h1>
                    </div>
                </div>
            </section>
            <section>
                <div className="container flex flex-col md:flex-row p-[--padding] py-10 w-full h-full items-center justify-center ">
                    <div className="flex w-full items-center justify-center">
                        <img src="/img/13.png" />
                    </div>
                    <div className="flex flex-col w-full items-center gap-5">
                        <p
                            className="font-title text-5xl text-center"
                            style={{ textShadow: "0 1px 2px #000" }}
                        >
                            We provide construction services across all cities in{" "}
                            <b className="text-[--color1-bg]">
                                New Haven and Fairfield Counties, Connecticut
                            </b>
                        </p>
                        {/* <spam className="font-title text-3xl text-center">
                            Learn more about our projects in each city
                        </spam> */}
                        <Button
                            as="a"
                            href="#do-you-need-quote-job"
                            type="2"
                            style="3"
                            className="gap-2 mt-5"
                        >
                            <span className="text-xl">Let&apos;s see</span>
                            <CircleDown className="w-7 fill-white" />
                        </Button>
                    </div>
                </div>
            </section>

            <section className="px-[--padding]">
                <div className="container flex  flex-col  px-[var(--padding)] py-16 items-center justify-center gap-10 lg:gap-16">
                    <p className="font-title text-4xl text-center text-balance px-5 sm:px-16">
                        Roofing, Siding, Gutter, Carpentry and Painting work in{" "}
                        <span className="text-[--color1-bg]">Fairfield County</span>
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-32 list-none mx-auto font-title2 text-3xl sm:leading-10">
                        <li>Bridgeport</li>
                        <li>Stamford</li>
                        <li>Norwalk</li>
                        <li>Danbury</li>
                        <li>Fairfield</li>
                        <li>Greenwich</li>
                        <li>Shelton</li>
                        <li>Stratford</li>
                        <li>Trumbull</li>
                        <li>Westport</li>
                        <li>Ridgefield</li>
                        <li>Darien</li>
                        <li>Newtown</li>
                        <li>New Canaan</li>
                        <li>Monroe</li>
                        <li>Bethel</li>
                        <li>Wilton</li>
                        <li>Brookfield</li>
                        <li>New Fairfield</li>
                        <li>Weston</li>
                        <li>Easton</li>
                        <li>Redding</li>
                        <li>Sherman</li>
                    </div>
                </div>
            </section>
            <section className="bg-[--color1-bg] px-[--padding] py-20">
                <div className="container flex  flex-col  px-[var(--padding)] py-16 items-center justify-center gap-10 lg:gap-16">
                    <p
                        className="font-title text-4xl text-center text-[--color1-txt1] text-balance px-5 sm:px-16"
                        style={{ textShadow: "0 1px 2px #000" }}
                    >
                        Service Available in <b className="text-[--color1-txt]">New haven County</b>
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-32 list-none mx-auto font-title2 text-3xl text-[--color1-txt1] opacity-80 sm:leading-10">
                        <li>New Haven</li>
                        <li>Waterbury</li>
                        <li>Meriden</li>
                        <li>West Haven</li>
                        <li>Milford</li>
                        <li>Wallingford</li>
                        <li>Naugatuck</li>
                        <li>Cheshire</li>
                        <li>East Haven</li>
                        <li>Branford</li>
                        <li>North Haven</li>
                        <li>Guilford</li>
                        <li>Southbury</li>
                        <li>Madison</li>
                        <li>Oxford</li>
                        <li>Seymour</li>
                        <li>Orange</li>
                        <li>Ansonia</li>
                        <li>Derby</li>
                        <li>North Branford</li>
                        <li>Woodbridge</li>
                        <li>Beacon Falls</li>
                        <li>Prospect</li>
                        <li>Bethany</li>
                        <li>Middlebury</li>
                        <li>Hamden</li>
                        <li>Wolcott</li>
                    </div>
                </div>
            </section>
            {/* <section className="bg-[--color1-bg]">
                <div className="container flex  flex-col  px-[var(--padding)] py-16 items-center justify-center gap-5 lg:gap-16">
                    <article className="flex flex-col items-center text-[--color2-txt] gap-10">
                        <h3 className="font-title text-4xl text-center">
                            Service available in Fairfield and New Haven County
                        </h3>
                        <div className="flex flex-col font-title2 text-xl gap-5">
                            <p className="text-center">
                                We serve Fairfield and New Haven County. Our service areas cover
                                nearby and surrounding cities. We can provide cleaning and
                                disinfection, mold remediation, fire damage restoration, and water
                                damage restoration services to a Wide service area around our city.
                            </p>
                            <p className="text-center">
                                We Offer information on rnany different situations related to
                                harmful events. Our trained technicians can help you through every
                                step of the restoration process. We can return your property to a
                                state of normality. Our technicians use tried and true methods,
                                state-of-the-art equipment, and extensive training to get your
                                property back to normal!
                            </p>
                        </div>
                    </article>
                </div>
            </section> */}

            <section className="relative px-[--padding] mt-5 sm:mt-36">
                <div className="container pb-10 sm:pb-20">
                    <GoogleItems classNameWrapper="relative z-20" />
                </div>
            </section>

            <section className="px-[--padding]">
                <div className="container ">
                    <SectionContact />
                </div>
            </section>

            <section className="bg-[--color2-bg]">
                <div
                    id="do-you-need-quote-job"
                    className="container flex  flex-col sm:flex-row px-[var(--padding)] p-10 items-center justify-center gap-5 lg:gap-10"
                >
                    <h2 className="sm:w-3/4 font-title text-center text-balance lg:text-wrap sm:text-start text-4xl md:text-5xl text-[--color1-txt1] ">
                        Do you need to quote a job? Contact us
                    </h2>
                    <Button to="/contact-us" style="4" type="2" className="py-4 px-10 gap-3">
                        <span className="text-xl md:text-2xl font-title text-nowrap">
                            Do it now
                        </span>
                        <FontAwesomeIcon className="text-xl sm:text-2xl" icon={faPaperPlane} />
                    </Button>
                </div>
            </section>
        </AnimatedElement>
    );
}
