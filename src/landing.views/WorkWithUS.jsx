import AnimatedElement from "../components/AnimatedElement";
import Button from "../landing.components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Worket from "../icons/Worket";
import WorkerOfice from "../icons/WorkerOfice";

export default function WorkWithUS() {
    const work =
        "https://employers.indeed.com/candidates/add?listQuery=c3RhdHVzTmFtZSUzREFjdGl2ZSUyNmlkJTNEMA== ";
    const ofice =
        "https://employers.indeed.com/candidates/add?listQuery=c3RhdHVzTmFtZSUzREFjdGl2ZSUyNmlkJTNEMA== ";
    const contactus = "/contact-us";
    return (
        <AnimatedElement>
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 w-full h-full ">
                    <img src="/image/ciudad.jpg" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-transparent" />

                <div className="container p-[--padding] py-52 sm:py-60 flex w-full h-full items-center justify-center ">
                    <div className="relative flex flex-row items-center bg-black/30 rounded-br-[60px] rounded-tl-[60px] gap-2 px-10 sm:px-16 py-7">
                        <h1 className="text-2xl  sm:text-5xl font-title text-[--color2-txt]">
                            Work with us
                        </h1>
                    </div>
                </div>
            </section>
            <section className="relative pb-40">
                <div className="absolute inset-0 ">
                    <img src="img/15.png" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10 container px-[var(--padding)] items-center justify-center ">
                    <article className="flex flex-col items-center py-20 sm:p-20">
                        <h3 className="font-title text-3xl sm:text-4xl">Worker profile</h3>
                        <p className="font-title2 text-xl sm:text-2xl text-center py-5 sm:px-24">
                            Are you interested in becoming part of our Roofer family? Read the
                            following vacancies and apply for an interview with us, we Will be happy
                            to have you.
                        </p>
                        {/* https://employers.indeed.com/candidates/add?listQuery=c3RhdHVzTmFtZSUzREFjdGl2ZSUyNmlkJTNEMA== */}
                    </article>
                    <div className="flex flex-col lg:flex-row gap-16 sm:gap-10 items-center">
                        <article className="flex flex-col w-full">
                            <div className="flex gap-2 items-center">
                                <Worket />
                                <h3 className="font-title text-xl sm:text-3xl">Subcontractor</h3>
                            </div>
                            <ul className="flex flex-col py-10 font-title2 text-lg sm:text-2xl list-disc list-outside">
                                <li>Basic knowledge in remodeling work</li>
                                <li>Learning capabilities</li>
                                <li>Time availability</li>
                                <li>
                                    Be within the Fairfield and Bridgeport area with the ability to
                                    move through out
                                </li>
                            </ul>
                            <div className="flex justify-center ">
                                <Item to={work} text="Apply now" />
                            </div>
                        </article>
                        <article className="flex flex-col w-full">
                            <div className="flex gap-2 items-center">
                                <WorkerOfice />
                                <h3 className="font-title text-xl sm:text-3xl">
                                    Door Knocker / Sales Representative
                                </h3>
                            </div>
                            <ul className="py-10 font-title2 sm:text-2xl list-disc list-outside">
                                <li>Knowledge of collection processes </li>
                                <li>Basic management of office automation programs</li>
                                <li>Good treatment in customer service</li>
                                <li>Possibilities to travel to our offices daily</li>
                            </ul>
                            <div className="flex w-full justify-center">
                                <Item to={ofice} text="Apply now" />
                            </div>
                        </article>
                    </div>
                </div>
            </section>
            <section className="bg-[--color1-bg]">
                <div className="container flex  flex-col sm:flex-row px-[var(--padding)] py-10 items-center justify-center gap-5 lg:gap-10">
                    <h2 className="sm:w-3/4 font-title text-center text-balance lg:text-wrap sm:text-start text-4xl md:text-5xl text-[--color1-txt1] ">
                        Do you have other questions? Contact us
                    </h2>
                    <Button to={contactus} style="4" type="2" className="py-4 px-10 gap-3">
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

function Item({ to, text }) {
    return (
        <Button
            style="3"
            as="a"
            href={to}
            target="_blank"
            rel="noreferrer"
            className="py-3 px-10 sm:text-xl font-title2"
            text={text}
        />
    );
}
