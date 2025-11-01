import React from "react";
import "./MyVideos.css";

export default function MyVideos() {
  const videos = [
    { id: "abcd1234", title: "Marketing Campaign Tips" },
    { id: "xyz9876", title: "Quick Branding Hacks (Shorts)" },
  ];

  return (
    <section id="myvideos" className="videos-section">
      <h2>My Videos</h2>
      <div className="videos-container">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
