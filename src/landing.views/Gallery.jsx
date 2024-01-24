import { useEffect } from "react";
import MapaItem from "../landing.components/MapaItem";

export default function Gallery() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <MapaItem />
        </div>
    );
}
