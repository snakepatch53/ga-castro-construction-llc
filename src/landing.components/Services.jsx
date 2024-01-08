import { Link } from "react-router-dom";

import services from "./../mooks/services.json";

export default function Services() {
    return (
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <div className="hidden col-span-2 lg:flex justify-center items-center">
                <h3 className="text-3xl text-center font-bold font-title max-w-80">
                    What are you looking for yourself?
                </h3>
            </div>
            {services.map((item) => (
                <ServiceItem key={item.id} {...item} />
            ))}
        </div>
    );
}

function ServiceItem({ to, src, title, className = "", ...props }) {
    return (
        <Link
            to={to}
            className={"group w-full cursor-pointer flex flex-col " + className}
            {...props}
        >
            <div className="w-full aspect-square overflow-hidden rounded-md">
                <img
                    src={src}
                    alt={title + " image"}
                    className="w-full h-full object-cover group-hover:scale-150 transition-all duration-500 ease-in-out"
                />
            </div>
            <span className="mt-3 block w-full font-link text-center tracking-wide group-hover:underline">
                {title}
            </span>
        </Link>
    );
}
