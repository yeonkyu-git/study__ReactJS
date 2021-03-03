import React, { useState, useEffect } from "react";

function ScrollEvent() {
  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  return (
    <div className="App" style={{height: '5000px'}}>
      <div className="fixed-center" style={{position: 'fixed'}}>Scroll position: {scrollY}px</div>
    </div>
  );
}

export default ScrollEvent
