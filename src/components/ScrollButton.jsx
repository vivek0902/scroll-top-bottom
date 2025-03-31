import React from "react";

function ScrollButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="scroll-buttons">
      <button onClick={scrollToTop}>Scroll to Top</button>
      <button onClick={scrollToBottom}>Scroll to Bottom</button>
    </div>
  );
}

export default ScrollButton;
