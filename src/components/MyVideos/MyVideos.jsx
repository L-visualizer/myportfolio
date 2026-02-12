import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./MyVideos.css";

export default function MyVideos() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = [
    {
      id: "dQw4w9WgXcQ",
      title: "Marketing Campaign Tips",
      description:
        "Learn the essential strategies for creating successful marketing campaigns that drive engagement and conversions. Discover best practices for audience targeting and campaign optimization.",
    },
    {
      id: "jNQXAC9IVRw",
      title: "Brand Building Strategies",
      description:
        "Master the art of building a strong brand identity. Explore techniques for brand positioning, messaging, and creating lasting connections with your audience.",
    },
    {
      id: "9bZkp7q19f0",
      title: "Social Media Success",
      description:
        "Unlock the secrets to social media growth. From content strategy to community engagement, learn how to build a thriving social presence.",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const handleTabClick = (index) => {
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section id="myvideos" className="videos-section">
      <h2>My Videos</h2>

      <div className="carousel-wrapper">
        <AnimatePresence initial={false} custom={1}>
          <motion.div
            key={currentIndex}
            custom={1}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="video-tab"
          >
            <div className="tab-content">
              <div className="video-player">
                <iframe
                  src={`https://www.youtube.com/embed/${videos[currentIndex].id}`}
                  title={videos[currentIndex].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="video-description">
                <h3>{videos[currentIndex].title}</h3>
                <p>{videos[currentIndex].description}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button className="carousel-btn prev-btn" onClick={handlePrev}>
          ‹
        </button>
        <button className="carousel-btn next-btn" onClick={handleNext}>
          ›
        </button>
      </div>

      <div className="carousel-tabs">
        {videos.map((video, index) => (
          <button
            key={index}
            className={`tab-indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
