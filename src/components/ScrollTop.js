import { useState, useEffect } from "react";

function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    show && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          padding: "10px 15px",
          borderRadius: "50%",
          border: "none",
          background: "#38bdf8",
          color: "black",
          cursor: "pointer",
          fontWeight: "bold",
          zIndex: 1000
        }}
      >
        ↑
      </button>
    )
  );
}

export default ScrollTop;