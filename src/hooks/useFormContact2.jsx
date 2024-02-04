import { useEffect, useState } from "react";
import { isEmail } from "../utils/validations";
import { sendContactForm } from "../services/mail";

export default function useFormContact2() {
    const [name, setName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [address, setAddress] = useState(null);
    const [message, setMessage] = useState(null);
    const [terms, setTerms] = useState(null);

    const [nameError, setNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [addressError, setAddressError] = useState("");
    const [messageError, setMessageError] = useState("");
    const [termsError, setTermsError] = useState("");

    const [loading, setLoading] = useState(false);
    const [isSent, setIsSent] = useState(false);

    useEffect(() => {
        if (name == null && email == null && phone == null && address == null && message == null) {
            return;
        }

        validation();
    }, [name, lastName, email, phone, address, message, terms]); // eslint-disable-line

    const validation = () => {
        let isError = false;
        if (!name) {
            isError = true;
            setNameError("Name is required");
        } else setNameError("");
        if (!lastName) {
            isError = true;
            setLastNameError("Last name is required");
        } else setLastNameError("");
        if (!isEmail(email)) {
            isError = true;
            setEmailError("Email is invalid");
        } else setEmailError("");
        if (!phone) {
            isError = true;
            setPhoneError("Phone is required");
        } else setPhoneError("");
        if (!address) {
            isError = true;
            setAddressError("Address is required");
        } else setAddressError("");
        if (!message) {
            isError = true;
            setMessageError("Message is required");
        } else setMessageError("");
        if (!terms) {
            isError = true;
            setTermsError("You must accept the terms and conditions");
        } else setTermsError("");
        return isError;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (loading) return;
        if (validation()) return;
        setLoading(true);
        const data = {
            name: name + " " + lastName,
            email,
            phone,
            address,
            message,
        };
        sendContactForm({ data }).then((res) => {
            setLoading(false);
            if (res.success) {
                setName(null);
                setLastName(null);
                setEmail(null);
                setPhone(null);
                setAddress(null);
                setMessage(null);
                setTerms(null);

                setNameError("");
                setLastNameError("");
                setEmailError("");
                setPhoneError("");
                setAddressError("");
                setMessageError("");
                setTermsError("");

                setIsSent(true);
            }
        });
    };

    return {
        name: name || "",
        setName,
        lastName: lastName || "",
        setLastName,
        email: email || "",
        setEmail,
        phone: phone || "",
        setPhone,
        address: address || "",
        setAddress,
        message: message || "",
        setMessage,
        terms: terms || false,
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
    };
}
