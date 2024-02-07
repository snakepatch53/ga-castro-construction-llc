import { clsx } from "clsx";
import Button from "../landing.components/Button";
import SocialItem from "../landing.components/SocialItem";
import socials from "./../mooks/social.json";
import FormContact from "./FormContact";

export default function SectionContact({ isCol = false }) {
    return (
        <div
            className={clsx(
                "flex flex-col sm:p-[--padding] items-center w-full gap-5 font-title2",
                {
                    "lg:flex-col-reverse": isCol,
                    "lg:flex-row": !isCol,
                }
            )}
        >
            <div className="flex-1 flex flex-col gap-10 items-center justify-center bg">
                <h3 className="text-3xl ">Contact Us</h3>
                <div className="px-1 sm:px-10">
                    <div className="container flex flex-col xs:flex-row justify-center items-center gap-1 md:gap-5">
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
                <FormContact />
            </div>
        </div>
    );
}
