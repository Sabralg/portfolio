import React from "react";
import './Timeline.css';

const timelineData = [
    { year: 2022, left: "Équipière Polyvalente", right: "BTS Services Informatiques aux Organisations" },
    { year: 2023, left: "Technicienne Informatique", right: "" },
    { year: 2024, left: "Stage Développeuse Full Stack", right: "DUT Technologie de l'information" },
    { year: 2025, left: "Stage Développeuse Web", right: "BUT3 Info" },
    { year: 2025, left: "", right: "Master Design Interface Multimédia et Internet", pin: true },
];

const Timeline = () => {
    return (
        <div className="timeline-container">
            {timelineData.map((item, index) => (
                <div key={index} className="timeline-item">
                    <div className="timeline-left">{item.left}</div>
                    <div className="timeline-middle">
                    <div className="timeline-circle">
                        {item.pin && <span className="pin">📍</span>}
                    </div>
                    <div className="timeline-year">{item.year}</div>
                    </div>
                    <div className="timeline-right">{item.right}</div>
                </div>
            ))}
        </div>
    );
};
    
export default Timeline;