import { Link } from "react-router-dom";
import socials from "./../mooks/social.json";

export default function Footer() {
    return (
        <footer className="bg-[--color2-bg] px-[var(--padding)]">
            <div className="container text-[--color2-txt] font-title2">
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start px-5 py-8 gap-5  border-b-[1px] border-gray-500">
                    <span className="opacity-70">Follow us </span>
                    <div className="flex gap-3 text-sm opacity-75 --color2-txt">
                        {socials.map((social) => (
                            <SocialItem key={social.id} type="2" {...social} />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-7 lg:gap-5 px-5 py-8">
                    <Link to="/" className="w-28">
                        <img
                            src="/img/logo.png"
                            alt="logo"
                            className="w-full h-full object-contain"
                        />
                    </Link>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 text-center">
                        <Link className="hover:underline opacity-70" to="/financing">
                            Financing
                        </Link>
                        <Link className="hover:underline opacity-70" to="/gallery">
                            Gallery
                        </Link>
                        <Link className="hover:underline opacity-70" to="/contact-us">
                            Contac us
                        </Link>
                        <Link className="hover:underline opacity-70" to="/about-us">
                            About us
                        </Link>
                    </div>
                    <div className="mx-auto lg:ml-auto lg:mx-0 opacity-70">
                        <select className="text-black cursor-pointer rounded-sm">
                            <option value="en">English - United States</option>
                            <option value="es">Español - España</option>
                        </select>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialItem({ url, icon }) {
    return (
        <a href={url} target="_blank" rel="noreferrer">
            <div
                dangerouslySetInnerHTML={{ __html: icon }}
                className="icon w-5 aspect-square fill-white"
            />
        </a>
    );
}
