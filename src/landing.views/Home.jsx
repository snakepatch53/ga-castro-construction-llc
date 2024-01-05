import AnimatedElement from "../components/AnimatedElement";
import Carousel from "../landing.components/Carousel";
// import Slider from "../landing.components/Slider";
import Team from "../landing.components/Team";

import slides from "./../mooks/slider.json";

export default function Home() {
    return (
        <>
            <AnimatedElement>
                {/* <Slider /> */}
                <div className="w-full h-screen">
                    <Carousel data={slides} />
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className="px-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Team />
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
