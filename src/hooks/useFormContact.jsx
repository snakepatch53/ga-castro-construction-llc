import { useEffect, useState } from "react";
import { isEmail } from "../utils/validations";
import { sendContactForm } from "../services/mail";

export default function useFormContact() {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [address, setAddress] = useState(null);
    const [message, setMessage] = useState(null);

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [addressError, setAddressError] = useState("");
    const [messageError, setMessageError] = useState("");

    const [loading, setLoading] = useState(false);
    const [isSent, setIsSent] = useState(false);

    useEffect(() => {
        if (name == null && email == null && phone == null && address == null && message == null) {
            return;
        }

        validation();
    }, [name, email, phone, address, message]); // eslint-disable-line

    const validation = () => {
        let isError = false;
        if (!name) {
            isError = true;
            setNameError("Name is required");
        } else setNameError("");
        if (!isEmail(email)) {
            isError = true;
            setEmailError("Email is invalid");
        } else setEmailError("");
        if (!phone) {
            isError = true;
            setPhoneError("Phone is required");
        } else if (phone?.length < 10) {
            isError = true;
            setPhoneError("Phone is too short");
        } else setPhoneError("");
        if (!address) {
            isError = true;
            setAddressError("Address is required");
        } else if (address?.length < 10) {
            isError = true;
            setAddressError("Address is too short");
        } else setAddressError("");
        if (!message) {
            isError = true;
            setMessageError("Message is required");
        } else if (message?.length < 50) {
            isError = true;
            setMessageError("Minimum 50 characters");
        } else setMessageError("");
        return isError;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (loading) return;
        if (validation()) return;
        setLoading(true);
        const data = { name, email, phone, address, message };
        sendContactForm({ data }).then((res) => {
            setLoading(false);
            if (res.success) {
                setName(null);
                setEmail(null);
                setPhone(null);
                setAddress(null);
                setMessage(null);

                setNameError("");
                setEmailError("");
                setPhoneError("");
                setAddressError("");
                setMessageError("");

                setIsSent(true);
            }
        });
    };

    return {
        name: name || "",
        setName,
        email: email || "",
        setEmail,
        phone: phone || "",
        setPhone,
        address: address || "",
        setAddress,
        message: message || "",
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
    };
}
