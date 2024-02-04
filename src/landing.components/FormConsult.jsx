import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faSpinner } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import ModalSuccessSendForm from "./ModalSuccessSendForm";
import useFormContact2 from "../hooks/useFormContact2";

export default function FormConsult({ className = "" }) {
    const {
        name,
        setName,
        lastName,
        setLastName,
        email,
        setEmail,
        phone,
        setPhone,
        address,
        setAddress,
        message,
        setMessage,
        terms,
        setTerms,
        nameError,
        lastNameError,
        emailError,
        phoneError,
        addressError,
        messageError,
        termsError,
        loading,
        isSent,
        setIsSent,
        handleSubmit,
    } = useFormContact2();
    return (
        <>
            <form
                onSubmit={handleSubmit}
                className={
                    "flex flex-col w-full max-w-[900px] p-5 md:p-10 lg:px-20 py-10 font-title2 items-center bg-[#cdd1dd]  gap-5 rounded-3xl shadow-2xl " +
                    className
                }
            >
                <h3 className="font-title text-4xl mb-5 text-center">Leave us your concerns</h3>
                <div className="flex flex-col md:flex-row w-full gap-5">
                    <Input
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                        error={nameError}
                        placeholder="*First name"
                    />
                    <Input
                        value={lastName}
                        error={lastNameError}
                        onChange={({ target }) => setLastName(target.value)}
                        placeholder="Last name"
                    />
                </div>
                <Input
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                    error={emailError}
                    placeholder="*Email address"
                />
                <Input
                    value={phone}
                    onChange={({ target }) => setPhone(target.value)}
                    error={phoneError}
                    placeholder="*Phone number"
                />
                <Input
                    value={address}
                    onChange={({ target }) => setAddress(target.value)}
                    error={addressError}
                    placeholder="*Address home"
                />
                <Input
                    value={message}
                    onChange={({ target }) => setMessage(target.value)}
                    error={messageError}
                    type="textarea"
                    placeholder="*Message"
                />
                <div className="flex flex-col gap-3">
                    <span className="w-full text-end text-xl">
                        <span className="text-red-600">*</span> All fields are required
                    </span>
                    <label htmlFor="el-terms" className="flex flex-row gap-2 items-start">
                        <input
                            checked={terms}
                            onChange={({ target }) => setTerms(target.checked)}
                            id="el-terms"
                            type="checkbox"
                            name="terms"
                            className="mt-1 cursor-pointer"
                        />
                        <div className="block">
                            <p>
                                I agree that GA Castro Constructions LLC contact me by phone, text
                                messages or emails. Reply STOP to stop receiving these messages.
                            </p>
                            {termsError && (
                                <span className="text-red-500 text-sm">*{termsError}</span>
                            )}
                        </div>
                    </label>
                    <div className="flex  w-full justify-center ">
                        <Button
                            to="/about-us"
                            style="2"
                            type="1"
                            _type="submit"
                            className={
                                "sm:gap-3 px-5 items-center bg-white " +
                                (loading
                                    ? "cursor-not-allowed opacity-50 hover:opacity-50 hover:bg-white hover:text-black"
                                    : "")
                            }
                            disabled={loading}
                        >
                            {!loading ? (
                                <>
                                    <span className="sm:text-xl font-title2">Send consult</span>{" "}
                                    <FontAwesomeIcon
                                        className="text-xl sm:text-2xl "
                                        icon={faPaperPlane}
                                    />
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
                </div>
            </form>
            <ModalSuccessSendForm isVisible={isSent} onClose={() => setIsSent(false)} />
        </>
    );
}

function Input({ type, placeholder, value, onChange, error = null }) {
    const classNameInput =
        "w-full  px-5 py-2 sm:py-3 text-xl " + " " + (error ? "border border-red-500" : "");
    const renderProps = {
        value,
        onChange,
        type,
        placeholder,
        className: classNameInput,
    };
    return (
        <div className="relative flex-1 w-full">
            {error && <span className="absolute top-3 right-4 text-red-400">*{error}</span>}
            {type == "textarea" ? (
                <textarea {...renderProps} className={"min-h-28 rounded-3xl " + classNameInput} />
            ) : (
                <input {...renderProps} className={"rounded-full " + classNameInput} />
            )}
        </div>
    );
}
