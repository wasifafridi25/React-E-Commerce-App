import React from "react";

export default function Highlight({ icon, subtitle, para }) {
  return (
    <div className="highlight">
      <div className="highlight__img">
        {icon}
      </div>
      <h3 className="highlight__subtitle">{subtitle}</h3>
      <p className="highlight__para">{para}</p>
    </div>
  );
}
