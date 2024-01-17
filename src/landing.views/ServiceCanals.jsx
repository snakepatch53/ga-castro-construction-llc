import AnimatedElement from "../components/AnimatedElement";
import Button from "../landing.components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faChevronRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import SocialItem from "../landing.components/SocialItem";
import socials from "./../mooks/social.json";

export default function ServiceCanals() {
    return (
        <AnimatedElement>
            <section>
                <div className="container">
                    <div className="flex flex-col px-20 pt-20">
                        <div className="flex gap-3 w-full">
                            <div className="flex-1 flex flex-col gap-5 justify-center">
                                <h3 className="text-4xl text-balance">
                                    Redirects{" "}
                                    <span className="text-[var(--color3-txt1)]">Excess Rain</span>
                                </h3>
                                <span className="text-3xl">
                                    Conduct rainwater with the best materials
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
                            <span>Maintenance of gutters in a home</span>
                        </div>
                    </div>
                </div>
            </section>
        </AnimatedElement>
    );
    // return <textarea placeholder={placeholder} className={classNameInput} />;
}
