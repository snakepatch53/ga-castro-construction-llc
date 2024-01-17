import AnimatedElement from "../components/AnimatedElement";
import Button from "../landing.components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faChevronRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import SocialItem from "../landing.components/SocialItem";
import socials from "./../mooks/social.json";

export default function ServiceInsuranceClaims() {
    return (
        <AnimatedElement>
            <section>
                <div className="container">
                    <div className="flex flex-col px-20 pt-20">
                        <div className="flex gap-3 w-full">
                            <div className="flex-1 flex flex-col gap-5 justify-center">
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
                                <div className="flex h-full w-full rounded-xl overflow-hidden  ">
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
            <section>
                <div className=" container ">
                    <div className="relative flex  w-full  h-96 max-h-96 items-center overflow-hidden rounded-md">
                        <img className="w-full" src="/img/services.jpg" />
                        <div className="absolute inset-0 backdrop-blur-sm" />
                        <div className="absolute flex items-center px-5 py-10 gap-2 mx-40 rounded-2xl bg-[#ff7c00]/60 text-[var(--color1-txt1)] shadow-xl ">
                            <div className="text-xl">
                                <FontAwesomeIcon icon={faAngleLeft} className="text-[2.5rem]" />
                            </div>
                            <div>
                                <p className="text-lg">
                                    &quot;An insuranVe claim is a formal request by a policyholder
                                    to an insurance company for coverage or compensation for a
                                    covered loss or policy event.
                                </p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faChevronRight} className="text-[2.5rem]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container ">
                    <div className="flex w-full p-16 ">
                        <div className="flex flex-col gap-10 items-center w-1/2 justify-center">
                            <h3 className="text-3xl ">Contact Us</h3>
                            <div className="px-5 sm:px-10">
                                <div className="container flex justify-center gap-5">
                                    {socials.map(({ ...social }) => (
                                        <SocialItem key={social.id} type="3" {...social} />
                                    ))}
                                </div>
                            </div>
                            <div>
                                <Button to="/about-us" style="3" type="2" className="mt-2 mr-auto">
                                    <span>Do you need more info?</span> <span>&rarr;</span>
                                </Button>
                            </div>
                        </div>
                        <div className="flex flex-col w-1/2 px-8 py-5 gap-3 rounded-lg bg-[#171640] ">
                            <h3 className=" text-xl pb-3 text-[var(--color1-txt1)]">
                                Send us a message
                            </h3>
                            <Input placeholder="Your name" />
                            <Input placeholder="Your e-mail" />
                            <Input placeholder="Address home" />
                            <Input placeholder="Phone Number" />
                            <Input placeholder="Enter your name" type="textarea" />

                            <div className="flex text-[#171640] w-full justify-center ">
                                <button className="flex bg-white px-5 py-1 gap-2  items-center rounded-md ">
                                    <span className="font-bold">Send</span>
                                    <FontAwesomeIcon icon={faPaperPlane} className="text-sm" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AnimatedElement>
    );
}

function Input({ type = "text", placeholder, className = "" }) {
    const classNameInput = "py-2 px-4 rounded-md " + className;
    if (type != "textarea")
        return <input type={type} placeholder={placeholder} className={classNameInput} />;
    return <textarea placeholder={placeholder} className={classNameInput} />;
}
