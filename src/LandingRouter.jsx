import { AnimatePresence } from "framer-motion";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./landing.views/Home";
import Header from "./landing.components/Header";
import Footer from "./landing.components/Footer";

export default function LandingRouter() {
    return (
        <>
            <Router>
                <Header />
                <div className="min-h-[var(--heigh-not-headers)]">
                    <AnimatePresence>
                        <Routes>
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </AnimatePresence>
                </div>
                <Footer />
            </Router>
        </>
    );
}
