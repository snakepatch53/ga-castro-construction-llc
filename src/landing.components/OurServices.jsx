import { Link } from "react-router-dom";
import services from "../mooks/services.json";
import { useEffect, useState } from "react";
import AnimatedElement from "../components/AnimatedElement";

export default function OurServices() {
    const [servicios, setServicios] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            setServicios(services);
        }, 0);
    }, []);

    return (
        <div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
                {servicios && (
                    <>
                        {servicios.map((item) => (
                            <Item key={item.id} {...item} />
                        ))}
                        <Item
                            src="/img/services2.jpg"
                            to="/services/insurance-claims"
                            title="See more"
                            description="We have a wide range of services that we offer to our clients."
                        />
                    </>
                )}
                {!servicios && (
                    <>
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                    </>
                )}
            </div>
        </div>
    );
}

function Item({ src, to, title, description }) {
    if (src && to && title && description)
        return (
            <AnimatedElement>
                <Link to={to} className="group w-full h-full rounded-lg overflow-hidden shadow-xl">
                    <div className="w-full aspect-video rounded-lg overflow-hidden">
                        <img src={src} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-5">
                        <h4 className="group-hover:underline text-xl text-center uppercase my-2 font-title">
                            {title}
                        </h4>
                        <p className="font-content text-sm">{description}</p>
                    </div>
                </Link>
            </AnimatedElement>
        );
    return (
        <AnimatedElement className="relative w-full h-full rounded-lg overflow-hidden shadow-xl bg-[var(--color4-bg)] cursor-pointe">
            <div className="brigth-animation absolute inset-0" />
            <div className="w-full aspect-video rounded-lg bg-[var(--color4-txt)]" />
            <div className="p-5">
                <h4 className="w-20 h-5 rounded-full mx-auto my-3 bg-[var(--color4-txt)]" />
                <div className="flex flex-col gap-2">
                    <p className="w-full h-3 bg-[var(--color4-txt)] rounded-full" />
                    <p className="w-5/6 h-3 bg-[var(--color4-txt)] rounded-full" />
                    <p className="w-full h-3 bg-[var(--color4-txt)] rounded-full" />
                    <p className="w-2/3 h-3 bg-[var(--color4-txt)] rounded-full" />
                    <p className="w-6/12 h-3 bg-[var(--color4-txt)] rounded-full" />
                </div>
            </div>
        </AnimatedElement>
    );
}
