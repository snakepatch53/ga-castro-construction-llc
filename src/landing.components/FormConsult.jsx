import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

export default function FormConsult({ className = "" }) {
    return (
        <form
            className={
                "flex flex-col w-full max-w-[900px] p-5 md:p-10 lg:px-20 py-10 font-title2 items-center bg-[#cdd1dd]  gap-5 rounded-3xl shadow-2xl " +
                className
            }
        >
            <h3 className="font-title text-4xl mb-5 text-center">Leave us your concerns</h3>
            <div className="flex flex-col md:flex-row w-full gap-5">
                <Input placeholder="First name" />
                <Input placeholder="Last name" />
            </div>
            <Input placeholder="Email address" />
            <Input placeholder="Phone number" />
            <Input placeholder="Address home" />
            <textarea
                className="w-full min-h-28 px-5 py-2 sm:py-3 rounded-3xl text-xl"
                placeholder="Message"
            />
            <div className="flex flex-col gap-3">
                <span className="w-full text-end text-xl">
                    <span className="text-red-600">*</span> All fields are required
                </span>
                <label htmlFor="terms" className="flex flex-row gap-2 items-start">
                    <input id="terms" type="checkbox" className="mt-1" />
                    <p>
                        I agree that GA Castro Constructions LLC contact me by phone, text messages
                        or emails. Reply STOP to stop receiving these messages.
                    </p>
                </label>
                <div className="flex  w-full justify-center ">
                    <Button
                        to="/about-us"
                        style="2"
                        type="2"
                        className="sm:gap-3 px-5 items-center bg-white"
                    >
                        <span className="sm:text-xl font-title2">Send consult</span>{" "}
                        <FontAwesomeIcon className="text-xl sm:text-2xl " icon={faPaperPlane} />
                    </Button>
                </div>
            </div>
        </form>
    );
}

function Input({ placeholder }) {
    return (
        <div className="flex-1 w-full">
            <input
                type="text"
                placeholder={placeholder}
                className="w-full  px-5 py-2 sm:py-3 rounded-full text-xl"
            />
        </div>
    );
}
