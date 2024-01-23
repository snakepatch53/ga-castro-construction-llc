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
                    href="https://www.google.com/maps/place/GA+CASTRO+CONSTRUCTION/@41.1729795,-73.2872965,11z/data=!4m13!1m3!11m2!2sEu3myHnp3XuTqtpZ2pYRxWJ1f2oAgA!3e1!3m8!1s0xac10d21f00928c31:0x74003c50fb12aae1!8m2!3d41.057441!4d-73.5517519!9m1!1b1!15sCgEqWgMiASqSARJyb29maW5nX2NvbnRyYWN0b3LgAQA!16s%2Fg%2F11s7ysy0dn?entry=ttu"
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
