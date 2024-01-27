import { useMemo, useState } from "react";

export default function GallerySection({ images = [] }) {
    const [arr, setArr] = useState([]);

    useMemo(() => {
        const tmp = [];
        for (let i = 0; i < images.length; i += 2) {
            tmp.push({
                img1: images[i],
                img2: images[i + 1],
            });
        }
        setArr(tmp);
    }, [images]);
    return (
        <div className="grid md:grid-cols-2 rounded-md overflow-hidden">
            {arr.map((row) => (
                <div key={row.img1?.id + "-" + row.img2?.id} className="grid w-full">
                    {row.img1 && <Image src={row.img1?.src} alt={row.img1?.alt} />}
                    {row.img2 && <Image src={row.img2?.src} alt={row.img2?.alt} />}
                </div>
            ))}
        </div>
    );
}

function Image({ src, alt = "Image of 'GA Castro Constructions LLC' gallery" }) {
    return <img className="h-full w-full max-w-full object-cover" src={src} alt={alt} />;
}
