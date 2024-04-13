import { Link } from "react-router-dom";
import { cls } from "../../lib/utils";

export default function Button({
    children = false,
    text = "",
    style = 1,
    type = 1,
    _type = null,
    as,
    ...props
}) {
    const className = props.className ? " " + props.className : "";

    let classStyle = "";
    if (style == 1) {
        classStyle =
            "landing-button-component border-[var(--color2-bg)] border-solid border-2 text-[var(--color1-txt)] hover:bg-[var(--color2-bg)] hover:text-[var(--color2-txt)] hover:fill-[var(--color2-txt)] transition-all duration-300 rounded-3xl px-4 py-2 font-bold font-link tracking-wide text-nowrap";
    } else if (style == 2) {
        classStyle =
            "landing-button-component py-3 px-6 font-bold  shadow-[0_3px_15px_2px_var(--color2-bg1)] text-[var(--color2-bg)]  rounded-full opacity-80 hover:bg-[var(--color2-bg)] hover:text-[var(--color2-txt)] hover:fill-[var(--color2-txt)] hover:opacity-100 transition-all duration-300 ";
    } else if (style == 3) {
        classStyle =
            "flex justify-center items-center px-10 py-3 bg-[var(--color2-bg)] text-[var(--color2-txt)] text-md font-content font-bold tracking-widest rounded-full transition-all duration-300 gap-1 hover:gap-3 hover:scale-105";
    } else if (style == 4) {
        classStyle =
            "flex justify-center items-center px-10 py-3 bg-[var(--color3-bg)] text-[var(--color3-txt)] text-md font-content font-bold tracking-widest rounded-full transition-all duration-300 gap-1 hover:gap-3 hover:scale-105";
    } else if (style == 5) {
        classStyle =
            "landing-button-component px-5 py-1 font-bold  shadow-[0_3px_15px_2px_var(--color2-bg1)] text-[var(--color2-bg)]  rounded-md  hover:bg-[var(--color2-bg)] hover:text-[var(--color2-txt)] hover:fill-[var(--color2-txt)] hover:opacity-100 transition-all duration-300 ";
    } else if (style == 6) {
        classStyle =
            "flex gap-2 justify-center items-center px-5 py-2 bg-[--color1-bg] text-[--color1-txt] rounded-full font-bold cursor-pointer opacity-90 transition-all duration-300  hover:opacity-100 hover:scale-105";
    }

    classStyle += " shadow-[0_2px_10px_3px_rgba(0,0,0,0.6)]";

    if (as) {
        const As = as;
        return (
            <As {...props} className={cls(classStyle, className)}>
                {children ? children : text}
            </As>
        );
    }

    if (type == 1) {
        return (
            <>
                <button {...props} type={_type} className={cls(classStyle, className)}>
                    {children ? children : text}
                </button>
            </>
        );
    } else if (type == 2) {
        return (
            <>
                <Link {...props} className={cls(classStyle, className)}>
                    {children ? children : text}
                </Link>
            </>
        );
    } else if (type == 3) {
        return (
            <>
                <a {...props} className={cls(classStyle, className)} rel="noreferrer">
                    {children ? children : text}
                </a>
            </>
        );
    }
}
