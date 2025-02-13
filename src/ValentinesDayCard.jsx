import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ValentinesDayCard.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const ValentinesDayCard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showHearts, setShowHearts] = useState(false);
    const [saidYes, setSaidYes] = useState(false);

    const handleOpenCard = () => setIsOpen(true);

    const handleShowHearts = () => {
        setShowHearts(true);
        setTimeout(() => {
            setShowHearts(false);
        }, 7100);
    };

    return (
        <div className="letter-container">
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />

            {/* Background hearts animation */}
            {showHearts &&
                [...Array(55)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="dropping-heart"
                        style={{
                            left: `${Math.random() * 100}vw`,
                            fontSize: `${Math.random() * 50 + 40}px`,
                            animationDuration: `${Math.random() * 2 + 3}s`,
                        }}
                        initial={{ y: "-10vh" }}
                        animate={{ y: "100vh" }}
                        transition={{
                            opacity: { duration: 1.5, ease: "easeIn" },
                            y: { duration: Math.random() * 2 + 2, ease: "easeIn", delay: Math.random() * 3 },
                        }}
                    >
                        <i className="fas fa-heart" style={{ color: '#ff4d6d' }}></i>
                    </motion.div>
                ))}

            {/* Main Letter/Envelope Animation */}
            <motion.div
                className={`letter ${isOpen ? "open" : ""}`}
                onClick={handleOpenCard}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="envelope-front">
                    <h2 className="envelope-title">To My Love 💌</h2>
                </div>

                {isOpen && (
                    <motion.div
                        className="paper-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="message-title">Happy Valentine's Day! ❤️</h1>
                        <p className="message-text">
                            You are the light that brightens my days, the calm that guides me through the night, and the
                            stars that make my world shine. Thank you for being the beautiful soul you are.
                        </p>
                        <p className="valentine-question">Will you be my valentine? There is no other option 🥰</p>
                        <motion.button
                            className="message-button"
                            onClick={() => {
                                handleShowHearts();
                                setSaidYes(true);
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Yes ❤️
                        </motion.button>
                    </motion.div>
                )}
            </motion.div>

            {/* Modal/Overlay that appears when user says Yes */}
            {saidYes && (
                <div className="center-card-container">
                    <motion.div
                        className="center-card"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2>Now you are my valentine 💖</h2>
                        <p style={{fontSize: '16px'}}>You just made my day even more special! 🥰</p>
                        <DotLottieReact src="HeartAnimation.json" loop={false} autoplay />
                        <motion.button
                            onClick={() => setSaidYes(false)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Close ❤️
                        </motion.button>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default ValentinesDayCard;
