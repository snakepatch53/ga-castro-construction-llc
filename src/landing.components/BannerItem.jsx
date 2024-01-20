import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import Button from "../landing.components/Button";

export default function BannerItem({
    title,
    title2 = "",
    subtitle,
    imgSrc,
    imgText,
    imgAlt,
    buttonText = "Contact us now",
    buttonIcon = faRightLong,
    showButton = true,
}) {
    return (
        <div className="flex flex-col px-20 pt-20">
            <div className="flex flex-col gap-5 w-full lg:flex-row">
                <div className="flex-1 flex flex-col gap-5 justify-center font-title">
                    <div className="flex flex-col gap-5 pl-3">
                        <h3 className="text-6xl text-balance ">
                            {title} <span className="text-[var(--color3-txt1)] ">{title2}</span>
                        </h3>
                        <span className="text-4xl ">{subtitle}</span>
                    </div>
                    {showButton && (
                        <Button
                            to="/about-us"
                            style="3"
                            type="2"
                            className="mt-2 mr-auto gap-3 px-5 items-center"
                        >
                            <span className="text-xl font-title">{buttonText}</span>{" "}
                            <FontAwesomeIcon className="text-xl " icon={buttonIcon} />
                        </Button>
                    )}
                </div>

                <div className="flex-1 flex flex-col pt-10 justify-center items-center md:pt-0">
                    <div className="flex h-full aspect-square rounded-xl overflow-hidden  ">
                        <img src={imgSrc} alt={imgAlt} className="object-cover" />
                    </div>
                </div>
            </div>
            <div className="flex pb-5 pt-2 justify-end  font-title2 text-xl">
                <span>{imgText}</span>
            </div>
        </div>
    );
}
