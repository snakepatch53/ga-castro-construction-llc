import { AnimatePresence } from "framer-motion";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./landing.views/Home";
import Header from "./landing.components/Header";
import Footer from "./landing.components/Footer";
import ContactUs from "./landing.views/ContactUs";
import AboutUs from "./landing.views/AboutUs";
import NotFound from "./components/NotFound";

export default function LandingRouter() {
    return (
        <>
            <Router>
                <Header withSliderIn={["/"]} />
                <div className="min-h-[var(--heigh-not-header)]">
                    <AnimatePresence>
                        <Routes>
                            <Route path="/" element={<Home />} />
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
