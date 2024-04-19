import AnimatedElement from "../components/AnimatedElement";
import brands from "../mooks/brands.json";

// export default function RoofDesigner() {
//     useEffect(() => {
//         // <script src="https://apis.owenscorning.com/client/widget.js" async></script>
//         const script = document.createElement("script");
//         script.src = "https://apis.owenscorning.com/client/widget.js";
//         script.async = true;
//         document.body.appendChild(script);
//         return () => {
//             document.body.removeChild(script);
//         };
//     }, []);
//     return (
//         <div className="container">
//             <div id="visualizer" data-zip="90210">
//                 {" "}
//             </div>
//         </div>
//     );
// }
export default function RoofDesigner() {
    return (
        <AnimatedElement>
            <section className="px-[--padding] mt-20">
                <div className="container">
                    <h1 className="text-2xl  sm:text-5xl text-center  font-title">
                        DESIGN YOUR
                        <span className="text-[--color1-bg]"> HOME</span>
                    </h1>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-20">
                        {brands.map((brand) => (
                            <Item key={brand.id} href={brand.url} src={brand.src} />
                        ))}
                    </div>
                </div>
            </section>
        </AnimatedElement>
    );
}
function Item({ href, src }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="relative aspect-square p-10 rounded-lg overflow-hidden shadow-xl transition hover:scale-[1.02]"
        >
            <div className="absolute inset-0 flex justify-center items-center bg-black/10">
                {/* <a
                    className="bg-[--color1-bg] font-title font-bold text-lg text-[--color1-txt] px-3 py-2 rounded-full"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                >
                    DESIGN
                </a> */}
            </div>
            <img className="w-full h-full rounded-md overflow-hidden object-contain" src={src} />
        </a>
    );
}
