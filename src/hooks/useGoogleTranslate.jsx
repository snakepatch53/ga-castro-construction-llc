import { useEffect } from "react";

export default function useGoogleTranslate() {
    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
            {
                pageLanguage: "en",
                autoDisplay: false,
                includedLanguages: "es,en",
            },
            "google_translate_element"
        );
    };
    useEffect(() => {
        var addScript = document.createElement("script");
        addScript.setAttribute(
            "src",
            "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        );
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;

        return () => {
            document.body.removeChild(addScript);
            const $items = document.querySelectorAll(".skiptranslate");
            $items.forEach((item) => {
                item.remove();
            });
        };
    }, []);
}
