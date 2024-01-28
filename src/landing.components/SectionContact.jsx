import Button from "../landing.components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import SocialItem from "../landing.components/SocialItem";
import socials from "./../mooks/social.json";

export default function SectionContact() {
    return (
        <div className="flex flex-col sm:p-[--padding] items-center w-full gap-5 lg:flex-row font-title2">
            <div className="flex-1 flex flex-col gap-10 items-center justify-center bg">
                <h3 className="text-3xl ">Contact Us</h3>
                <div className="px-5 sm:px-10">
                    <div className="container flex justify-center gap-5">
                        {socials.map(({ ...social }) => (
                            <SocialItem key={social.id} type="3" {...social} />
                        ))}
                    </div>
                </div>
                <div className="pb-10 md:pb-0">
                    <Button to="/about-us" style="3" type="2" className="mt-2 mr-auto">
                        <span>Do you need more info?</span> <span>&rarr;</span>
                    </Button>
                </div>
            </div>
            <div className="flex-1 flex w-full justify-center pb-20">
                <div className="flex flex-col w-[600px]  lg:w-full px-8 py-5 gap-3 rounded-lg bg-[#171640]">
                    <h3 className=" text-xl pb-1 sm:pl-3 text-center sm:text-start text-[var(--color1-txt1)]">
                        Send us a message
                    </h3>
                    <Input placeholder="Your name" />
                    <Input placeholder="Your e-mail" />
                    <Input placeholder="Address home" />
                    <Input placeholder="Phone Number" />
                    <Input placeholder="Enter your name" type="textarea" />

                    <div className="flex text-[#171640] w-full justify-center ">
                        <Button
                            to="/about-us"
                            style="5"
                            type="2"
                            className="bg-white  gap-2  items-center "
                        >
                            <span className=" font-title2">Send</span>{" "}
                            <FontAwesomeIcon className="text-sm " icon={faPaperPlane} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Input({ type = "text", placeholder, className = "" }) {
    const classNameInput = "py-2 px-4 rounded-md w-full" + className;
    if (type != "textarea")
        return <input type={type} placeholder={placeholder} className={classNameInput} />;
    return <textarea placeholder={placeholder} className={classNameInput} />;
}
