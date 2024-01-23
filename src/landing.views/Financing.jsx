import AnimatedElement from "../components/AnimatedElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faHandPointer,
    faRightLong,
    faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../landing.components/Button";

export default function Financing() {
    return (
        <AnimatedElement>
            <section className="relative ">
                <img src="/image/carpentry-1.jpg" className="absolute w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />

                <div className="container p-[--padding] py-52 sm:py-60 flex w-full h-full items-center justify-center ">
                    <div className="relative flex flex-row items-center rounded-tr-3xl rounded-bl-3xl border-solid border-4 gap-5 px-5 py-3">
                        <FontAwesomeIcon
                            className="text-3xl sm:text-4xl text-[--color2-txt]"
                            icon={faMagnifyingGlass}
                        />
                        <h1 className="text-3xl  sm:text-5xl font-title text-[--color2-txt]">
                            FINANCING
                        </h1>
                        <FontAwesomeIcon
                            className=" absolute -bottom-12 -right-7 text-5xl text-[--color2-txt] "
                            icon={faHandPointer}
                        />
                    </div>
                </div>
            </section>

            <section className="flex relative h-[300px] sm:h-[550px] justify-center">
                <div className="absolute container -top-20 flex flex-row gap-5 xl:gap-20 p-[--padding] justify-center">
                    <div className="flex flex-col bg-[--color3-bg]  max-w-[540px] rounded-3xl p-4 sm:py-14 sm:px-7 gap-2 sm:gap-5 shadow-2xl">
                        <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-title ">
                            Looking for
                        </h3>
                        <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-title  text-[--color3-txt1] ">
                            the best for you
                        </span>
                        <span className="font-bold sm:text-xl md:text-4xl lg:text-4xl  text-balance">
                            Financing experience at your fingertips
                        </span>
                        <div className="flex  w-full justify-center py-5">
                            <button className="flex bg-[#17163d] py-1 px-5 sm:py-5 gap-2  items-center rounded-full shadow-2xl">
                                <span className="font-title2 sm:text-xl lg:text-3xl text-[--color2-txt]">
                                    Finance it now
                                </span>
                                <FontAwesomeIcon
                                    icon={faRightLong}
                                    className="text-2xl text-[--color2-txt]"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="flex shadow-2xl rounded-3xl overflow-hidden">
                        <img
                            src="/image/carpentry-1.jpg"
                            className="max-w-[400px] w-full h-full  object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="relative">
                <img src="/image/carpentry-1.jpg" className="absolute w-full h-full object-cover" />

                <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
                <div className=" relative z-10 flex container p-[--padding] justify-center ">
                    <form className=" flex flex-col w-full max-w-[900px] h-full px-5 sm:p-10 md:px-20 py-10 font-title2 items-center bg-[#cdd1dd]/70 gap-5 md:gap-10 rounded-3xl shadow-2xl ">
                        <h3 className="font-title2 text-2xl">
                            Options marked with an asterisk (<span className="text-red-700">*</span>
                            ) are required
                        </h3>
                        <div className="flex flex-col md:flex-row w-full gap-5 md:gap-20">
                            <Input placeholder="*Employment status" />
                            <Input placeholder="*Annual Profits" />
                        </div>
                        <div className="flex flex-col md:flex-row w-full gap-5 md:gap-20">
                            <Input placeholder="*Credit average" />
                            <Input placeholder="Housing payment" />
                        </div>
                        <div className="flex flex-col md:flex-row w-full gap-5 md:gap-20">
                            <Input placeholder="*Credit needed" />
                            <Input placeholder="I can pay monthly" />
                        </div>
                        <div className="flex flex-col w-full items-center">
                            <h3 className="font-title text-4xl text-center">
                                Great, you&apos;re almost done!
                            </h3>
                            <h3 className="font-title2 text-2xl w-full pl-10 md:pl-32 ">
                                <span className="text-red-700">*</span> All fields are required
                            </h3>
                        </div>
                        <div className="flex flex-col md:flex-row w-full gap-5 md:gap-10">
                            <Input placeholder="First name" />
                            <Input placeholder="Last name" />
                        </div>
                        <Input placeholder="Email address" />
                        <Input placeholder="Phone number" />
                        <Input placeholder="Address" />
                        <Input placeholder="City" />
                        <div className="flex flex-col md:flex-row w-full gap-5 md:gap-10">
                            <Input placeholder="State" />
                            <Input placeholder="Zip code" />
                        </div>
                        <Input placeholder="Birthdate" />
                        <Input placeholder="Social security number" />

                        <div className="flex flex-col gap-3 pt-10 px-2">
                            <ul className="list-disc">
                                <li>
                                    I, the above-named individual, have read and consent to GA
                                    Castros Terms for Electron- ic Transactions, Signatures and
                                    Records, Terms of Use, and Privacy Policy.
                                </li>
                                <li>
                                    I am granting GA Castro Constructions LLC my written consent
                                    under the Fair Credit Reporting Act to share information I
                                    supply with banks and other lending partners for purposes of
                                    obtaining financing for my home improvement project and to
                                    obtain credit report from one or more credit reporting agencies
                                    to show me rates and credit terms I may prequalify for when
                                    obtaining financing for home improvement projects. GA Castro
                                    Constructions LLC Will not charge any fee to a consumer for the
                                    submission of the prequalification form or the use of GA
                                    Castro&apos;s credit marketplace.
                                </li>
                                <li>
                                    I agree that GA Castro Constructions LLC may share this
                                    information along with all information previously provided on an
                                    aggregated and de-identified bases with GA Castro Constructions
                                    LLC and their partners, and G.A Castro Construction LLC and that
                                    G.A Castro Construction LLC may contact me by phone, text
                                    messages or emails
                                </li>
                            </ul>

                            <div className="flex flex-col gap-2 py-10">
                                <label htmlFor="terms1" className="flex flex-row gap-2">
                                    <input type="checkbox" id="terms1" />{" "}
                                    <p>I agree to the terms above.</p>
                                </label>
                                <label htmlFor="terms2" className="flex flex-row gap-2">
                                    <div className="h-full">
                                        <input type="checkbox" id="terms2" />
                                    </div>
                                    <p>
                                        I agree that GA Castro Constructions LLC may share this
                                        information along with all information previously provided
                                        on an aggregated and de-identified bases with GA Castro
                                        Constructions LLC and their partners, and G.A Castro
                                        Construction LLC and that G.A Castro Construction LLC may
                                        contact me by Phon e, text messages or emails. Reply STOP to
                                        stop receiving these messages.
                                    </p>
                                </label>
                            </div>

                            <div className="flex  w-full justify-center  ">
                                <Button
                                    to="/about-us"
                                    style="2"
                                    type="2"
                                    className="sm:gap-3 px-5 items-center bg-white"
                                >
                                    <span className="sm:text-xl font-title2">
                                        Ask for information
                                    </span>{" "}
                                    <FontAwesomeIcon
                                        className="text-xl sm:text-2xl "
                                        icon={faPaperPlane}
                                    />
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </AnimatedElement>
    );
}

function Input({ placeholder }) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            className="w-full px-5 py-2 sm:py-3 rounded-full text-xl"
        />
    );
}