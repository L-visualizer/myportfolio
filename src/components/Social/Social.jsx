import React from "react";
import "./Social.css";

export default function Social() {
  return (
    <section id="social" className="social-section">
      <h2>Follow Me on Facebook</h2>
      <div className="facebook-embed">
        <iframe
          title="Facebook Page"
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fyourpagehere&tabs=timeline&width=500&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="500"
          height="700"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
      </div>
    </section>
  );
}
