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
                <AnimatePresence>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </AnimatePresence>
                <Footer />
            </Router>
        </>
    );
}
