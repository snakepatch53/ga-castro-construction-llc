export default function SocialItem({
    url,
    icon,
    name = null,
    value = null,
    color = null,
    gradient_color_1 = null,
    gradient_color_2 = null,
    type = 1,
}) {
    if (type == 1)
        return (
            <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="flex gap-1 h-full items-center rounded-md hover:bg-slate-50/10 px-1"
            >
                <div className="h-full max-h-4 aspect-square flex mt-1">
                    <div dangerouslySetInnerHTML={{ __html: icon }} className="icon" />
                </div>
                {value && <span className="text-sm font-link tracking-[0.5px]">{value}</span>}
            </a>
        );

    if (type == 2)
        return (
            <a href={url} target="_blank" rel="noreferrer" className="flex gap-1 hover:underline">
                <div className="h-full max-h-4 aspect-square flex mt-1">
                    <div
                        dangerouslySetInnerHTML={{ __html: icon }}
                        className="icon"
                        style={{ fill: color }}
                    />
                </div>
                <span>{name}</span>
            </a>
        );
    if (type == 3)
        return (
            <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="group relative w-[60px] h-[60px] rounded-[60px] cursor-pointer flex justify-center items-center shadow-[0_10px_25px_rgba(0,0,0,0.1)] transition-all duration-[0.5s] hover:w-[60px] sm:hover:w-[180px] hover:shadow-[0_10px_25px_rgba(0,0,0,0)]"
            >
                <div
                    className="absolute inset-0 rounded-[50px] opacity-0 transition-all duration-[0.5s] group-hover:opacity-100"
                    style={{
                        background: `linear-gradient(45deg, ${gradient_color_1}, ${gradient_color_2})`,
                    }}
                />
                <div
                    className="absolute top-[10px] w-full h-full rounded-[60px] opacity-0 transition-all duration-[0.5s] -z-1 blur-[15px] group-hover:opacity-[0.5]"
                    style={{
                        background: `linear-gradient(45deg, ${gradient_color_1}, ${gradient_color_2})`,
                    }}
                />
                <div
                    dangerouslySetInnerHTML={{ __html: icon }}
                    className={`icon fill-[#777] w-7 aspect-square delay-[0.25s] transition-all group-hover:scale-[1] sm:group-hover:scale-[0] group-hover:w-7 sm:group-hover:w-10 group-hover:fill-white`}
                ></div>
                <span className="absolute text-white text-[1.1rem] uppercase tracking-[-1px] sm:tracking-[0.1rem] scale-0 transition-all duration-[0.5s] delay-[0s] group-hover:scale-[0] md:group-hover:scale-[1] group-hover:delay-[0.25s]">
                    {name}
                </span>
            </a>
        );

    return "This type is not defined";
}
