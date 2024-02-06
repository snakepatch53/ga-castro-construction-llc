export default function PopupEmergencyCall({ url }) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="fixed z-20 bottom-2 left-1 flex h-20 animate-pulse cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out hover:animate-none"
        >
            <div className="flex items-center h-full text-lg">
                <div className="relative z-10 flex flex-col justify-center items-center h-full aspect-square rounded-full border-8 bg-red-500 text-white font-title">
                    <span className=" text-xl font-link">24/7</span>
                    <span
                        className="text-black"
                        style={{
                            textShadow:
                                "1px 0 0.5px #fff, -1px 0 0.5px #fff, 0 1px 0.5px #fff, 0 -1px 0.5px #fff",
                        }}
                    >
                        CALL
                    </span>
                </div>
                <div className="flex flex-col -translate-x-5 rounded-r-full bg-red-500 border-8">
                    <h4
                        className="py-2 px-4 pl-6 text-white font-title2"
                        style={{
                            textShadow:
                                "1px 0 1px #000, -1px 0 1px #000, 0 1px 1px #000, 0 -1px 1px #000",
                        }}
                    >
                        EMERGENCY
                    </h4>
                </div>
            </div>
        </a>
    );
}
