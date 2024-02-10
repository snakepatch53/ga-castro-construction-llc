import {
    faArrowRotateLeft,
    faArrowRotateRight,
    faExpand,
    faMinus,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export default function GallerySection({ images = [] }) {
    const [arr, setArr] = useState([]);

    useMemo(() => {
        const tmp = [];
        for (let i = 0; i < images.length; i += 2) {
            tmp.push({
                img1: { ...images[i], index: i },
                img2: {
                    ...images[i + 1],
                    index: i + 1,
                },
            });
        }
        setArr(tmp);
    }, [images]);
    return (
        <>
            <PhotoProvider
                speed={() => 500}
                easing={(type) =>
                    type === 2
                        ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                        : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                }
                toolbarRender={({ onScale, scale, rotate, onRotate }) => {
                    return (
                        <div className="flex gap-4 mr-5">
                            <button onClick={() => onRotate(rotate + 90)}>
                                <FontAwesomeIcon icon={faArrowRotateRight} />
                            </button>
                            <button onClick={() => onRotate(rotate - 90)}>
                                <FontAwesomeIcon icon={faArrowRotateLeft} />
                            </button>
                            <button onClick={() => onScale(scale + 1)}>
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                            <button onClick={() => onScale(scale - 1)}>
                                <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <button onClick={() => onScale(0)}>
                                <FontAwesomeIcon icon={faExpand} />
                            </button>
                        </div>
                    );
                }}
            >
                <div className="foo grid md:grid-cols-3 gap-5 rounded-md overflow-hidden">
                    {arr.map((row) => (
                        <div key={row.img1?.id + "-" + row.img2?.id} className="grid gap-5 w-full ">
                            {row.img1?.id && <Image src={row.img1?.src} alt={row.img1?.alt} />}
                            {row.img2?.id && <Image src={row.img2?.src} alt={row.img2?.alt} />}
                        </div>
                    ))}
                </div>
            </PhotoProvider>
        </>
    );
}

function Image({ src, alt = "Image of 'GA Castro Constructions LLC' gallery" }) {
    const elementSize =
        window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth;
    return (
        <PhotoView
            width={elementSize}
            height={elementSize}
            render={({ attrs }) => {
                return (
                    <div {...attrs}>
                        <img
                            className="h-full w-full object-contain select-none"
                            src={src}
                            alt={alt}
                        />
                    </div>
                );
            }}
        >
            <button className="w-full h-full max-w-full cursor-pointer rounded-xl overflow-hidden">
                <img className="h-full w-full object-cover select-none" src={src} alt={alt} />
            </button>
        </PhotoView>
    );
}

// function ImageModal({ src = null, setSrc = null }) {
//     const _window = useRef();
//     if (_window.current) {
//         _window.current.onclick = (e) => {
//             if (e.target === _window.current) setSrc(null);
//         };
//     }
//     window.onkeydown = (e) => (e.key === "Escape" ? setSrc(null) : null);
//     return (
//         <div
//             className={clsx("fixed inset-0 z-50 flex justify-center items-center rounded-xl", {
//                 block: src,
//                 hidden: !src,
//             })}
//         >
//             <div
//                 ref={_window}
//                 className="fixed inset-0 bg-black/20 backdrop-blur-sm cursor-pointer"
//             />
//             <button
//                 className="fixed top-3 right-3 z-20 w-10 aspect-square rounded-full bg-white/50"
//                 onClick={() => setSrc(null)}
//             >
//                 <FontAwesomeIcon icon={faTimes} className=" text-black" />
//             </button>
//             <div className="relative z-50 w-full max-w-[1000px]">
//                 <img
//                     src={src}
//                     className="relative z-20 w-full h-full max-h-[90vh] object-contain"
//                 />
//                 <p
//                     className="text-center text-black text-lg font-title font-bold"
//                     style={{
//                         textShadow:
//                             "1px 0 0 rgba(255, 255, 255, 0.5), -1px 0 0 rgba(255, 255, 255, 0.5), 0 1px 0 rgba(255, 255, 255, 0.5), 0 -1px 0 rgba(255, 255, 255, 0.5)",
//                     }}
//                 >
//                     Press <b>ESC</b> or <b>click outside</b> the image to close
//                 </p>
//             </div>
//         </div>
//     );
// }
