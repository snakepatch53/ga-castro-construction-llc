import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import { faPaperPlane, faSpinner } from "@fortawesome/free-solid-svg-icons";
import ModalSuccessSendForm from "./ModalSuccessSendForm";
import useFormContact from "../hooks/useFormContact";

export default function FormContact() {
    const {
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone,
        address,
        setAddress,
        message,
        setMessage,
        nameError,
        emailError,
        phoneError,
        addressError,
        messageError,
        loading,
        isSent,
        setIsSent,
        handleSubmit,
    } = useFormContact();
    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col w-[600px]  lg:w-full px-8 py-5 gap-3 rounded-lg bg-[#171640]"
            >
                <h3 className=" text-xl pb-1 sm:pl-3 text-center sm:text-start text-[var(--color1-txt1)]">
                    Send us a message
                </h3>
                <Input
                    error={nameError}
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                    placeholder="*Your name"
                />
                <Input
                    error={emailError}
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                    placeholder="*Your email"
                />
                <Input
                    error={addressError}
                    value={address}
                    onChange={({ target }) => setAddress(target.value)}
                    placeholder="*Address home"
                />
                <Input
                    error={phoneError}
                    value={phone}
                    onChange={({ target }) => setPhone(target.value)}
                    placeholder="*Phone Number"
                />
                <Input
                    error={messageError}
                    value={message}
                    onChange={({ target }) => setMessage(target.value)}
                    placeholder="*Enter your message"
                    type="textarea"
                />

                <div className="flex text-[#171640] w-full justify-center ">
                    <Button
                        style="5"
                        type="1"
                        _type="submit"
                        className={
                            "bg-white  gap-2  items-center " +
                            (loading
                                ? "cursor-not-allowed opacity-50 hover:opacity-50 hover:bg-white hover:text-black"
                                : "")
                        }
                        disabled={loading}
                    >
                        {!loading ? (
                            <>
                                <span className=" font-title2">Send</span>{" "}
                                <FontAwesomeIcon className="text-sm " icon={faPaperPlane} />
                            </>
                        ) : (
                            <>
                                <span className=" font-title2">Sending</span>{" "}
                                <FontAwesomeIcon
                                    className="text-sm "
                                    icon={faSpinner}
                                    spin={true}
                                />
                            </>
                        )}
                    </Button>
                </div>
            </form>
            <ModalSuccessSendForm isVisible={isSent} onClose={() => setIsSent(false)} />
        </>
    );
}

function Input({
    error = "",
    value = "",
    onChange = null,
    type = "text",
    placeholder,
    className = "",
}) {
    const classNameInput =
        "py-2 px-4 rounded-md w-full" + className + " " + (error ? "border border-red-500" : "");
    let rednerProps = {
        value,
        onChange,
        placeholder,
        className: classNameInput,
    };
    return (
        <div className="relative">
            {error && <span className="absolute top-2 right-2 text-red-400">*{error}</span>}
            {type == "textarea" ? <textarea {...rednerProps} /> : <input {...rednerProps} />}
        </div>
    );
}
