import AnimatedElement from "../components/AnimatedElement";
import Slider from "../landing.components/Slider";
import Team from "../landing.components/Team";

export default function Home() {
    return (
        <>
            <AnimatedElement>
                <Slider />
                <br />
                <br />
                <br />
                <br />
                <div className="flex justify-center">
                    <Team />
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
