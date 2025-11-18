import React, { useState, useEffect } from "react";
import "./taj.css";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Services from "./components/Services";
import Footer from "./components/Footer";
import BookingForm from "./components/BookingForm";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

/* ---------------- HOME PAGE ---------------- */
function Home() {
    return (
        <>
            {/* Hero / Banner */}
            <section className="con-1" aria-label="Hero banner" />

            {/* Video Section */}
            <section className="con-2" aria-label="Intro video">
                <div className="con-22">
                    <video
                        width="80%"
                        height="30%"
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{ borderRadius: 20, boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}
                    >
                        <source src="/images/tajv.mp4" type="video/mp4" />
                        Your browser does not support this video tag.
                    </video>
                </div>
            </section>

            {/* Services Section */}
            <Services />

            {/* Locations Section */}
            <section className="con-4" id="con-4" aria-label="Our locations">
                <div id="map">
                    <p className="mapp">location of our saloons</p>
                    <iframe
                        title="Taj Sultan Saloon Locations"
                        className="mapp"
                        src="https://www.google.com/maps/d/u/0/embed?mid=1Hb_IpKz5TRs_uIfdFtU0EzoT-apnNrg&ehbc=2E312F&noprof=1"
                        width="500"
                        height="480"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <div>
                    <div className="con-41">location 1*</div>
                    <div className="con-41">location 2*</div>
                    <div className="con-41">location 3*</div>
                </div>
            </section>
        </>
    );
}

/* ---------------- REDIRECT COMPONENT ---------------- */
function SignInRedirect() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/SignIn");
    }, [navigate]);
    return null;
}

/* ---------------- MAIN APP ---------------- */
export default function App() {
    const [isSignedIn, setIsSignedIn] = useState(false);

    return (
        <Router>
            <Header />
            <Routes>
                {/* Homepage */}
                <Route path="/" element={<Home />} />

                {/* Sign In / Sign Up */}
                <Route path="/signin" element={<SignIn setIsSignedIn={setIsSignedIn} />} />
                <Route path="/signup" element={<SignUp />} />

                {/* Protected Booking Route */}
                <Route
                    path="/book"
                    element={isSignedIn ? <BookingForm /> : <SignInRedirect />}
                />
            </Routes>
            <Footer />
        </Router>
    );
}
