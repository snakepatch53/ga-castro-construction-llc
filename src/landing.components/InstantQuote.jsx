import { faArrowRightLong, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InstantQuote() {
    return (
        <div className=" flex flex-col w-full items-center py-10  gap-14 ">
            <h2 className="font-title text-5xl text-center  tracking-wider">
                Access an instant quote
            </h2>
            <div className="flex flex-col lg:flex-row w-full gap-10">
                <div className="flex flex-1 items-center justify-center">
                    <img src="img/16.png" alt="" />
                </div>
                <div className="flex flex-1 flex-col items-center justify-center gap-5 sm:px-10 ">
                    <h3 className="font-title text-2xl text-center text-balance tracking-wider">
                        With our express system you can see access to a free quote!
                    </h3>
                    <div className="flex flex-col gap-2 sm:ml-16">
                        <Item title="Enter the quote system" icon={faCheck} />
                        <Item title="Register your home location" icon={faCheck} />
                        <Item title="Select roofs to repair" icon={faCheck} />
                        <Item title="Fill out the contact information form" icon={faCheck} />
                        <Item
                            title="Ready, our system Will give you the exact quote and an assistant Will contact you"
                            icon={faCheck}
                        />
                    </div>
                    <div className="flex w-full items-center justify-center pr-7  sm:pr-0 gap-2 ">
                        <span className="w-96 font-title text-center sm:text-xl text-white px-5 sm:px-10 py-3 rounded-bl-3xl rounded-tr-3xl  sm:tracking-wider  bg-[#028bdb]">
                            If you want a free quote click on the side button
                        </span>
                        <FontAwesomeIcon
                            icon={faArrowRightLong}
                            className="text-5xl sm:text-8xl animate-pulse"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function Item({ title, icon }) {
    return (
        <div className="flex w-full items-center gap-1 md:gap-5 ">
            <div className="flex justify-center items-center w-6 aspect-square border-2 border-solid border-black rounded-md ">
                <FontAwesomeIcon icon={icon} className="text-lg text-green-500" />
            </div>
            <span className="flex w-full font-title text-balance text-start tracking-wider">
                {title}
            </span>
        </div>
    );
}
