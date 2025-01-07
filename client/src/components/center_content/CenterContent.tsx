import React from "react";
import "./centerContent.css";

function CenterContent({ centerContent }) {
  const cards = [
    { id: 1, title: "Overview", content: "Centralized data and analytics" },
    { id: 2, title: "Reports", content: "Detailed performance metrics" },
    { id: 3, title: "Tasks", content: "Manage your daily tasks easily" },
  ];

  return (
    <div className="center">
      {centerContent === "RepoContent" && (
        <>
          {cards.map((card) => (
            <div className="card" key={card.id}>
              <div className="title">{card.title}</div>
              <div className="content">{card.content}</div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default CenterContent;

  