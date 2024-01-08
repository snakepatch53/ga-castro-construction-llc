import SocialItem from "../landing.components/SocialItem";
import AnimatedElement from "../components/AnimatedElement";

import socials from "./../mooks/social.json";
import { useEffect } from "react";

export default function ContactUs() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <AnimatedElement>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="px-5 sm:px-10">
                <div className="container flex justify-center gap-5">
                    {socials.map(({ ...social }) => (
                        <SocialItem key={social.id} type="3" {...social} />
                    ))}
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </AnimatedElement>
    );
}
