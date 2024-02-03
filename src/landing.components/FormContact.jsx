import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export default function FormContact() {
    // return (
    //     <form className="flex flex-col w-[600px]  lg:w-full px-8 py-5 gap-3 rounded-lg bg-[#171640]">
    //         <h3 className=" text-xl pb-1 sm:pl-3 text-center sm:text-start text-[var(--color1-txt1)]">
    //             Send us a message
    //         </h3>
    //         <Input placeholder="Your name" />
    //         <Input placeholder="Your e-mail" />
    //         <Input placeholder="Address home" />
    //         <Input placeholder="Phone Number" />
    //         <Input placeholder="Enter your name" type="textarea" />

    //         <div className="flex text-[#171640] w-full justify-center ">
    //             <Button
    //                 to="/about-us"
    //                 style="5"
    //                 type="2"
    //                 className="bg-white  gap-2  items-center "
    //             >
    //                 <span className=" font-title2">Send</span>{" "}
    //                 <FontAwesomeIcon className="text-sm " icon={faPaperPlane} />
    //             </Button>
    //         </div>
    //     </form>
    // );

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://widget.gethearth.com/script.js";
        script.id = "hearth-script";
        script.async = true;
        script.setAttribute("data-orgid", "42562");
        script.setAttribute("data-partner", "ga-castro-construction-llc");
        script.setAttribute("data-orgUuid", "2aae6549-37b2-494b-9bbe-74d0c3ace658");

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return (
        <>
            <iframe id="hearth-lead-capture-widget" className="w-full"></iframe>
        </>
    );
}

// function Input({ type = "text", placeholder, className = "" }) {
//     const classNameInput = "py-2 px-4 rounded-md w-full" + className;
//     if (type != "textarea")
//         return <input type={type} placeholder={placeholder} className={classNameInput} />;
//     return <textarea placeholder={placeholder} className={classNameInput} />;
// }
