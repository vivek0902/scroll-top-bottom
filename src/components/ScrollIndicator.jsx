import React from "react";

function ScrollIndicator({ show, scrollProgress }) {
  return (
    <div className={`scroll-indicator ${show ? "active" : ""}`}>
      <div className="indicator-bar" style={{ width: `${scrollProgress}%` }} />
    </div>
  );
}

export default ScrollIndicator;
