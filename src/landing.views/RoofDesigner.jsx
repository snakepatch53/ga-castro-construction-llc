import { useEffect } from "react";

export default function RoofDesigner() {
    useEffect(() => {
        // <script src="https://apis.owenscorning.com/client/widget.js" async></script>
        const script = document.createElement("script");
        script.src = "https://apis.owenscorning.com/client/widget.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return (
        <div className="container">
            <div id="visualizer" data-zip="90210">
                {" "}
            </div>
        </div>
    );
}
