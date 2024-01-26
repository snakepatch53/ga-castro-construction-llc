import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function GoogleItems() {
    return (
        <div className="flex flex-col">
            <div className="container flex flex-col">
                <iframe
                    src="https://3355e6ae747c4911ba0c97c856b4d52f.elf.site"
                    className="w-full h-[350px] bg-white p-10 rounded-3xl"
                ></iframe>
                <Button
                    href="https://www.google.com/maps/place//data=!4m3!3m2!1s0xac10d21f00928c31:0x74003c50fb12aae1!12e1?source=g.page.m.kd._&laa=lu-desktop-review-solicitation"
                    target="_blank"
                    rel="noreferrer"
                    style="3"
                    type="3"
                    className="mt-10 mb-5 mx-auto items-center gap-2"
                >
                    <span>View on Google Maps</span>{" "}
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-500 text-lg" />
                </Button>
            </div>
        </div>
    );
}
