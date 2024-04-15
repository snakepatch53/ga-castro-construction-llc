import OurServices from "./OurServices";

export default function OurComponentSection() {
    return (
        <div className="relative px-[--padding] flex flex-col">
            <div className="absolute inset-0 w-full max-h-96">
                <div className="relative w-full h-full">
                    <img
                        src="/img/services.jpg"
                        className="h-full w-full object-cover"
                        alt="Imagen de los servicios de GA Castro Constructions LLC"
                    />
                    <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
                </div>
            </div>
            <div className="container relative z-10 ">
                <h2
                    className="mb-24 mt-44 text-5xl text-center font-title font'bold text-[--color1-txt1]"
                    style={{ textShadow: "0 2px 5px #000" }}
                >
                    Our Services
                </h2>
                <OurServices />
            </div>
        </div>
    );
}
