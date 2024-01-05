import social from "./../mooks/social.json";

export default function TeamItemCard({ name, rol, description = "", photo, type = 1 }) {
    if (type == 1)
        return (
            <div className="bg-[#eaecf8] hover:shadow-2xl hover:bg-white font-bold">
                <div className="flex flex-col gap-3 items-center justify_center pb-5">
                    <div className="relative flex flex-col justify-center items-center w-full h-48">
                        <img
                            src="/img/card-team.jpg"
                            style={{ clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 80%)" }}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-2 rounded-full overflow-hidden flex max-w-28 w-full items-center justify-center aspect-square">
                            <img src={"/team/" + photo} className="w-fill h-full object-contain" />
                        </div>
                    </div>
                    <div className="flex flex-col px-5 items-center gap-4 ">
                        <div className="flex flex-col text-center gap-1">
                            <h2 className="text-base font-link">{name}</h2>
                            <h3 className="text-sm opacity-60">{rol}</h3>
                        </div>
                        <p className="text-sm font-normal text-center opacity-85">{description}</p>
                    </div>

                    <div className="w-full h-0.5 bg-gray-200 my-2"></div>

                    <div className="flex items-center justify-center gap-4">
                        {social.map(({ id, url, color, icon }) => (
                            <a key={id} href={url}>
                                <div
                                    dangerouslySetInnerHTML={{ __html: icon }}
                                    className="icon h-5"
                                    style={{ fill: color }}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        );
    if (type == 2)
        return (
            <div className="relative font-bold rounded-2xl h-56 flex justify-center">
                <div className="group/team flex flex-col gap-3 items-center justify_center pb-5 relative w-full rounded-2xl transition-all h-full max-w-52">
                    <img
                        src={"/team/" + photo}
                        className="group-hover/team:opacity-60 group-hover/team:-rotate-12 absolute w-full h-full  rounded-2xl object-cover transition-all"
                    />
                    <div className=" w-full h-full absolute opacity-0 rounded-2xl overflow-hidden bg-[rgba(0,0,0,0.2)] backdrop-blur-[3px]	group-hover/team:opacity-100 shadow-xl group-hover/team:rotate-6 transition-all delay-75 group-hover/team:delay-150 flex flex-col justify-center items-center">
                        <div className="flex flex-col items-center justify-center gap-4 pt-10 p-5 text-white text-center">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl leading-5">{name}</h2>
                                <span className="opacity-75 text-nowrap tracking-tight">{rol}</span>
                            </div>
                        </div>
                        <div className="w-full h-[1px] bg-gray-100/25 my-2" />
                        <div className="flex items-center justify-center gap-4 pt-2">
                            {social.map(({ id, url, color, icon }) => (
                                <a
                                    key={id}
                                    href={url}
                                    className={`fill-white hover:fill-[var(--hover-color)]`}
                                    style={{ "--hover-color": color }}
                                >
                                    <div
                                        dangerouslySetInnerHTML={{ __html: icon }}
                                        className={`icon h-5`}
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );

    return "The type is not declared";
}
