import { Suspense, lazy, useEffect, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import info from "./mooks/info.json";
import useGoogleTranslate from "./hooks/useGoogleTranslate";
import PopupEmergencyCall from "./landing.components/PopupEmergencyCall";
import Loading from "./components/Loading";
import RoofDesigner from "./landing.views/RoofDesigner";

// Lazy load the components
const Home = lazy(() => import("./landing.views/Home"));
const Header = lazy(() => import("./landing.components/Header"));
const Footer = lazy(() => import("./landing.components/Footer"));
const ContactUs = lazy(() => import("./landing.views/ContactUs"));
const AboutUs = lazy(() => import("./landing.views/AboutUs"));
const NotFound = lazy(() => import("./components/NotFound"));
const Services = lazy(() => import("./landing.views/Services"));
const ServiceCarpentry = lazy(() => import("./landing.views/ServiceCarpentry"));
const ServiceRoofing = lazy(() => import("./landing.views/ServiceRoofing"));
const ServiceSiding = lazy(() => import("./landing.views/ServiceSiding"));
const ServicePaint = lazy(() => import("./landing.views/ServicePaint"));
const ServiceGutter = lazy(() => import("./landing.views/ServiceGutter"));
const Gallery = lazy(() => import("./landing.views/Gallery"));
const Financing = lazy(() => import("./landing.views/Financing"));
const Restoration = lazy(() => import("./landing.views/Restoration"));
const WindDamage = lazy(() => import("./landing.views/WindDamage"));
const WaterDamage = lazy(() => import("./landing.views/WaterDamage"));
const TreeDamage = lazy(() => import("./landing.views/TreeDamage"));

export default function LandingRouter() {
    const [isVisibleModalFormConsult, setIsVisibleModalFormConsult] = useState(false);
    useGoogleTranslate();

    // detect if user close tab
    useEffect(() => {
        const window_mouseout = (obj, evt, fn) => {
            if (obj.addEventListener) obj.addEventListener(evt, fn, false);
            else if (obj.attachEvent) obj.attachEvent("on" + evt, fn);
        };

        window_mouseout(document, "mouseout", (event) => {
            event = event ? event : window.event;
            var from = event.relatedTarget || event.toElement;
            if (!from || from.nodeName === "HTML") {
                console.log("Salio de la ventana");
            }
        });
    }, []);
    return (
        <BrowserRouter>
            <Header
                info={info}
                withSliderIn={[
                    "/",
                    "/services",
                    "/services/siding",
                    "/services/carpentry",
                    "restoration",
                    "/restoration/wind-damage",
                    "/restoration/water-damage",
                    "/financing",
                    "/contact-us",
                    "/gallery",
                    "/about-us",
                ]}
                isVisibleModalFormConsult={isVisibleModalFormConsult}
                setIsVisibleModalFormConsult={setIsVisibleModalFormConsult}
            />
            <Suspense fallback={<Loading />}>
                <PopupEmergencyCall url={"tel:" + info.phone} />
                <div className="min-h-[var(--heigh-not-header)]">
                    <AnimatePresence>
                        <Routes>
                            <Route path="/" element={<Home info={info} />} />
                            <Route path="/services" element={<Services info={info} />} />
                            <Route
                                path="/services/carpentry"
                                element={<ServiceCarpentry info={info} />}
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

                            <Route path="/financing" element={<Financing info={info} />} />
                            <Route path="/gallery" element={<Gallery info={info} />} />
                            <Route path="/about-us" element={<AboutUs info={info} />} />
                            <Route path="/contact-us" element={<ContactUs info={info} />} />
                            <Route path="*" element={<NotFound info={info} />} />

                            <Route path="/restoration" element={<Restoration info={info} />} />
                            <Route path="/roof-designer" element={<RoofDesigner info={info} />} />
                            <Route
                                path="/restoration/wind-damage"
                                element={<WindDamage info={info} />}
                            />
                            <Route
                                path="/restoration/water-damage"
                                element={
                                    <WaterDamage
                                        setIsVisibleModalFormConsult={setIsVisibleModalFormConsult}
                                        info={info}
                                    />
                                }
                            />
                            <Route
                                path="/restoration/tree-damage"
                                element={<TreeDamage info={info} />}
                            />
                        </Routes>
                    </AnimatePresence>
                </div>
            </Suspense>
            <Footer info={info} />
        </BrowserRouter>
    );
}
