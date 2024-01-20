import AnimatedElement from "../components/AnimatedElement";
import BannerItem from "../landing.components/BannerItem";
import Button from "../landing.components/Button";
import SectionContact from "../landing.components/SectionContact";

export default function ServiceSiding() {
    return (
        <AnimatedElement>
            <section className="relative shadow-xl">
                <div className="absolute flex inset-0 -z-1 ">
                    <img src="/image/siding-banner.jpg" className="w-full h-full object-cover" />
                </div>
                <div className="container relative z-10 py-24">
                    <div
                        className="flex flex-col py-10 gap-10 text-5xl  "
                        style={{ "--textShadow": "-4px 2px 8px #000" }}
                    >
                        <span
                            className="w-full  text-start"
                            style={{ textShadow: "var(--textShadow)" }}
                        >
                            Update Your Life
                        </span>
                        <span
                            className="w-full  text-center"
                            style={{ textShadow: "var(--textShadow)" }}
                        >
                            Transform Your Space
                        </span>
                        <span
                            className="w-full  text-end"
                            style={{ textShadow: "var(--textShadow)" }}
                        >
                            Renew Your Style
                        </span>
                    </div>
                </div>
            </section>
            <section className="relative pb-28 pt-20 ">
                <div className="absolute left-0 right-0 bottom-0 ">
                    <svg viewBox="0 0 1440 320" className="fill-[#ff9500]">
                        <path d="M0,224L48,234.7C96,245,192,267,288,266.7C384,267,480,245,576,245.3C672,245,768,267,864,266.7C960,267,1056,245,1152,202.7C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
                <div className="container relative z-10 flex flex-col w-full px-40 py-20 gap-5 justify-center items-center">
                    <p className="text-4xl text-center">
                        We have expert staff in remodelin and changing siding bot outdoors and
                        indoors.
                    </p>
                    <div>
                        <Button to="/about-us" style="3" type="2" className="mt-2 mr-auto">
                            <span>Contact us now</span> <span>&rarr;</span>
                        </Button>
                    </div>
                </div>
            </section>
            <section className="relative bg-[#ff9500]">
                <div className="relative z-10 container">
                    <BannerItem
                        title="Protection and"
                        subtitle="A modern finish for your facade"
                        imgSrc="/image/banner-siding-2.jpg"
                        imgText="Siding work for a home in Stamford"
                        buttonText="Free Estimate"
                    />
                </div>
                <div className=" w-full ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path
                            fill="#171640"
                            d="M0,224L30,208C60,192,120,160,180,128C240,96,300,64,360,58.7C420,53,480,75,540,69.3C600,64,660,32,720,21.3C780,11,840,21,900,32C960,43,1020,53,1080,69.3C1140,85,1200,107,1260,106.7C1320,107,1380,85,1410,74.7L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
                        ></path>
                    </svg>
                </div>
            </section>
            <section className="relative bg-[#171640]">
                <div className="container">
                    <h1 className=" text-white">Agregar item de google</h1>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#ffffff"
                        d="M0,192L80,165.3C160,139,320,85,480,96C640,107,800,181,960,202.7C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                    ></path>
                </svg>
            </section>

            <section className="p-[var(--padding)]">
                <div className="container w-full">
                    <SectionContact />
                </div>
            </section>
        </AnimatedElement>
    );
}
