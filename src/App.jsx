import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import ScrollButton from "./components/ScrollButton";
import ScrollIndicator from "./components/ScrollIndicator";

function App() {
  const [scrolling, setScrolling] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Update scroll progress and visibility of the scroll indicator
  const handleScroll = () => {
    // window.scrollY: This property gives us the number of pixels that the document has been scrolled vertically from the top.
    // For example, if the user has scrolled 200px down the page, scrollY will return 200.
    // This is essentially how far the user has scrolled from the top of the page.

    //document.documentElement.scrollHeight: This is the total height of the entire document,
    // including parts that are off-screen (below the fold). It accounts for the full length of the page,
    // including all the content that may not be visible unless the user scrolls.
    // For example, if your document contains content that’s 3000px in height, this value would return 3000.

    // document.documentElement.clientHeight: This is the visible height of the browser window (viewport),
    // which is the area the user can currently see. This does not include content that is
    // outside the visible window and requires scrolling to see.
    // For example, if the browser window is 800px high, this value would return 800.

    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    setScrollProgress(scrollPercent);

    if (scrollTop > 10) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <Header />
      <ScrollIndicator scrollProgress={scrollProgress} show={scrolling} />
      <Home />
      <Contact />
      <ScrollButton />
    </div>
  );
}

export default App;
