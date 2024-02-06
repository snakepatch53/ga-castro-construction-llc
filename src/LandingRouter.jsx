import { AnimatePresence } from "framer-motion";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./landing.views/Home";
import Header from "./landing.components/Header";
import Footer from "./landing.components/Footer";
import ContactUs from "./landing.views/ContactUs";
import AboutUs from "./landing.views/AboutUs";
import NotFound from "./components/NotFound";
import Services from "./landing.views/Services";
import ServiceCarpentry from "./landing.views/ServiceCarpentry";
import ServiceInsuranceClaims from "./landing.views/ServiceInsuranceClaims";
import ServiceRoofing from "./landing.views/ServiceRoofing";
import ServiceSiding from "./landing.views/ServiceSiding";
import ServicePaint from "./landing.views/ServicePaint";
import ServiceGutter from "./landing.views/ServiceGutter";
import ServiceRemodelation from "./landing.views/ServiceRemodelation";
import Gallery from "./landing.views/Gallery";
import Financing from "./landing.views/Financing";
import info from "./mooks/info.json";
import PopupEmergencyCall from "./landing.components/PopupEmergencyCall";
import { useEffect } from "react";

export default function LandingRouter() {
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
        };
    }, []);
    return (
        <>
            <Router>
                <Header
                    withSliderIn={[
                        "/",
                        "/services",
                        "/services/siding",
                        "/services/carpentry",
                        "/financing",
                        "/contact-us",
                        "/gallery",
                        "/about-us",
                    ]}
                />
                <PopupEmergencyCall url="tel:1234567890" />
                <div className="min-h-[var(--heigh-not-header)]">
                    <AnimatePresence>
                        <Routes>
                            <Route path="/" element={<Home info={info} />} />
                            <Route path="/services" element={<Services info={info} />} />
                            {/* <Route path="/services/:title" element={<ServiceInfo />} /> */}
                            <Route
                                path="/services/carpentry"
                                element={<ServiceCarpentry info={info} />}
                            />

                            <Route
                                path="/services/insurance-claims"
                                element={<ServiceInsuranceClaims info={info} />}
                            />
                            <Route
                                path="/services/roofing"
                                element={<ServiceRoofing info={info} />}
                            />
                            <Route
                                path="/services/siding"
                                element={<ServiceSiding info={info} />}
                            />
                            <Route
                                path="/services/gutter"
                                element={<ServiceGutter info={info} />}
                            />
                            <Route path="/services/paint" element={<ServicePaint info={info} />} />
                            <Route
                                path="/services/remodelation"
                                element={<ServiceRemodelation info={info} />}
                            />

                            <Route path="/financing" element={<Financing info={info} />} />
                            <Route path="/gallery" element={<Gallery info={info} />} />
                            <Route path="/about-us" element={<AboutUs info={info} />} />
                            <Route path="/contact-us" element={<ContactUs info={info} />} />
                            <Route path="*" element={<NotFound info={info} />} />
                        </Routes>
                    </AnimatePresence>
                </div>
                <Footer withOutMarginTop={["/financing"]} />
            </Router>
        </>
    );
}
