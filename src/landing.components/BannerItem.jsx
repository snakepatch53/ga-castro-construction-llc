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
    buttonTo = "/contact-us",
    buttonType = "2",
    buttonProps = {},
    showButton = true,
    imgTextClassName = "",
    titleClassName = "",
}) {
    return (
        <div className="flex flex-col p-[--padding] sm:px-20 pt-16">
            <div className="flex flex-col gap-5 w-full lg:flex-row">
                <div className="flex-1 flex flex-col gap-5 justify-center font-title">
                    <div className="flex flex-col gap-5 pl-3">
                        <h3 className={"text-5xl sm:text-6xl text-balance " + titleClassName}>
                            {title}{" "}
                            <span
                                className="text-[var(--color3-txt1)]"
                                style={{ textShadow: "0 1px 3px #000" }}
                            >
                                {title2}
                            </span>
                        </h3>
                        <span className="text-3xl sm:text-4xl ">{subtitle}</span>
                    </div>
                    {showButton && (
                        <Button
                            to={buttonTo}
                            style="3"
                            type={buttonType}
                            className="mt-2 mr-auto sm:gap-3 py-5 px-5 items-center"
                            {...buttonProps}
                        >
                            <span className=" sm:text-xl font-title2">{buttonText}</span>{" "}
                            <FontAwesomeIcon className=" sm:text-xl " icon={buttonIcon} />
                        </Button>
                    )}
                </div>

                <div className="flex-1 flex flex-col pt-10 justify-center items-end md:pt-0">
                    <div className="flex h-full aspect-square rounded-xl overflow-hidden  ">
                        <img src={imgSrc} alt={imgAlt} className="object-cover" />
                    </div>
                </div>
            </div>
            <div className={"flex pb-5 pt-2 justify-end  font-title2 text-xl " + imgTextClassName}>
                <span
                    style={{
                        textShadow:
                            "1px 0 3px rgba(0, 0, 0, 0.5), -1px 0 3px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.5), 0 -1px 3px rgba(0, 0, 0, 0.5)",
                    }}
                >
                    {imgText}
                </span>
            </div>
        </div>
    );
}
