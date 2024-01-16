import { AnimatePresence } from "framer-motion";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./landing.views/Home";
import Header from "./landing.components/Header";
import Footer from "./landing.components/Footer";
import ContactUs from "./landing.views/ContactUs";
import AboutUs from "./landing.views/AboutUs";
import NotFound from "./components/NotFound";
import Services from "./landing.views/Services";
// import ServiceInfo from "./landing.views/ServiceInfo";
import ServiceCarpentry from "./landing.views/ServiceCarpentry";
import ServiceInsuranceClaims from "./landing.views/ServiceInsuranceClaims";
import ServiceRoofing from "./landing.views/ServiceRoofing";
import ServiceDeathWay from "./landing.views/ServiceDeathWay";
import ServiceCanals from "./landing.views/ServiceCanals";
import ServicePaint from "./landing.views/ServicePaint";

export default function LandingRouter() {
    return (
        <>
            <Router>
                <Header withSliderIn={["/", "/services"]} />
                <div className="min-h-[var(--heigh-not-header)]">
                    <AnimatePresence>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/services" element={<Services />} />
                            {/* <Route path="/services/:title" element={<ServiceInfo />} /> */}
                            <Route path="/services/carpentry" element={<ServiceCarpentry />} />

                            <Route
                                path="/services/insurance-claims"
                                element={<ServiceInsuranceClaims />}
                            />
                            <Route path="/services/roofing" element={<ServiceRoofing />} />
                            <Route path="/services/death-way" element={<ServiceDeathWay />} />
                            <Route path="/services/canals" element={<ServiceCanals />} />
                            <Route path="/services/paint" element={<ServicePaint />} />

                            <Route path="/about-us" element={<AboutUs />} />
                            <Route path="/contact-us" element={<ContactUs />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </AnimatePresence>
                </div>
                <Footer />
            </Router>
        </>
    );
}
