import { faCircleCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function ModalSuccessSendForm({ isVisible = false, onClose = null }) {
    const _window = useRef();
    if (_window.current) {
        _window.current.onclick = (e) => {
            if (e.target === _window.current) onClose();
        };
    }
    window.onkeydown = (e) => (e.key === "Escape" ? onClose() : null);
    return (
        <motion.div
            initial={{
                display: "none",
                opacity: 0,
                scale: 0.5,
            }}
            animate={{
                display: isVisible ? "flex" : "none",
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.5,
            }}
            transition={{ duration: 0.5 }}
            className={"fixed inset-0 z-50 flex justify-center items-center "}
        >
            <div
                ref={_window}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm cursor-pointer"
            />
            <button
                className="fixed top-3 right-3 z-20 w-10 aspect-square rounded-full bg-white/50"
                onClick={onClose}
            >
                <FontAwesomeIcon icon={faTimes} className=" text-black" />
            </button>
            <div className="relative z-50 w-full max-w-96">
                <div className="flex flex-col justify-center items-center gap-5 p-5 py-14 rounded-lg bg-white">
                    <FontAwesomeIcon icon={faCircleCheck} className="text-8xl text-green-500" />
                    <p className="text-lg text-center text-balance font-content">
                        Your message has been successfully sent, we will contact you soon
                    </p>
                </div>
                <p
                    className="text-center text-black text-md font-title font-bold mt-2"
                    style={{
                        textShadow:
                            "1px 0 0 rgba(255, 255, 255, 0.5), -1px 0 0 rgba(255, 255, 255, 0.5), 0 1px 0 rgba(255, 255, 255, 0.5), 0 -1px 0 rgba(255, 255, 255, 0.5)",
                    }}
                >
                    Press <b>ESC</b> or <b>click outside</b> the image to close
                </p>
            </div>
        </motion.div>
    );
}
