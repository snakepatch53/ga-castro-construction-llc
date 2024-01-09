import { useParams } from "react-router-dom";
import services from "../mooks/services.json";
import { useEffect, useState } from "react";

export default function ServiceInfo() {
    const { title } = useParams();
    const [service, setService] = useState(null);
    useEffect(() => {
        window.scrollTo(0, 0);
        const _service = services.find((item) =>
            item.title.toLowerCase().includes(title.toLocaleLowerCase().split("-").join(" "))
        );
        if (_service) setService(_service);
    }, [title]);

    return (
        <>
            <div>
                <div className="container py-5">
                    <h2 className="text-center font-title text-2xl my-10">{service?.title}</h2>
                    <div className="relative w-full">
                        <div className="w-full h-full overflow-hidden rounded-t-lg">
                            <img
                                src={service?.src}
                                className="w-full h-full max-h-[500px] object-cover"
                            />
                        </div>
                        <div className="absolute w-full h-full overflow-hidden rounded-b-lg left-0 right-0 top-full">
                            <img
                                src={service?.src}
                                className="w-full h-full object-cover -scale-y-100"
                            />
                        </div>
                        <div
                            className="absolute w-full h-full overflow-hidden rounded-t-lg inset-0"
                            style={{
                                background:
                                    "linear-gradient(0deg, var(--color2-bg) -5%, rgba(0,0,0,0.5) 100%)",
                            }}
                        />
                        <div
                            className="absolute w-full h-full overflow-hidden rounded-b-lg left-0 right-0 top-full"
                            style={{
                                background:
                                    "linear-gradient(0deg, white 0%, white 30%, #14142252 40%, var(--color2-bg) 110%)",
                            }}
                        />
                    </div>
                    <div className="relative z-10 my-10">
                        <p
                            className="text-justify text-lg text-white p-10 font-content font-bold tracking-wider leading-10"
                            style={{
                                textShadow:
                                    "1px 0px 1px #000, -1px 0px 1px #000, 0 1px 1px #000, 0 -1px 1px #000",
                            }}
                        >
                            {service?.extend}
                        </p>
                    </div>
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
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    );
}
