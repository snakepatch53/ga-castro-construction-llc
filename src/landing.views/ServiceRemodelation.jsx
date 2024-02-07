import { useEffect } from "react";
import TeamItemCard from "../landing.components/TeamItemCard";

export default function ServiceRemodelation() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section>
            <div className="container flex flex-col items-center justify-center">
                <h1>Servicce Remodelation</h1>
                <TeamItemCard type="3" />
            </div>
        </section>
    );
}
