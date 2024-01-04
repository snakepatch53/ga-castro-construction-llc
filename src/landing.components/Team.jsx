import social from "./../mooks/social.json";

export default function Team() {
    return (
        <>
            <div className="container grid grid-cols-4 gap-4">
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </>
    );
}

function Item() {
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
                        <img src="/team/2.jpg" className="w-fill h-full object-contain" />
                    </div>
                </div>
                <div className="flex flex-col px-5 items-center gap-4 ">
                    <div className="flex flex-col text-center gap-1">
                        <h2 className="text-base font-link">Jose Arizaga</h2>
                        <h3 className="text-sm opacity-60">TEAM</h3>
                    </div>
                    <p className="text-sm font-normal text-center opacity-85">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatum
                        placeat rerum minus deserunt odit labore eveniet saepe expedita et
                        recusandae, magni ratione magnam ducimus eum ullam ipsam. Voluptates,
                        adipisci.
                    </p>
                </div>

                <diiv className="w-full h-0.5 bg-gray-200 my-2"></diiv>

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
}
