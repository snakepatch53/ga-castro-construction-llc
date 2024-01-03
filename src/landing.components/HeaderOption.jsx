import { Link, useLocation } from "react-router-dom";
import PlusIcon from "../icons/PlusIcon";
import MinusIcon from "../icons/MinusIcon";

export default function HeaderOption({ children, name, to, ...props }) {
    const { pathname } = useLocation();
    const isLocation = () => (pathname == to ? true : false);

    return (
        <div
            className={`
                relative lg:flex
                lg:flex-row lg:h-full 
                items-center gap-1 font-link group 
            `}
            {...props}
        >
            <Link
                to={to}
                className={`flex gap-[1px] text-md font-bold mb-1 uppercase transition-all hover:opacity-100 tracking-tighter text-nowrap ${
                    isLocation() ? "opacity-100" : "opacity-80"
                }`}
            >
                {name}
                {children && (
                    <div className={`relative w-[0.8rem]`}>
                        <PlusIcon className="w-full h-full opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
                        <MinusIcon className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                )}
            </Link>
            {children && (
                <div
                    className={`
                        lg:absolute lg:top-full lg:left-[50%] lg:translate-x-[-50%] lg:flex-column lg:w-auto lg:bg-[var(--color2-bg)] lg:text-[var(--color2-txt1)] lg:p-3 lg:rounded-b-md lg:shadow-lg lg:overflow-hidden lg:max-h-0 lg:group-hover:max-h-[300px] lg: lg:transition-all lg:opacity-0 lg:group-hover:opacity-100 lg:duration-500

                        pl-4 transition-none
                        
                    `}
                >
                    {children}
                </div>
            )}
        </div>
    );
}
