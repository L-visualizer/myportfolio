import React from "react";
import "./MyVideos.css";

export default function MyVideos() {
  const videos = [
    { id: "dQw4w9WgXcQ", title: "Marketing Campaign Tips" },
    { id: "jNQXAC9IVRw", title: "Brand Building Strategies" },
    { id: "9bZkp7q19f0", title: "Social Media Success" },
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
