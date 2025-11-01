import React from "react";
import "./Milestones.css";

export default function Milestones() {
  const milestones = [
    { year: 2018, desc: "Started career in digital marketing" },
    { year: 2019, desc: "Managed first successful campaign" },
    { year: 2021, desc: "Worked with 5 international brands" },
    { year: 2024, desc: "Launched personal portfolio & brand consultancy" },
  ];

  return (
    <section id="milestones" className="milestones-section">
      <h2>Milestones</h2>
      <ul className="milestones-list">
        {milestones.map((m) => (
          <li key={m.year}>
            <strong>{m.year}</strong>: {m.desc}
          </li>
        ))}
      </ul>
    </section>
  );
}
