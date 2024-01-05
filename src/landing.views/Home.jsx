import AnimatedElement from "../components/AnimatedElement";
import Carousel from "../landing.components/Carousel";
import SocialItem from "../landing.components/SocialItem";
import TeamItemCard from "../landing.components/TeamItemCard";

import slides from "./../mooks/slider.json";
import teams from "./../mooks/team.json";
import socials from "./../mooks/social.json";

export default function Home() {
    return (
        <>
            <AnimatedElement>
                {/* <Slider /> */}
                <div className="w-full h-screen">
                    <Carousel data={slides} withSlider={true} />
                </div>

                <div className="px-5 sm:px-10 mt-32">
                    <div className="container flex justify-center gap-5">
                        {socials.map(({ ...social }) => (
                            <SocialItem key={social.id} type="3" {...social} />
                        ))}
                    </div>
                </div>

                <div className="my-12 mt-32">
                    <h2 className="text-3xl text-center">Our Team</h2>
                </div>
                <div className="px-10">
                    <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
                        {teams.map((team) => (
                            <TeamItemCard key={team.id} {...team} type="2" />
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
            </AnimatedElement>
        </>
    );
}
